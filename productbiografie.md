# Productbiografie – SRP Elijah Delgado

**Naam:** Elijah Delgado  
**Nummer:** 500913838  
**Studiejaar:** 4  
**SLB'er / Beoordelaar:** Michel Alders  
**Deadline:** Week 27

---

## Leerdoelen

1. **Een sterke basis in HTML, CSS en JavaScript opbouwen** – ik wil niet alleen leren hoe ik een pagina in elkaar zet, maar ook begrijpen waarom iets werkt. De focus ligt op het schrijven van schone, gestructureerde HTML en CSS, en daarna het verdiepen in JavaScript: functies, arrays, objecten, DOM-manipulatie en het bouwen van interactieve logica zonder framework.
2. **Zelfstandig hosten via Git & Vercel** – het volledige traject beheersen van lokale code naar een live productie-omgeving: versiebeheer met Git/GitHub en automatische deployment via Vercel.
3. **AI inzetten als codeer- én debuggingpartner** – leren hoe ik AI-tools (Claude, Gemini) effectief gebruik tijdens het bouwen: niet alleen voor het oplossen van fouten, maar ook als hulp bij het schrijven, begrijpen en verbeteren van code terwijl ik aan het werk ben.

---

## Fase 1 – Inventariseren en onderzoek (Week 25 | 8 uur)

### Wat ik wilde uitzoeken

In deze fase ging ik nog niet coderen. Het doel was om een helder beeld te krijgen van wat ik wilde bouwen en welke tools en platforms daarvoor het meest geschikt waren. De drie hoofdvragen:

- Wat moet mijn portfolio kunnen doen, en welke look & feel past daarbij?
- Welk hosting-platform gebruik ik voor continuous deployment?
- Waar begin ik met leren coderen — welke basis heb ik nodig voordat ik ga bouwen?

### Portfolioconcept bepalen

In gesprek met een medestudent en door het bekijken van referentiesites (crush.enterprises, lafamamsterdam.com, en.miharayasuhiro.jp) heb ik de richting van mijn portfolio bepaald. Ik wilde geen klassieke scrollende pagina, maar een app-achtig tabsysteem met een vaste genummerde sidebar. De vibe: experimenteel, brutalist, clean. Dit concept is gedocumenteerd in een apart briefing-document (`claude-code-briefing.md`).

### Onderzoek hosting-platforms

Voor dit project heb ik drie populaire hosting-platforms vergeleken: GitHub Pages, Netlify en Vercel. Het doel was om een platform te kiezen dat eenvoudig te koppelen is aan een GitHub-repository, automatisch deployt bij elke push en goed aansluit op een moderne front-end workflow.

| Platform | Voordelen | Nadelen | Conclusie |
|---|---|---|---|
| GitHub Pages | Gratis, direct geïntegreerd met GitHub, geen aparte account nodig | Alleen geschikt voor volledig statische sites, geen serverside functies, beperkte configuratiemogelijkheden | Te beperkt voor een dynamische portfolio-site |
| Netlify | Gebruiksvriendelijke interface, goede gratis tier, ondersteunt formulieren en serverless functions | Iets langzamere cold starts bij serverless functions, minder developer-gericht dan Vercel | Solide keuze, maar minder optimaal voor front-end gerichte projecten |
| Vercel | Razendsnel CDN, uitmuntende developer experience, naadloze GitHub-integratie, automatische preview-deployments per branch, gebouwd door het team achter Next.js | Gratis tier heeft limieten op teamprojecten | Beste keuze voor een front-end portfolio |

**Gekozen platform: Vercel**

Na overleg met een collega tijdens mijn stage heb ik gekozen voor Vercel. De voornaamste reden is de uitmuntende developer experience: zodra je een GitHub-repository koppelt, deployt Vercel automatisch bij elke `git push`. Daarnaast genereert Vercel voor elke branch automatisch een unieke preview-URL, wat het testen van wijzigingen vóór de live publicatie eenvoudig maakt. Het platform is specifiek gebouwd voor moderne front-end projecten en biedt een sneller CDN dan de alternatieven, wat direct zichtbaar is in de laadtijd van de site. Voor een portfolio waarbij eerste indruk telt, is dat een belangrijk voordeel. GitHub Pages viel af omdat het onvoldoende ruimte biedt voor toekomstige dynamische uitbreidingen; Netlify is een goede tweede keus maar minder gericht op de front-end workflow die ik in de beroepspraktijk wil leren beheersen.

