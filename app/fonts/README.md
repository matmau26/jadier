# Polices de marque — PP Frama

Les fichiers de police officiels **PP Frama** (Pangram Pangram Foundry) sont
chargés depuis ce dossier via `next/font/local` (voir `lib/fonts.ts`).

## Fichiers utilisés (format `.otf`)

### PP Frama — titres (`--font-display`)

- `PPFrama-Extralight.otf` / `PPFrama-ExtralightItalic.otf` → `font-weight: 200`
- `PPFrama-Regular.otf` / `PPFrama-RegularItalic.otf` → `font-weight: 400`
- `PPFrama-Black.otf` / `PPFrama-BlackItalic.otf` → `font-weight: 900`

### PP Frama Text — corps (`--font-sans`)

- `PPFramaText-Regular.otf` / `PPFramaText-RegularItalic.otf` → `font-weight: 400`

Les variables CSS sont consommées par Tailwind via `font-sans` et `font-display`.
