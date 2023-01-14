export type GithubItem = {
  link: string;
  name: string;
};

export type MenuItem = {
  path: string;
  label: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  created_year: string;
  frameworks: Array<string>;
  languages: Array<string>;
  commits: number;
  link: string;
};

export type WayItem = {
  year: number;
  header: string;
  description: string;
  tags: Array<string>;
};
