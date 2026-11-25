import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My warranty expired today. Convenient.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
