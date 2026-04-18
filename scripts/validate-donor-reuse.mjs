import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize, relative } from "node:path";

const projectRoot = process.cwd();
const implementationRoots = ["app", "src"];
const forbiddenExtensions = new Set([".astro"]);
const blockedCodePatterns = [
  /from\s+["'][^"']*\.astro["']/g,
  /import\(\s*["'][^"']*\.astro["']\s*\)/g,
  /Reference\/Barberia_demo-main/g,
  /barber-demo\/src/g,
];

const donorExclusions = [
  "src/components/Welcome.astro",
  "src/layouts/Layout.astro",
  "src/pages/galeria.astro",
  "src/pages/servicios.astro",
  "src/pages/turnos.astro",
  "src/pages/ubicacion.astro",
];

function walk(dir, output = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      if (entry === "Reference" || entry === "node_modules" || entry === ".next") continue;
      walk(fullPath, output);
      continue;
    }

    output.push(fullPath);
  }

  return output;
}

const toPosixPath = (value) => normalize(value).split("\\").join("/");

const files = implementationRoots
  .map((root) => join(projectRoot, root))
  .flatMap((root) => walk(root));

const violations = [];

for (const absolutePath of files) {
  const relPath = toPosixPath(relative(projectRoot, absolutePath));
  const extension = extname(absolutePath);

  if (forbiddenExtensions.has(extension)) {
    violations.push(`Archivo prohibido en implementación: ${relPath} (no se admite copiado directo de .astro)`);
  }

  const isCodeLike = [".ts", ".tsx", ".js", ".jsx", ".md", ".mdx"].includes(extension);
  if (!isCodeLike) continue;

  const content = readFileSync(absolutePath, "utf8");
  for (const pattern of blockedCodePatterns) {
    if (pattern.test(content)) {
      violations.push(`Referencia a código donante no permitida en ${relPath} (patrón: ${pattern})`);
    }
  }
}

if (donorExclusions.length === 0) {
  violations.push("La lista donorExclusions está vacía y debe declarar exclusiones explícitas.");
}

if (violations.length > 0) {
  console.error("\n❌ Validación de migración fallida:\n");
  for (const violation of violations) console.error(`- ${violation}`);
  process.exit(1);
}

console.log(
  `✅ Validación de migración OK: sin copiado directo de Astro ni referencias prohibidas. Exclusiones declaradas: ${donorExclusions.length}.`,
);
