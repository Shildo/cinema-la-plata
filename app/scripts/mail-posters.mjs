import sharp from "sharp";
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const input = "public/peliculas";
const output = "public/mail-posters";
mkdirSync(output, { recursive: true });

for (const file of readdirSync(input)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;

  const name = path.parse(file).name;
  const inFile = path.join(input, file);
  const outFile = path.join(output, `${name}.jpg`);

  if (existsSync(outFile) && statSync(outFile).mtimeMs > statSync(inFile).mtimeMs) continue;

  await sharp(inFile)
    .resize(400, 600, { fit: "cover" })
    .flatten({ background: "#000000" })
    .jpeg({ quality: 80 })
    .toFile(outFile);

  console.log("✔", name);
}