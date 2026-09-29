# La Bellota B&B

One-page site for La Bellota, a bed & breakfast in a restored colonial house in
Recoleta, Buenos Aires. Spanish; links out to Airbnb, WhatsApp, Instagram and
Facebook for bookings and contact.

Next.js 16 · TypeScript · Tailwind CSS 4 · shadcn/ui · Motion · React Bits

## Run

```bash
npm install
npm run dev -- --port 3010   # http://localhost:3010
npm run build                # static site in out/
```

## Edit

| What | Where |
| --- | --- |
| Rooms, ratings, amenities, contact links | `lib/site.ts` |
| Sections | `components/sections/` |
| Colours, fonts, radius | `app/globals.css`, `app/layout.tsx` |
| Photos | `public/img/` |

## Deploy

`out/` is plain HTML, CSS and JS: any static host works. Under a sub-path
(e.g. GitHub Pages at `/<repo>/`), build with
`NEXT_PUBLIC_BASE_PATH=/<repo> npm run build`.
