# Polices de marque — PP Frama

Les fichiers de police officiels **PP Frama** (Pangram Pangram Foundry) sont
chargés depuis ce dossier via `next/font/local` (voir `lib/fonts.ts`).

## Fichiers attendus (format `.otf`)

### PP Frama Display — titres (`--font-display`)

- `PPFramaDisplay-Extralight.otf` → `font-weight: 200`
- `PPFramaDisplay-Regular.otf` → `font-weight: 400`
- `PPFramaDisplay-Black.otf` → `font-weight: 900`

### PP Frama Text — corps (`--font-sans`)

- `PPFramaText-Regular.otf` → `font-weight: 400`

Les variables CSS sont consommées par Tailwind via `font-sans` et `font-display`.
