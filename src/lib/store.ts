import { DEFAULT_DIR, type Directory, directories } from "@/constants/dirs";

declare global {
  var dir: string;
  var folders: Directory[];
  var queue: string[];
}

globalThis.dir = DEFAULT_DIR;
globalThis.folders = directories[0].subDirs as Directory[];
globalThis.queue = [];

export const store = () => ({
  dir: globalThis.dir,
  folders: globalThis.folders,
  chanageFolders: (folders: Directory[]) => {
    globalThis.folders = folders;
  },
  changeDir: (newDir: string) => {
    globalThis.dir = newDir;
  },
});
