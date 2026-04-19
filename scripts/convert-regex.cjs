const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "content", "lessons");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

const ARR_RE = /(\bmust(?:Not)?Match:\s*\[[\s\S]*?\])/g;
const REGEX_LITERAL = /\/([^\/\n]+?)\/([gimsuy]*)/g;

function convert(arrMatch) {
  return arrMatch.replace(REGEX_LITERAL, (_m, src, flags) => {
    // Escape backslashes and single quotes for JS string literal
    const escaped = src.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    return `{ pattern: '${escaped}', flags: '${flags}' }`;
  });
}

for (const f of files) {
  const p = path.join(dir, f);
  const before = fs.readFileSync(p, "utf8");
  const after = before.replace(ARR_RE, (m) => convert(m));
  if (after !== before) {
    fs.writeFileSync(p, after);
    console.log("updated", f);
  }
}
