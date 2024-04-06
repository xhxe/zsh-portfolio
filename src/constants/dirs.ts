export const DEFAULT_DIR = "desktop";

export interface SubDirectory {
  dir: string;
  subDirs?: SubDirectory[];
}

export interface Directory {
  dir: string;
  subDirs: SubDirectory[];
}

export const directories: Directory[] = [
  {
    dir: "",
    subDirs: [
      {
        dir: "desktop",
        subDirs: [
          {
            dir: "projects",
            subDirs: [{ dir: "data.json" }],
          },
          {
            dir: "socials",
            subDirs: [{ dir: "my-socials.json" }],
          },
        ],
      },
    ],
  },
];