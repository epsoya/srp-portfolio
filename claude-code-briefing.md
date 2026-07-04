# Claude Code Briefing – SRP Portfolio Elijah Delgado

Gebruik dit bestand als startpunt. Bouw de portfolio op basis van de onderstaande specificaties. De bestaande `index.html` is leeg — begin daar vanaf nul.

---

## Concept

Een single-page portfolio met een app-achtig gevoel. Geen scrollende pagina — de gebruiker navigeert via een vaste zijbalk. Alles laadt in op één pagina zonder page refresh.

---

## Navigatiestructuur

Vaste sidebar aan de linkerkant, altijd zichtbaar. Puur typografisch — geen visuele elementen, alleen tekst en spacing. Genummerd, klikbaar op het cijfer:

```
01 — HOME
02 — PROJECTS
03 — ABOUT ME
04 — ARCHIVE
```

Klikken op `1` → HOME, `2` → PROJECTS, etc. Keyboard shortcuts: cijfertoets `1`–`4` navigeert naar de bijbehorende tab. `Enter` op een geselecteerde project-subtab opent het project detail.

---

## Tabstructuur & content

### 01 HOME
Geen subtabs. Bevat:
- Naam (BOTCH, groot)
- Catchy titel / tagline
- Korte subtekst die bezoeker uitnodigt te verkennen
- Instructieblok: hoe navigeer je (nummers), hoe zet je dark mode aan — bold en opvallend, niet als klein hinttekstje
- Alles in het **Engels**

### 02 PROJECTS
Subtabs = de projecten zelf, dynamisch gegenereerd vanuit de `projects` data-array.

**Flow:**
1. Klikken op PROJECTS → submenu klapt uit in de sidebar (project-namen als subtabs, scrollbaar)
2. Selecteer een project → rechterkant toont preview: grote afbeelding + metadata + korte omschrijving + "View more" knop
3. Enter of "View more" → navigeert naar `project.html?id=project-slug`
4. Op de detailpagina: sidebar verdwijnt, alleen een back-knop, volledige project content
5. Terug → index.html, state herinnert welk project actief was

**State memory:** als je naar een andere tab switcht en terugkomt naar PROJECTS, staat het laatste project nog geselecteerd.

### 03 ABOUT ME
Vier vaste subtabs (statisch, niet dynamisch):

- **Get to know me** → korte intro tekst + foto
- **Education** → tijdlijn met blokken per opleiding, jaar ernaast
- **Skillset** → icon list per skill + healthbar (voortgangsbalk) die aangeeft hoe goed je erin bent
- **Future vision** → afsluitende alinea tekst, geen extra visuele elementen

### 04 ARCHIVE
Zelfde systeem als PROJECTS — subtabs zijn archief-items, dynamisch uit een aparte `archive` data-array. Zelfde preview-layout en detailpagina-flow.

---

## JavaScript – architectuur

### State management
```js
const state = {
  activeTab: 'home',       // 'home' | 'projects' | 'about' | 'archive'
  activeSubtab: null,      // bijv. project id of 'education'
  theme: 'dark'            // 'dark' | 'light'
}
```

### Data-structuur projecten
```js
const projects = [
  {
    id: 'project-1',
    title: 'Project naam',
    category: 'UI/UX',
    year: 2025,
    image: 'img/project1.jpg',
    description: 'Korte omschrijving',
    link: '#'
  }
]

const archive = [
  // zelfde structuur als projects
]
```

### Core functies
- `navigate(tab, subtab)` — update state en render de juiste content
- `render()` — rendert sidebar + main content op basis van state
- `renderSubtabs(tab)` — genereert subtabs dynamisch voor projects/archive
- `toggleTheme()` — wisselt tussen dark en light mode

### Dark / light mode
Via CSS custom properties op `:root`. Toggle via een knop (in de sidebar of header). Voorkeur van het systeem detecteren via `prefers-color-scheme` als default.

---

