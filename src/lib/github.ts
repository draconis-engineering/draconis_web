export type RepoStats = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  pushed_at: string;
  open_issues_count: number;
};

const ORG = "draconis-engineering";

// aliases: our project id → actual repo names (case-insensitive)
const REPO_ALIAS: Record<string, string> = {
  dragonquant: "draconomics",
  durapy: "durapy",
  dracolix: "dracolix",
  draconomicon: "draconomicon",
  icarus: "icarus", // not yet public — will fallback
  draconiforge: "draconiforge",
  olympus: "olympus",
};

export async function fetchOrgRepos(): Promise<Record<string, RepoStats>> {
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "draconis_web",
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(`https://api.github.com/orgs/${ORG}/repos?per_page=100&sort=updated`, {
      headers,
    });
    if (!res.ok) {
      console.warn(`[github] fetch failed ${res.status} — using fallback`);
      return {};
    }
    const repos: RepoStats[] = await res.json();
    const map: Record<string, RepoStats> = {};
    for (const r of repos) {
      map[r.name.toLowerCase()] = r;
    }
    // also index by alias keys
    for (const [projId, repoName] of Object.entries(REPO_ALIAS)) {
      const key = repoName.toLowerCase();
      if (map[key] && !map[projId]) map[projId] = map[key];
    }
    return map;
  } catch (e) {
    console.warn("[github] fetch error", e);
    return {};
  }
}

export function resolveRepoKey(projectId: string): string {
  return (REPO_ALIAS[projectId.toLowerCase()] ?? projectId).toLowerCase();
}
