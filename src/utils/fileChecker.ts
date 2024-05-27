import fs from "fs";
import { RequiredFiles, requiredFiles } from "../@types";

type CheckFilesProps = {
  autoCreate?: RequiredFiles[];
};
export default function checkFiles(props?: CheckFilesProps) {
  for (let f of requiredFiles) {
    const file = f as RequiredFiles;
    const exists = fs.existsSync(file);
    if (exists) continue;
    if (!exists) {
      if (props?.autoCreate?.includes(file)) {
        if (file.includes(".ts")) {
        } else fs.mkdirSync(file);
        continue;
      }
      throw new Error(`${file} does not exist.`);
    }
  }
}
