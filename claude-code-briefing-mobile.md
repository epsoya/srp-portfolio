# Claude Code Briefing – Mobile "OS" concept, SRP Portfolio Elijah Delgado

Dit is een uitbreiding op de bestaande desktop-portfolio (zie `claude-code-briefing.md` en de huidige `index.html` / `script.js` / `style.css`). Op mobiel (viewport < ~700px) krijgt de site een eigen "besturingssysteem"-gevoel: een homescreen met apps in plaats van de vaste sidebar. Zelfde kleuren, fonts en pill-vormentaal, andere interactiemodel.

Bouw dit als aparte mobile-laag naast de bestaande desktop-code. Op desktop verandert er niets. Op mobiel neemt dit systeem het over.

---

## Concept

De site wordt op mobiel een fictief OS. Je opent apps vanaf een homescreen, elke app is een van de bestaande tabs (Home, Projects, About Me, Archive, Contact). Binnen een app navigeer je met een dock die verandert op basis van context.

---

## Structuur

### 1. Lockscreen (intro, eenmalig bij laden)
- Naam, tagline en subtekst gecentreerd, zelfde content als de huidige home tab
- Onderin: "Swipe up to unlock" of tap-instructie
- Swipe omhoog (of tap) → animeert weg, onthult homescreen
- Zelfde SVG-achtergrond als wallpaper, subtiel zichtbaar

### 2. Homescreen (app-grid)
- Grid van tiles, één per app: HOME, PROJECTS, ABOUT ME, ARCHIVE, CONTACT
- Elke tile: groot cijfer in BOTCH (01–05) + labelnaam eronder, zelfde stijl als de huidige nav-items maar als blok i.p.v. rij
- Achtergrond: de bestaande SVG als wallpaper. Parallax via `DeviceOrientationEvent` in plaats van `mousemove` (vraag permissie op iOS 13+ met een tap-to-enable knop, want dat vereist user-gesture)
- Optioneel: badge (klein rond roze bolletje met getal) rechtsboven op de Archive-tile of Contact-tile, puur decoratief

### 3. App-open transitie
- Tik op een tile → tile scaled en positioneert zich naar volledig scherm (FLIP-achtige animatie: bewaar `getBoundingClientRect()` van de tile, animeer scale/x/y naar 0,0 / 100vw / 100vh met `gsap.to()`)
- Content van de app fade/scale in zodra de transitie klaar is
- Sluiten (terug naar homescreen) doet dezelfde animatie omgekeerd

### 4. Home-indicator
- Vast pilletje onderin het scherm (zelfde `--pill-radius` als de rest), altijd zichtbaar zolang een app open is
- Swipe omhoog vanaf het pilletje, of tap erop → sluit de app, terug naar homescreen
- Nooit zichtbaar op de homescreen zelf of de lockscreen

### 5. Contextuele dock
Een vaste balk onderin (boven de home-indicator) die van inhoud wisselt:

- **Op homescreen:** dock toont vaste snelkoppelingen — Contact-icoon en theme-toggle icoon
- **Binnen Projects of Archive:** dock vervangt de snelkoppelingen door één hamburger-icoon (drie balkjes, roze/off-white)
- **Binnen Home, About Me, Contact:** dock blijft leeg of toont alleen theme-toggle

### 6. Hamburger → bottom sheet (Projects & Archive)
- Tik op hamburger-icoon in dock → icoon animeert naar een kruisje (GSAP morph: twee balkjes roteren naar elkaar toe, middelste balkje fade out)
- Tegelijk schuift een bottom sheet omhoog vanaf onder: lijst van projecten/archiefitems
- Sheet styling: afgeronde bovenhoeken (`--pill-radius` × 2), achtergrond `--c2`, items in dezelfde pill-stijl als de huidige `.subtab-item` (roze linker accent bij actief item)
- Sluiten van de sheet: swipe naar beneden, of tik naast de sheet → sheet schuift weg, kruisje animeert terug naar hamburger. Dit sluit alléén de sheet, niet de hele app
- Tik op een item in de sheet → zelfde zoom-transitie als bij het openen van een app, laadt de projectdetail-content

### 7. About Me op mobiel
- In plaats van scrollen met scrollspy: vier swipeable "schermen" binnen de About-app — Get to know me, Education, Skillset, Future vision
- Horizontale swipe (of dots-indicator onderin om te tikken) navigeert tussen de vier
- Kleine voortgangsdots bovenin de app, vergelijkbaar met een stories-indicator, actieve dot in `--pink`

