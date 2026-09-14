import { copyFile, mkdir } from 'node:fs/promises';

const outputRoot = new URL('../dist/client/', import.meta.url);
const cleanRoutes = ['about', 'agenda', 'voices', 'impact', 'stories', 'methodology', 'participate'];

for (const route of cleanRoutes) {
  const cleanRouteDirectory = new URL(`${route}/`, outputRoot);
  await mkdir(cleanRouteDirectory, { recursive: true });
  await copyFile(new URL(`${route}.html`, outputRoot), new URL('index.html', cleanRouteDirectory));
}