### Oriëntatie op JavaScript en GSAP

Voordat ik ging coderen heb ik me een eerste indruk gevormd van de JavaScript- en GSAP-concepten die ik nodig zou hebben. Dit was geen diepgaand technisch onderzoek — dat vond plaats in fase 2 — maar een verkenning: wat zijn de bouwstenen, welke termen moet ik kennen, wat is de logica achter DOM-manipulatie en animaties?

Ik bekeek introductievideo's van The Net Ninja om een beeld te krijgen van het JavaScript DOM-model en het basisprincipe van GSAP-animaties. Dit gaf me genoeg context om in fase 2 gericht te gaan werken.

### Bronnen gebruikt in fase 1

- [x] [Vercel Docs](https://vercel.com/docs) — deployment en GitHub-integratie vergeleken
- [x] [GitHub Pages Docs](https://pages.github.com/) — vergeleken met Vercel
- [x] [Netlify Docs](https://docs.netlify.com) — vergeleken met Vercel
- [x] [The Net Ninja – JavaScript DOM Tutorial (intro)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V) — oriëntatie
- [x] [The Net Ninja – Git & GitHub Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR) — versiebeheer opzetten
- [x] [Traversy Media – Netlify Crash Course](https://www.youtube.com/watch?v=bjVUqvcCnxM) — vergelijking platforms

### Reflectie fase 1

*(Schrijf hier in eigen woorden hoe fase 1 verliep. Wat ging soepel, wat kostte meer tijd dan verwacht, wat leerde je al in deze fase over de richting van je project?)*

---

## Fase 2 – Praktijk (Week 26 | 12 uur)

### Wat ik wilde bouwen

Dit was de zwaarste codeerfase. Het doel was om de portfolio volledig te bouwen: de HTML/CSS-structuur opzetten, de JavaScript-logica implementeren en de GSAP-animaties toevoegen. AI zette ik in als actieve codeer- en debugpartner — niet alleen voor fouten, maar ook om code te begrijpen terwijl ik schreef.

### JavaScript — gebruikte concepten en bronnen

**State management** — in plaats van de pagina te herladen bij elke navigatieactie houdt een centraal `state`-object bij welke tab en subtab actief zijn. De UI wordt volledig opgebouwd op basis van deze state. Dit was het meest nieuwe concept voor mij: het idee dat je de pagina niet herlaadt maar de toestand bijhoudt en opnieuw rendert.
Bron: [The Net Ninja – JavaScript DOM Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V)

**Dynamisch renderen met arrays en objecten** — alle projecten zijn opgeslagen als JavaScript-objecten in een array. Een `render()`-functie genereert op basis van die data automatisch de HTML voor de subtabs en de projectpreview. Voor een nieuw project voeg ik alleen een object aan de array toe — geen HTML aanpassen.
Bron: [The Net Ninja – JavaScript DOM Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V)

**Event listeners** — voor de navigatie heb ik event listeners gebruikt op klikken én toetsenbordinput: cijfertoetsen 1–4 voor tabwisseling, pijltjestoetsen voor subtabs, Enter om een project te openen.
Bron: [MDN Web Docs – EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

**localStorage** — om de dark/light mode voorkeur te bewaren tussen sessies gebruik ik `localStorage.setItem()` en `localStorage.getItem()`. Bij het laden van de pagina wordt de opgeslagen keuze meteen toegepast.
Bron: [MDN Web Docs – localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

**URL parameters** — de projectdetailpagina (`project.html`) gebruikt `URLSearchParams` om via de URL te bepalen welk project geladen wordt (`?id=project-slug`). Zo is er één herbruikbare HTML-template voor alle projecten.
Bron: [MDN Web Docs – URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

### GSAP — gebruikte animaties en bronnen

**`gsap.from()`** — gebruikt voor de intro-animatie bij het eerste laden. De sidebar en hero-content faden in vanuit een verschoven positie (Y-translate + opacity 0 → 1), met een staggered effect zodat elk element iets later start dan het vorige.
Bron: [GSAP Docs – gsap.from()](https://gsap.com/docs/v3/GSAP/gsap.from/)

**`gsap.to()`** — bij het wisselen van tabs faded de huidige content uit en de nieuwe content in met een lichte opwaartse beweging. Subtiel, zodat het de aandacht niet trekt maar de overgang wel soepeler maakt.
Bron: [GSAP Docs – gsap.to()](https://gsap.com/docs/v3/GSAP/gsap.to/)

**Slide-in animatie voor subtabpaneel** — het subtabpaneel schuift vanuit links in beeld wanneer een hoofdtab geselecteerd wordt (`x: -20` → `x: 0`, gecombineerd met opacity). Bij het sluiten schuift het terug.
Bron: [The Net Ninja – GSAP Animations](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g1HFtu7QqQThvos1OcKEL)

**`stagger`** — zorgt ervoor dat elementen in een lijst één voor één animeren in plaats van allemaal tegelijk. Gebruikt bij de projectsubtabs en de intro-animatie van de sidebar-items.
Bron: [GSAP Docs – Staggers](https://gsap.com/docs/v3/Staggers/)

**Clip-path wipe voor tab-transities** — bij het wisselen van hoofdtabs wordt de outgoing content weggeclipped van onder naar boven (`clip-path: inset(0 0 0% 0)` → `inset(0 0 100% 0)`), waarna de nieuwe content van boven naar beneden inkomt. Dit geeft de overgang meer karakter dan een simpele fade.
Bron: [GSAP Docs – gsap.to()](https://gsap.com/docs/v3/GSAP/gsap.to/)

**SVG achtergrond met muisparallax** — op de homepage staat een SVG-afbeelding in de achtergrond met lage opacity. Via een `mousemove` event listener wordt de muispositie als percentage van het scherm berekend en omgekeerd: muis linksboven → SVG rechtsonder. GSAP's `gsap.to()` animeert de positie met een vertraging (`duration: 1.2, ease: power2.out`) zodat de beweging organisch aanvoelt. Er is ook een lichte rotatie gekoppeld aan de X-positie van de muis. Bij het verlaten van de home tab wordt de event listener opgeruimd.
Bron: [Parallax MouseMove Effect – YouTube](https://www.youtube.com/watch?v=q8Wv2L1Vr4E) · [GSAP Community – Background parallax on mouse move](https://gsap.com/community/forums/topic/17320-background-parallax-effect-on-mouse-move/) · [CodePen voorbeeld](https://codepen.io/jenya/pen/BayZGMq)

### Bronnen gebruikt in fase 2

- [x] [The Net Ninja – JavaScript DOM Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V)
- [x] [The Net Ninja – GSAP Animations](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g1HFtu7QqQThvos1OcKEL)
- [x] [GSAP Documentatie](https://gsap.com/docs/v3/)
- [x] [GSAP Docs – Staggers](https://gsap.com/docs/v3/Staggers/)
- [x] [Parallax MouseMove Effect – YouTube](https://www.youtube.com/watch?v=q8Wv2L1Vr4E)
- [x] [GSAP Community – Background parallax on mousemove](https://gsap.com/community/forums/topic/17320-background-parallax-effect-on-mouse-move/)
- [x] [CodePen – Parallax Mouse Move GSAP](https://codepen.io/jenya/pen/BayZGMq)
- [x] [MDN Web Docs – addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [x] [MDN Web Docs – localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [x] [MDN Web Docs – URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [x] Claude (Cowork) — sparringpartner voor architectuurbeslissingen en code-hulp
- [x] Claude Code — schrijven, debuggen en itereren van de codebase

### Proces & beslissingen

*(Beschrijf hier stap voor stap hoe je het hebt gebouwd. Welke volgorde heb je aangehouden? Welke keuzes heb je gemaakt en waarom? Voeg screenshots toe waar relevant.)*

### AI-gebruik tijdens het coderen

| Vraag / Probleem | Tool gebruikt | Wat leverde het op? |
|---|---|---|
| Sparren over portfoliostructuur en JS-aanpak | Claude (Cowork) | Volledige technische briefing uitgewerkt als startpunt voor Claude Code |
| Schrijven van de initiële HTML/CSS/JS structuur | Claude Code | Werkende basisstructuur inclusief tabsysteem en state management |
| Back button refreshte de pagina in plaats van terug te navigeren | Claude Code | Opgelost via state-gebaseerde navigatie zonder page reload |
| Dark/light mode werd niet onthouden | Claude Code | Opgelost via localStorage |
| Pijltjestoetsen pasten content niet aan | Claude Code | Event listeners uitgebreid zodat pijltjes dezelfde logica volgen als klikken |
| | Gemini | |

### Bugs & oplossingen

| Bug / Fout | Oorzaak | Oplossing |
|---|---|---|
| Terug-knop herlaadde de pagina | `window.location.href` gebruikt i.p.v. state-navigatie | Vervangen door `navigate()` functie |
| Dark mode werd niet onthouden na herlaad | Theme niet opgeslagen | `localStorage` toegevoegd |
| Pijltjestoetsen veranderden content niet | Event listener ontbrak voor arrow keys | Keyboard handler uitgebreid |
| | | |

### Reflectie fase 2

*(Schrijf hier in eigen woorden hoe het bouwen verliep. Wat was moeilijk, wat leerde je het meest van, hoe werkte de samenwerking met AI als codeerpartner?)*

---

## Fase 3 – Live zetten & Afronding (Week 27 | 8 uur)

### Deployment

- **Platform gekozen:** Vercel
- **Repository:** *(link naar GitHub repo)*
- **Live URL:** *(link naar live website)*

### Stappen voor deployment

*(Beschrijf hier het proces: repo aanmaken, koppelen aan platform, build settings configureren, eerste deploy, etc.)*

### Laatste bugs & fixes

| Bug | Fix |
|---|---|
| | |

### Reflectie fase 3

*(Hoe verliep het live zetten? Wat leerde je over DevOps en deployment?)*

---

## Eindreflectie

### Wat heb ik bereikt?

*(Kijk terug op je drie leerdoelen. In hoeverre heb je ze behaald?)*

### Zelfbeoordeling

**Ik beoordeel mijn werk als een *(matig / voldoende / goed / uitmuntend)* omdat:**

*(Onderbouw hier je eigen cijfer op basis van de criteria uit het SRP-formulier.)*

### Wat zou ik de volgende keer anders doen?

*(Persoonlijke leerpunten en verbeterpunten.)*

---

## Bronnenlijst

*(Vul aan met alle gebruikte bronnen, in volgorde van gebruik.)*

- The Net Ninja. (z.d.). *JavaScript DOM Tutorial*. YouTube. https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V
- The Net Ninja. (z.d.). *Git & GitHub Tutorial for Beginners*. YouTube. https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR
- The Net Ninja. (z.d.). *GSAP Animations*. YouTube. https://www.youtube.com/playlist?list=PL4cUxeGkcC9g1HFtu7QqQThvos1OcKEL
- Traversy Media. (z.d.). *Netlify Crash Course*. YouTube. https://www.youtube.com/watch?v=bjVUqvcCnxM
- Netlify. (z.d.). *Netlify Documentation*. https://docs.netlify.com
- Vercel. (z.d.). *Vercel Documentation*. https://vercel.com/docs
- GSAP. (z.d.). *GSAP Documentation*. https://gsap.com/docs/v3/
- MDN Web Docs. (z.d.). *localStorage*. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- MDN Web Docs. (z.d.). *URLSearchParams*. https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
