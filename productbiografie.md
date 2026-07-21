# Productbiografie SRP Elijah Delgado

**Naam:** Elijah Delgado | **Nummer:** 500913838 | **Studiejaar:** 4 | **Beoordelaar:** Michel Alders

---

## Leerdoelen

1. **HTML, CSS en JavaScript** een sterke basis opbouwen en verdiepen in JavaScript: functies, DOM-manipulatie en interactieve logica zonder framework.
2. **Zelfstandig hosten via Git & Vercel** het volledige traject van lokale code naar live productie-omgeving beheersen.
3. **AI als codeer- én debugpartner** Claude en Gemini effectief inzetten tijdens het bouwen, niet alleen voor fouten maar ook voor het begrijpen en verbeteren van code.

---

## Fase 1 Inventariseren en onderzoek (Week 25 | 8 uur)

### Portfolioconcept en visueel ontwerp

In gesprek met een medestudent en via referentiesites (crush.enterprises, lafamamsterdam.com, en.miharayasuhiro.jp) heb ik de richting bepaald: een app-achtig tabsysteem met vaste genummerde sidebar, brutalist en experimenteel van sfeer.

De visuele keuzes kwamen voort uit die referenties. Kleurpalet: charcoal (#1a1a1a) als donkere achtergrond en gebroken wit (#f0ece4) voor light mode, met hot pink (#ff2d78) als spaarzaam toegepast accent. Typografie: BOTCH voor titels en navigatienummers, Montserrat voor alle body- en UI-tekst. Geen ronde hoekjes overal, maar wel op interactieve elementen zoals de actieve navigatiestaat, omdat dat aansluit bij het karakter van BOTCH. De sidebar is puur typografisch, geen visuele fratsen.

### Hosting platformvergelijking

| Platform | Voordelen | Nadelen | Conclusie |
|---|---|---|---|
| GitHub Pages | Gratis, geïntegreerd met GitHub | Alleen statisch, beperkte configuratie | Te beperkt |
| Netlify | Gebruiksvriendelijk, goede gratis tier | Minder developer-gericht | Goede tweede keus |
| Vercel | Snel CDN, naadloze GitHub-integratie, automatische preview-deployments | Gratis tier heeft teamlimieten | Beste keuze |

**Gekozen: Vercel.** Na overleg met een stagebegeleider. Automatische deployment bij elke `git push`, preview-URLs per branch en gebouwd voor moderne front-end projecten.

### Reflectie

Fase 1 was het meest leerzaam omdat ik moest uitzoeken wat ik nog moest leren: welke JS-concepten had ik nodig, hoe werkt hosting, wat wilde ik precies bouwen. Het was moeilijk om niet meteen te gaan bouwen, maar het brede blik houden op het project heeft achteraf veel tijd bespaard.

---

## Fase 2 Praktijk (Week 26 | 12 uur)

### Gebouwd

Een volledig dynamische single-page portfolio met vaste sidebar, tabsysteem, projectdetailpagina's, dark/light mode en GSAP-animaties.

### JavaScript concepten en bronnen

**State management**
Centraal object dat bijhoudt welke tab en subtab actief zijn. De UI rendert volledig op basis van die state, zonder page reload.
[The Net Ninja – JS DOM Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V)

**Arrays & objecten**
Projecten opgeslagen als JS-objecten in een array. Subtabs en previews worden automatisch gegenereerd — een nieuw project toevoegen betekent alleen een object toevoegen.
[The Net Ninja – JS DOM Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V)

**Event listeners**
Navigatie via klikken én toetsenbord: cijfers 1–4 voor tabs, pijltjes voor subtabs, Enter om een project te openen.
[MDN – addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

**localStorage**
Dark/light mode voorkeur opslaan tussen sessies zodat de keuze bij herladen bewaard blijft.
[MDN – localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

**URLSearchParams**
Eén herbruikbare `project.html` die via `?id=` bepaalt welk project geladen wordt.
[MDN – URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

### GSAP animaties en bronnen

**gsap.from() + stagger**
Intro-animatie bij het laden: sidebar en content faden in met een staggered effect.
[GSAP Docs](https://gsap.com/docs/v3/GSAP/gsap.from/) · [Staggers](https://gsap.com/docs/v3/Staggers/)

**gsap.to()**
Tab-transities en subtab-wisselingen: content faded uit en nieuwe content komt in.
[GSAP Docs](https://gsap.com/docs/v3/GSAP/gsap.to/)

**Clip-path wipe**
Karaktervolle overgang bij wisselen van hoofdtabs: content wordt weggeclipped van onder naar boven.
[GSAP Docs](https://gsap.com/docs/v3/GSAP/gsap.to/)

**SVG muisparallax**
SVG-achtergrond op de homepage beweegt omgekeerd mee met de cursor via mousemove.
[YouTube](https://www.youtube.com/watch?v=q8Wv2L1Vr4E) · [GSAP Community](https://gsap.com/community/forums/topic/17320-background-parallax-effect-on-mouse-move/)

**Subtab slide-in**
Subtabpaneel schuift vanuit links in beeld bij het selecteren van een hoofdtab.
[The Net Ninja – GSAP](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g1HFtu7QqQThvos1OcKEL)

### AI-gebruik

| Vraag / Probleem | Tool | Resultaat |
|---|---|---|
| Sparren over structuur, JS-aanpak en design | Claude (Cowork) | Volledige technische briefing uitgewerkt als startpunt |
| Bouwen van HTML/CSS/JS structuur | Claude Code | Werkende basisstructuur inclusief tabsysteem en state management |
| Back button herlaadde de pagina | Claude Code | Opgelost via state-gebaseerde navigatie |
| Dark/light mode niet onthouden | Claude Code | Opgelost via localStorage |
| Pijltjestoetsen pasten content niet aan | Claude Code | Keyboard handler uitgebreid |

### Bouwproces

Het bouwen verliep in lagen, waarbij ik elke laag afmaakte voordat ik verder ging.

**Stap 1: HTML-structuur**
Als eerste heb ik de basisstructuur neergezet: een vaste sidebar aan de linkerkant en een main content area rechts. Geen content, geen logica, alleen de skelettenbouw zodat ik wist waar alles zou komen te staan.

**Stap 2: CSS custom properties**
Daarna CSS met custom properties voor dark en light mode. Door alles via `--c1`, `--c2` en `--text` te definiëren kon ik het thema later met één attribuut op de `<html>` tag wisselen. Dit leek misschien vroeg in het proces, maar het betaalde zich later terug: ik hoefde nooit terug om kleuren te herzoeken.

**Stap 3: State management en render-logica**
Dit was de kern van het project. Ik heb een centraal `state`-object gebouwd dat bijhoudt welke tab actief is, welke subtab geselecteerd is en of je in een detailweergave zit. De `render()`-functie leest die state en bouwt de UI opnieuw op, elke keer. Geen directe DOM-manipulatie, alles via state. Dit klikte pas echt toen ik snapte waarom het op die manier werkt: je hoeft maar één plek bij te houden in plaats van tientallen losse elementen.

**Stap 4: Data-arrays en dynamisch renderen**
Projecten en archiefitems worden opgeslagen als objecten in een array. Subtabs worden automatisch gegenereerd op basis van die array: een nieuw project toevoegen betekent alleen een object toevoegen, de rest volgt automatisch. Dit was een van de momenten waarop ik echt voelde dat ik iets snapte van hoe JavaScript bedoeld is.

**Stap 5: Interactie en navigatie**
Keyboard navigatie (cijfers, pijltjes, Enter, Backspace), dark/light mode toggle via localStorage, de scrollspy op de About Me sectie met IntersectionObserver, en de back-knop die de state herstelt zonder page reload.

**Stap 6: GSAP animaties**
Als laatste laag kwamen de animaties. Clip-path wipe voor tab-transities, staggered fade-in bij laden, subtab slide-in vanuit links, en een SVG muisparallax op de homepage. Door animaties als laatste toe te voegen kon ik alles tussendoor testen zonder dat een kapotte animatie de rest blokkeerde.

### Reflectie

Tijdens het bouwen kwamen steeds nieuwe ideeën op die ik nog niet volledig de skills voor had. Door Claude Code en online bronnen te combineren kon ik die ideeën toch realiseren. Als ik meer tijd had gehad zou ik de projectpagina's verder hebben uitgewerkt.

---

## Fase 3 Live zetten & Afronding (Week 27 | 8 uur)

### Deployment

- **Repository:** [github.com/epsoya/srp-portfolio](https://github.com/epsoya/srp-portfolio)
- **Live URL:** [epsoya.com](https://epsoya.com)

### Proces

**Stap 1: Git installeren en initialiseren**
Ik had Git nog niet geïnstalleerd. Na het installeren heb ik de repository geïnitialiseerd met `git init` in de projectmap, alle bestanden gestaged met `git add .` en de eerste commit aangemaakt met `git commit -m "first commit"`.

**Stap 2: GitHub repository aanmaken**
Op GitHub.com een nieuwe repository aangemaakt (`srp-portfolio`) en die lokaal gekoppeld via `git remote add origin`. Bij de eerste push bleek dat GitHub geen wachtwoorden meer accepteert voor git-operaties. Je hebt een Personal Access Token nodig. Die heb ik aangemaakt via GitHub Settings → Developer Settings → Personal Access Tokens en het token verwerkt in de remote URL zodat authenticatie automatisch werkt.

**Stap 3: Eerste push**
Met `git push -u origin main` stonden alle bestanden live op GitHub. Vanaf dat moment werkt elke volgende push met alleen `git push`.

**Stap 4: Vercel koppelen**
Via vercel.com het GitHub-account geautoriseerd en de repository geselecteerd. Vercel detecteert automatisch dat het een statisch project is — geen framework, geen build-instellingen nodig. Elke push naar `main` triggert automatisch een nieuwe deployment. Vercel geeft ook een preview-URL per commit, wat handig is om te testen voor je de live site overschrijft.

**Stap 5: Eigen domein koppelen**
Het domein `epsoya.com` gekocht via Namecheap. In Vercel het domein toegevoegd onder Project Settings → Domains. Vercel geeft dan twee DNS-records die je bij Namecheap moet invullen: een A-record voor het root-domein en een CNAME voor `www`. Na het instellen duurt het propageren van de DNS 10 tot 30 minuten. Het SSL-certificaat wordt door Vercel automatisch aangevraagd en geactiveerd via Let's Encrypt.

### Reflectie

Het live zetten was eenvoudiger dan ik van tevoren dacht. De meeste stappen zijn eenmalig: repository aanmaken, Vercel koppelen, domein instellen. Daarna is een update pushen gewoon `git add . && git commit -m "..." && git push`. Het enige struikelblok was de GitHub-authenticatie. Ik wist niet dat wachtwoorden niet meer werken voor git en moest uitzoeken hoe een Personal Access Token werkt. Dat kostte even tijd maar is ook meteen een goede les: veiligheid in developer tools gaat verder dan alleen een sterk wachtwoord.

---

## Eindreflectie

### Wat heb ik bereikt?

Alle drie leerdoelen zijn behaald. Ik ben van een lege pagina naar een live, dynamische webapplicatie gegaan. Ik begrijp nu state management, dynamisch renderen, event listeners en localStorage. De site staat live op een eigen domein dat ik volledig zelf heb gebouwd en kan onderhouden.

### Zelfbeoordeling

**Ik beoordeel mijn werk als goed (8).**

Ik heb zelfstandig kennis en vaardigheden ontwikkeld op een gebied waar ik weinig ervaring mee had en kan deze professioneel toepassen. Een portfolio is een directe beroepssituatie. Het is het eerste wat een opdrachtgever of werkgever ziet. De technische en visuele keuzes die ik heb gemaakt zijn dezelfde die ik in een echte werkomgeving zou moeten maken, en ik kan ze uitleggen en verdedigen.

### Wat zou ik anders doen?

Eerst volledig ontwerpen in Figma, daarna bouwen. Nu heb ik minder tijd aan het ontwerpen besteed omdat coderen het leerdoel was. De volgende keer, zonder de technische leercurve, kan ik beide combineren.

---

## Bronnenlijst

- The Net Ninja. (z.d.). *JavaScript DOM Tutorial*. YouTube. https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V
- The Net Ninja. (z.d.). *Git & GitHub Tutorial for Beginners*. YouTube. https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR
- The Net Ninja. (z.d.). *GSAP Animations*. YouTube. https://www.youtube.com/playlist?list=PL4cUxeGkcC9g1HFtu7QqQThvos1OcKEL
- Traversy Media. (z.d.). *Netlify Crash Course*. YouTube. https://www.youtube.com/watch?v=bjVUqvcCnxM
- GSAP. (z.d.). *GSAP Documentation*. https://gsap.com/docs/v3/
- GSAP Community. (z.d.). *Background parallax on mouse move*. https://gsap.com/community/forums/topic/17320-background-parallax-effect-on-mouse-move/
- YouTube. (z.d.). *Parallax MouseMove Effect*. https://www.youtube.com/watch?v=q8Wv2L1Vr4E
- MDN Web Docs. (z.d.). *addEventListener*. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- MDN Web Docs. (z.d.). *localStorage*. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- MDN Web Docs. (z.d.). *URLSearchParams*. https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
- Vercel. (z.d.). *Vercel Documentation*. https://vercel.com/docs
- GitHub. (z.d.). *GitHub Pages*. https://pages.github.com/
- Netlify. (z.d.). *Netlify Documentation*. https://docs.netlify.com
