import fs from "fs";
import { requiredFiles } from "../@types/index.js";
export default function checkFiles(props) {
    var _a;
    for (let f of requiredFiles) {
        const file = f;
        const exists = fs.existsSync(file);
        if (exists)
            continue;
        if (!exists) {
            if ((_a = props === null || props === void 0 ? void 0 : props.autoCreate) === null || _a === void 0 ? void 0 : _a.includes(file)) {
                if (file.includes(".ts")) {
                }
                else
                    fs.mkdirSync(file);
                continue;
            }
            throw new Error(`${file} does not exist.`);
        }
    }
}
