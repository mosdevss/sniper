# AGENTS.md

Vite + React + TypeScript app. Package manager is pnpm — never generate a
`package-lock.json` or `yarn.lock`, and don't suggest npm/yarn commands.

## Commands

- `pnpm dev` — start the dev server (long-running; don't run this on the
  agent's own turn, hand it back to the human)
- `pnpm build` — type-checks (`tsc -b`) then builds with Vite; this is the
  right command to verify changes compile, since it exits on its own
- `pnpm lint` — oxlint
- `pnpm format` / `pnpm run format:check` — Prettier, write vs. check-only

## Styling: 7-1 Sass architecture — don't restructure this

`src/styles/` is split into `abstracts/`, `vendors/`, `base/`, `layout/`,
`components/`, `pages/`, `themes/`. This layout is intentional, not
incidental — keep new styles inside it rather than adding loose `.scss` or
`.css` files elsewhere.

- Every subfolder has an `_index.scss` that `@forward`s its own partials.
  That's the _only_ entry point into the folder — don't `@use` a partial
  file directly from outside its folder.
- `styles.scss` is the single global entry point (imported once, in
  `src/main.tsx`). It `@use`s each of the seven folders by name, in
  cascade order. Don't add new imports to it for individual partials.
- New component styles: add a partial in `components/`, then add it to
  `components/_index.scss`'s `@forward` list. Same pattern for the other
  six folders.
- Use `@use`/`@forward` only. **Never `@import`** — it's deprecated in
  Dart Sass and removed in Dart Sass 3.0.
- Any partial that needs a design token, function, or mixin from
  `abstracts/` starts with `@use "../abstracts" as *;` — that's the
  established convention throughout this codebase; match it rather than
  switching to a namespaced `@use` in just one file.

## Deploy

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push
to `main`. If this repo is a GitHub Pages _project_ page
(`https://<user>.github.io/<repo-name>/`) rather than a root page, set
`base: "/<repo-name>/"` in `vite.config.ts` — without it, deployed asset
paths will 404.
