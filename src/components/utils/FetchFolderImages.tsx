import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
export function getImages(folderPath: string): string[] {
  const absPath = path.join(PUBLIC_DIR, folderPath);

  if (!fs.existsSync(absPath)) return [];

  return fs
    .readdirSync(absPath, { encoding: "utf8" })
    .filter(file => /\.webp$/i.test(file))
    .map(file => path.posix.join("/", folderPath, file)); // URL-friendly path
}
