---
name: golink
description: Add or update a go link redirect in public/_redirects. Usage /golink <pathname> <url>
disable-model-invocation: true
---

# Go Link Shortcut Manager

This skill adds or updates URL redirects for shortlinks under `/go/*` in `public/_redirects`.

## Arguments

The user provides two arguments:
1. **Pathname / Slug**: e.g., `go/twitter`, `/go/twitter`, `twitter`, or `go/blog`
2. **Target URL**: e.g., `https://twitter.com/BenDiuguid`

## Procedure

1. **Parse Arguments**:
   - Extract the slug and target URL from the user's prompt (e.g. `/golink go/pathname https://example.com`).

2. **Update Redirects**:
   - Run the helper script to reliably update `public/_redirects`:
     ```bash
     node .agents/skills/golink/scripts/update_redirects.js "<pathname>" "<url>"
     ```
   - Alternatively, edit `public/_redirects` directly, ensuring the new `/go/<slug>` rule is placed **above** `/go/*` and uses HTTP status code `302`.

3. **Verify Build**:
   - Run the build and test check:
     ```bash
     pnpm build && pnpm test
     ```

4. **Confirm**:
   - Display the updated redirect rule to the user and show how to test it or commit/push.
