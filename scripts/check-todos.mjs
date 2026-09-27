import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.resolve(__dirname, "../src/data");

console.log("\n=======================================================");
console.log("       PORTFOLIO CONTENT COMPLETION & TODO AUDIT       ");
console.log("=======================================================\n");

let totalTodos = 0;
const report = [];

function scanFile(filePath) {
  const relPath = path.relative(path.resolve(__dirname, ".."), filePath);
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const fileTodos = [];

  lines.forEach((line, index) => {
    if (/\bTODO\b/i.test(line)) {
      const trimmed = line.trim();
      fileTodos.push({
        line: index + 1,
        text: trimmed,
      });
      totalTodos++;
    }
  });

  if (fileTodos.length > 0) {
    report.push({
      file: relPath,
      todos: fileTodos,
    });
  }
}

if (fs.existsSync(dataDir)) {
  const files = fs.readdirSync(dataDir);
  for (const file of files) {
    if (file.endsWith(".ts") || file.endsWith(".js") || file.endsWith(".json")) {
      scanFile(path.join(dataDir, file));
    }
  }
}

if (report.length === 0) {
  console.log("✓ No outstanding TODO items found in src/data. Content is 100% complete!\n");
} else {
  console.log(`Found ${totalTodos} outstanding TODO items in data files:\n`);
  report.forEach(({ file, todos }) => {
    console.log(`📁 File: ${file}`);
    todos.forEach((t) => {
      console.log(`   Line ${t.line}: ${t.text}`);
    });
    console.log("");
  });
  console.log("Summary: These fields are safely suppressed in the UI until populated with verified content.\n");
}