## GSAP – animaties

Houd alles subtiel. Geen overdreven effecten.

| Moment | Animatie |
|---|---|
| Eerste paginalading | Fade-in + slide-up van de sidebar en hero content (staggered) |
| Tab-wissel | Huidige content fade-out, nieuwe content fade-in + lichte Y-translate |
| Subtab-wissel | Zelfde als tab-wissel maar sneller en kleiner |
| Hover op navigatie-cijfers | Kleine scale of kleurverandering via GSAP (of CSS transition) |

Gebruik `gsap.to()` en `gsap.from()` voor de meeste animaties. ScrollTrigger is niet nodig — er wordt niet gescrolled.

---

## Visual Design

### Vibe
Experimenteel, brutalist, clean. Rauw en intentioneel — geen onnodige decoratie. Kracht zit in typografie, structuur en contrast.

### Kleurpalet
```css
:root {
  --charcoal:   #1a1a1a;   /* dark mode achtergrond */
  --grey-mid:   #2e2e2e;   /* hover state sidebar (dark) */
  --off-white:  #f0ece4;   /* light mode achtergrond / dark mode tekst */
  --pink:       #ff2d78;   /* accent — ALLEEN als sierkleur, niet als tekstkleur */
}
```

Gebruik `--pink` voor: actieve indicatoren (bijv. linker border op actieve sidebar-item), subtiele decoratieve details, hover highlights. Nooit als grote tekstblokken.

### Typografie
- **BOTCH** → paginatitels, projectnamen, de grote navigatienummers (01, 02...), hero-naam
- **Space Grotesk** → body tekst, navigatielabels, metadata, beschrijvingen, subtabs
- Laad Space Grotesk via Google Fonts: `https://fonts.google.com/specimen/Space+Grotesk`
- BOTCH laden via `@font-face` (lokaal bestand of licentie-URL)

### Sidebar gedrag
```
standaard:  nummer lage opacity, label normaal gewicht
hover:      achtergrondblok wordt --grey-mid (dark) / lichtgrijs (light), zachte transition
actief:     achtergrondblok blijft donker + linker border van 3px in --pink
```

### Kaarten (project cards)
- **Border-radius:** ja, subtiel (~10–14px) — past bij BOTCH z'n ronde karakter
- Geen box-shadows
- Harde edges op de grid zelf (geen padding tussen kolommen)
- Afbeelding loopt edge-to-edge binnen de kaart
- Metadata (jaar, categorie) klein, caps, Space Grotesk

### Dark / Light mode
- Dark default
- CSS custom properties wisselen op `[data-theme="light"]` op de `<html>` tag
- Detecteer systeemvoorkeur bij eerste load via `prefers-color-scheme`
- Toggle via een knop in de sidebar (bijv. klein icoon of tekst "DARK / LIGHT")

### Referentiesites (voor visuele inspiratie)
- https://crush.enterprises/ — zware typografie, brutale grid
- https://www.lafamamsterdam.com/ — urban, bold, strak
- https://en.miharayasuhiro.jp/ — experimentele UI, onverwachte interacties

---

## Tech stack

- Vanilla HTML / CSS / JavaScript (geen framework)
- GSAP via CDN: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
- Hosting: Vercel (gekoppeld aan GitHub repository)
- Versiebeheer: Git / GitHub

---

## Bestandsstructuur (gewenst eindresultaat)

```
srp-portfolio/
├── index.html
├── style.css
├── script.js
├── data/
│   └── projects.js      (of inline in script.js)
├── img/
│   └── (projectafbeeldingen)
└── productbiografie.md
```

---

## Aanpak

1. Begin met `index.html` — semantische structuur: sidebar + main content area
2. Zet in `style.css` de CSS custom properties voor dark/light mode
3. Bouw in `script.js` de state + render-logica
4. Voeg daarna GSAP-animaties toe als laatste laag
5. Test deployment op Vercel na eerste werkende versie
