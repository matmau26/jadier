# Polices de marque — PP Frama

Les fichiers de police officiels **PP Frama** (Pangram Pangram Foundry)
doivent être déposés ici au format `woff2`. Ils sont chargés via
`next/font/local` depuis `lib/fonts.ts`.

## Fichiers attendus

### PP Frama Display (titres)

- `PPFramaDisplay-Extralight.woff2` — `font-weight: 200`
- `PPFramaDisplay-Regular.woff2` — `font-weight: 400`
- `PPFramaDisplay-Black.woff2` — `font-weight: 900`

### PP Frama Text (corps)

- `PPFramaText-Light.woff2` — `font-weight: 300`
- `PPFramaText-Regular.woff2` — `font-weight: 400`
- `PPFramaText-Medium.woff2` — `font-weight: 500`
- `PPFramaText-Bold.woff2` — `font-weight: 700`

## Activation

Une fois les fichiers déposés, ouvrir `lib/fonts.ts` et :

1. Commenter l'import `Plus_Jakarta_Sans` et les deux `sansFallback` /
   `displayFallback`.
2. Décommenter `import localFont from "next/font/local"` et les deux
   blocs `export const ppFramaDisplay = localFont({...})` /
   `export const ppFramaText = localFont({...})`.
3. `npm run build` — les variables CSS `--font-sans` et `--font-display`
   basculent automatiquement sur PP Frama.

En attendant, Plus Jakarta Sans sert de police de substitution afin que
le site reste buildable et déployable.