### 8. Notificatie bij thema-wissel
- Bij het tikken op de theme-toggle: een banner met tekst "Switched to Dark Mode" / "Switched to Light Mode" schuift van bovenin het scherm naar beneden, blijft ~1.2s staan, schuift weer weg
- Styling: zelfde `--c2` achtergrond, afgeronde hoeken, klein en compact zoals een systeemnotificatie

---

## JavaScript – uitbreiding op bestaande state

```js
const mobileState = {
  locked:      true,        // lockscreen actief bij laden
  activeApp:   null,        // 'home' | 'projects' | 'about' | 'archive' | 'contact' | null (homescreen)
  sheetOpen:   false,       // hamburger bottom sheet open/dicht
  aboutScreen: 0            // index 0-3 voor swipeable About-schermen
};
```

### Nieuwe functies
- `unlockScreen()` — animeert lockscreen weg, toont homescreen
- `openApp(appId, tileEl)` — FLIP-transitie van tile naar fullscreen, zet `activeApp`
- `closeApp()` — omgekeerde transitie, terug naar homescreen, reset `sheetOpen`
- `toggleSheet()` — opent/sluit bottom sheet + animeert hamburger-icoon naar kruisje en terug
- `renderDock()` — bepaalt dock-inhoud op basis van `activeApp`
- `handleSwipeUp()` / `handleSwipeDown()` — touch-gesture detectie voor home-indicator en sheet
- `goToAboutScreen(index)` — swipet naar het gekozen About-scherm

### Touch-gestures
Gebruik simpele `touchstart` / `touchmove` / `touchend` delta-berekening voor swipe-detectie. Geen library nodig, alleen verticale/horizontale delta boven een drempelwaarde (bijv. 50px) als trigger.

### Device-oriëntatie (wallpaper parallax)
```js
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  // iOS 13+: vraag permissie via een tap-knop, kan niet automatisch
}
window.addEventListener('deviceorientation', handleOrientation);
```

---

## GSAP animaties

| Moment | Animatie |
|---|---|
| Lockscreen unlock | Content schuift omhoog + fade out, homescreen fade in |
| App openen | FLIP scale/position van tile naar fullscreen (`gsap.to()` met berekende offsets) |
| App sluiten | Omgekeerde FLIP-animatie |
| Hamburger → kruisje | Twee balkjes roteren 45°, middelste balkje fade out (`gsap.to()` op losse spans) |
| Bottom sheet open/dicht | `y`-translate + fade, `power2.inOut`, zelfde timing-gevoel als bestaande subtab slide-in |
| Theme-notificatie | Slide in van boven, hold, slide out (`gsap.timeline()` met delay) |
| About swipe | Horizontale `x`-translate tussen schermen, met dots die kleur/breedte animeren |

---

## Visueel — hergebruik bestaande tokens

Geen nieuwe kleuren. Zelfde `--c1`, `--c2`, `--text`, `--text-muted`, `--pink`, `--pill-radius`, BOTCH + Montserrat.

Nieuwe elementen volgen dezelfde regels:
- Tiles: `--c2` achtergrond, `--pill-radius` maar iets groter (~16px) voor een "app icon" gevoel
- Bottom sheet: afgeronde bovenhoeken alleen, geen box-shadow, consistent met de rest van de site
- Badge: klein rond bolletje, volledig `--pink`, wit/off-white tekstje erin
- Notificatie-banner: zelfde radius als `.home-instructions`, gecentreerd bovenin met een kleine marge

---

## Breakpoint

Activeer dit systeem onder `max-width: 700px` (zelfde breakpoint als de bestaande responsive CSS). Boven die breedte blijft de huidige desktop-ervaring ongewijzigd.

---

## Aanpak

1. Detecteer viewport-breedte bij load, split naar mobile-init of desktop-init
2. Bouw lockscreen + unlock-animatie
3. Bouw homescreen grid met tiles + wallpaper
4. Bouw app-open/close FLIP-transitie
5. Bouw contextuele dock + hamburger/bottom sheet voor Projects en Archive
6. Bouw swipeable About Me schermen
7. Voeg theme-notificatie toe
8. Test op echt device (touch-gestures en device-oriëntatie werken niet goed in devtools-simulatie)
