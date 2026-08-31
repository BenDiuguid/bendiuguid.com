#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const redirectsPath = path.resolve(__dirname, '../../../../public/_redirects');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node update_redirects.js <pathname> <url>');
  console.error('Example: node update_redirects.js go/twitter https://twitter.com/BenDiuguid');
  process.exit(1);
}

let [rawPath, targetUrl] = args;

// Normalize path: handle 'go/slug', '/go/slug', 'slug', '/slug'
let cleanSlug = rawPath.trim();
if (cleanSlug.startsWith('/')) {
  cleanSlug = cleanSlug.slice(1);
}
if (cleanSlug.startsWith('go/')) {
  cleanSlug = cleanSlug.slice(3);
} else if (cleanSlug.startsWith('go')) {
  cleanSlug = cleanSlug.slice(2);
  if (cleanSlug.startsWith('/')) cleanSlug = cleanSlug.slice(1);
}
cleanSlug = cleanSlug.replace(/^\/+|\/+$/g, '').toLowerCase();

if (!cleanSlug) {
  console.error('Error: Invalid slug provided.');
  process.exit(1);
}

const goPath = `/go/${cleanSlug}`;

// Normalize URL: ensure https:// if missing
targetUrl = targetUrl.trim();
if (!/^https?:\/\//i.test(targetUrl) && !targetUrl.startsWith('/')) {
  targetUrl = `https://${targetUrl}`;
}

if (!fs.existsSync(redirectsPath)) {
  console.error(`Error: _redirects file not found at ${redirectsPath}`);
  process.exit(1);
}

const content = fs.readFileSync(redirectsPath, 'utf-8');
const lines = content.split('\n');

// Format new line with consistent spacing
const newRule = `${goPath.padEnd(15)} ${targetUrl}    302`;

let existingIndex = -1;
let fallbackIndex = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const parts = line.split(/\s+/);
  if (parts[0] && parts[0].toLowerCase() === goPath) {
    existingIndex = i;
    break;
  }
  if (parts[0] === '/go/*') {
    fallbackIndex = i;
  }
}

if (existingIndex !== -1) {
  lines[existingIndex] = newRule;
  console.log(`Updated existing go link: ${goPath} -> ${targetUrl}`);
} else if (fallbackIndex !== -1) {
  // Insert before the /go/* fallback line (and any comment preceding it if attached, or before the blank line)
  // Let's find if there is a blank line before fallback
  let insertAt = fallbackIndex;
  while (insertAt > 0 && (lines[insertAt - 1].startsWith('#') || lines[insertAt - 1].trim() === '')) {
    insertAt--;
  }
  lines.splice(insertAt, 0, newRule);
  console.log(`Added new go link: ${goPath} -> ${targetUrl}`);
} else {
  // Insert at top if fallback not found
  lines.unshift(newRule);
  console.log(`Added new go link: ${goPath} -> ${targetUrl}`);
}

fs.writeFileSync(redirectsPath, lines.join('\n'));
