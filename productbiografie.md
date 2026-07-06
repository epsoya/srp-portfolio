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

Het bouwen verliep in lagen. Eerst de HTML-structuur: een vaste sidebar links, een main content area rechts. Dan CSS met custom properties voor dark en light mode, zodat het thema later met één attribuut te wisselen was. Vervolgens de JavaScript-kern: het state-object als middelpunt, de render-functie die de UI daarop opbouwt, en de data-arrays voor projecten en archief. Als laatste laag kwamen de GSAP-animaties. Die volgorde werkte goed: elke laag bouwde voort op de vorige en ik kon tussendoor testen zonder dat animaties in de weg zaten.

### Reflectie

Tijdens het bouwen kwamen steeds nieuwe ideeën op die ik nog niet volledig de skills voor had. Door Claude Code en online bronnen te combineren kon ik die ideeën toch realiseren. Als ik meer tijd had gehad zou ik de projectpagina's verder hebben uitgewerkt.

---

## Fase 3 Live zetten & Afronding (Week 27 | 8 uur)

### Deployment

- **Repository:** [github.com/epsoya/srp-portfolio](https://github.com/epsoya/srp-portfolio)
- **Live URL:** [epsoya.com](https://epsoya.com)

### Proces

1. `git init` → `git add .` → `git commit -m "first commit"`
2. Repository aangemaakt op GitHub en gekoppeld via `git remote add origin`
3. Authenticatie via Personal Access Token (GitHub accepteert geen wachtwoorden meer)
4. `git push -u origin main` → bestanden live op GitHub
5. Vercel gekoppeld via GitHub. Automatisch gedetecteerd als statisch project, geen build-instellingen nodig
6. Domein `epsoya.com` gekocht via Namecheap en gekoppeld via DNS-records in Vercel. SSL-certificaat automatisch geactiveerd.

### Reflectie

Het live zetten was eenvoudiger dan verwacht. Het enige struikelblok was de GitHub-authenticatie: een Personal Access Token in plaats van een wachtwoord, dat was even uitzoeken. Het koppelen van het eigen domein verliep via Claude Cowork soepel.

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
