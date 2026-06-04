# Handoff — Portfolio Firas Bourguiba (refonte data-éditoriale sombre)

## Overview
Refonte complète du portfolio personnel de **Firas Bourguiba** (Data Scientist & IA, alternance sept. 2026).
Objectif : un portfolio **unique**, qui s'éloigne des codes du « portfolio généré par IA » (thème terminal, emoji, gradients néon violet/bleu, badges partout).
Direction retenue : **sombre, éditorial-data, cinématique** — esprit data-journalisme premium (FT / Bloomberg / The Pudding).

Deux fonctionnalités signature :
1. **Dataviz de trajectoire animée** (hero) : courbe SVG qui se dessine et raconte le parcours 2023 → 2026, avec jalons survolables.
2. **Sélecteur de poste** (« Vous recrutez pour… ») : réorganise/repondère projets et compétences selon le rôle visé, avec un toast de confirmation.

Bilingue **FR / EN** + panneau **Tweaks** (accent, style des titres, grain).

## About the Design Files
Les fichiers de ce bundle sont des **références de design réalisées en HTML/CSS/React (via Babel in-browser)** — un prototype montrant l'apparence et le comportement voulus, **pas un code de production à copier tel quel**.
La tâche est de **recréer ce design dans l'environnement cible**. Le portfolio actuel est sur **Netlify** (sites statiques). Recommandation : reconstruire en **React + Vite** (ou Next.js) avec une vraie structure de composants, ou conserver du HTML/CSS statique si l'on veut rester ultra-léger. Remplacer le Babel in-browser par un vrai build.

## Fidelity
**Haute fidélité (hifi).** Couleurs, typographies, espacements, interactions et animations sont définitifs. À recréer fidèlement. Les valeurs exactes sont dans `styles.css` (variables CSS `:root`) et résumées plus bas.

---

## Stack du prototype
- **React 18.3.1** (UMD) + **ReactDOM** + **Babel standalone** (transpilation in-browser — à remplacer par un build réel).
- Contenu **bilingue** centralisé dans `content.js` (objet `window.CONTENT`, chaque champ a `{ fr, en }`).
- Composants découpés en fichiers `*.jsx` exportés sur `window` (pattern multi-scripts Babel).
- Aucune dépendance externe hors React + Google Fonts. Pas d'images bitmap (placeholders/SVG only).

## Architecture des fichiers
| Fichier | Rôle |
|---|---|
| `Portfolio.html` | Shell : `<head>` (fonts, CSS), `<div id="root">`, ordre de chargement des scripts. |
| `styles.css` | **Tout le design system** (variables, layout, composants, responsive). Source de vérité des tokens. |
| `content.js` | **Tout le contenu** bilingue + métadonnées (rôles, jalons trajectoire, projets…). |
| `charts.jsx` | `TrajectoryChart` — dataviz SVG animée du hero + helper `smoothPath` (Catmull-Rom → bézier). |
| `sections.jsx` | `Reveal`, helper `observeReveal`, `Nav`, `Hero`, `Skills`. |
| `sections2.jsx` | `Experience`, `Projects`, `Vision`, `Contact`, `Footer`. |
| `tweaks-panel.jsx` | Panneau de réglages (composant fourni) — **non essentiel** au portfolio, peut être retiré en prod. |
| `app.jsx` | `App` — état global (`lang`, `role`, tweaks), montage React. |

---

## Design Tokens (depuis `styles.css` → `:root`)

### Couleurs — surfaces (encre profonde, légèrement froide)
| Token | Valeur |
|---|---|
| `--bg` | `#0a0b0e` |
| `--bg-1` | `#0f1116` |
| `--bg-2` | `#14161d` |
| `--bg-3` | `#1a1d26` |
| `--line` | `rgba(236,236,228,0.10)` |
| `--line-soft` | `rgba(236,236,228,0.055)` |

### Couleurs — texte
| Token | Valeur |
|---|---|
| `--text` | `#ecece4` (off-white chaud) |
| `--dim` | `#9b9ca6` |
| `--faint` | `#62646f` |

### Accent + dataviz (harmonisés, même L/C, hue varié)
| Token | Valeur | Usage |
|---|---|---|
| `--accent` | `#e7b85a` (or/champagne) | CTA, emphases, highlights |
| `--accent-soft` | `color-mix(--accent 14%, transparent)` | fonds de badge |
| `--accent-line` | `color-mix(--accent 32%, transparent)` | bordures actives |
| `--viz-1` | `#e7b85a` (or) | série 1 dataviz |
| `--viz-2` | `#6fd6c6` (teal) | série 2 / « disponible » |
| `--viz-3` | `#b3a0e8` (lavande) | série 3 / « à venir » |

> Accents alternatifs proposés dans les Tweaks : `#e7b85a`, `#6fd6c6`, `#b3a0e8`, `#e8896a`.
> Tout l'accent dérive d'**une seule** variable `--accent` (via `color-mix`) — changer une valeur suffit.

### Typographie (Google Fonts)
- **Display / titres** : `"Instrument Serif"` (400 + italique) — variable `--serif`. Italique = emphase cinématique.
- **UI / corps** : `"Hanken Grotesk"` (400/500/600/700) — variable `--sans`.
- **Mono / data, repères de section, chiffres** : `"IBM Plex Mono"` (400/500) — variable `--mono`.
- Import : `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap`

### Échelle typographique (clamp, responsive)
| Élément | Taille |
|---|---|
| H1 hero | `clamp(44px, 6.6vw, 92px)`, line-height 0.98, letter-spacing -0.02em, serif |
| Titre de section (`.h-section`) | `clamp(40px, 6vw, 78px)`, serif, `em` en italique accent |
| Contact « big » | `clamp(60px, 11vw, 168px)`, serif |
| Lead / intro | `clamp(17px, 1.5vw, 20px)`, color `--dim` |
| Corps | 17px, line-height 1.6, letter-spacing -0.01em |
| Repères mono (`.marker`) | 12.5px, letter-spacing 0.18em, uppercase, `--faint` (numéro en `--accent`) |

### Layout & divers
| Token | Valeur |
|---|---|
| `--maxw` | `1240px` (conteneur `.wrap`) |
| `--pad-x` | `clamp(20px, 5vw, 72px)` |
| `--r` | `14px` (rayon des cartes) |
| `--ease` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Padding vertical de section | `clamp(72px, 9vw, 150px)` |

### Effets cinématiques (overlays `body::before/::after`, `position:fixed`)
- **Glow** : 2 radial-gradients très subtils (accent en haut 8%, teal en bas 4%).
- **Grain** : SVG `feTurbulence` (baseFrequency 0.85), `opacity 0.04`, `mix-blend-mode: overlay`. Désactivable via classe `body.no-grain`.

---

## Écrans / sections

### 0. Nav (fixe)
- Transparente en haut → au scroll (>40px) ajoute `.scrolled` : fond `rgba(10,11,14,0.72)` + `backdrop-filter: blur(18px) saturate(140%)` + bordure basse `--line-soft`.
- Gauche : brand mono `FIRAS B.` + point accent (glow). Centre : liens d'ancre (masqués < 860px). Droite : toggle langue **FR/EN** (segmenté, état actif = fond accent / texte encre).

### 1. Hero (`#top`)
- Grille `1.05fr / 0.95fr` (passe en 1 colonne < 940px ; le chart passe alors **sous** le texte — comportement voulu).
- **Gauche** : pill « Disponible — Septembre 2026 » (point teal pulsant) ; H1 nom (serif) ; tagline mono teal (rôle + formation) ; **sous-titre = `tagline` du rôle sélectionné** (change avec le sélecteur) ; sous-texte `--faint` ; 2 CTA (primaire accent plein + ghost bordé) ; **sélecteur de poste** (chips arrondis, actif = accent plein).
- **Droite** : `TrajectoryChart` (voir plus bas).
- **Stats** (sous le hero) : grille 4 colonnes (2 < 680px), bordures internes `--line-soft`, chiffres serif `clamp(34px,4vw,52px)` (le `+15%` en accent), label mono.

### 2. Compétences (`#skills`)
- Marqueur `01 — STACK`. Titre `Ce que je <em>maîtrise</em>`. Lead.
- Grille 2 colonnes (1 < 760px) de **cartes compétence** : nom, % (mono accent), **barre de progression** (`<i>` largeur animée 0→level%, gradient accent→teal), tags mono bordés, note optionnelle (`*`).
- **Réorganisation par rôle** : tri selon `roleObj.skills` ; la 1re catégorie reçoit `.hot` (bordure accent, fond `--bg-2`) ; catégories en position ≥ 2 reçoivent `.dim` (opacity 0.42). En rôle `all` : aucun dim/hot.
- 4 catégories : Data & ML (88) · IA & NLP (80) · Business Intelligence (85) · Cloud & Infra (58, tags `*` = en cours).

### 3. Parcours (`#experience`)
- Marqueur `02 — PARCOURS`. Titre `Mon <em>expérience</em>`.
- **Timeline** : lignes `grid 210px / 1fr` (1 colonne < 720px), séparées par `--line-soft`. Colonne gauche = période (mono accent). Droite = org (serif), rôle + lieu (`--dim`), badge **impact** optionnel (pill `--accent-soft` + bordure `--accent-line`, ex. « +15% de chiffre d'affaires »), puces (point accent).
- 4 entrées : Ynov (2023→) · Association La Famille au Grand Cœur (déc 2024→) · Freelance Deliveroo/Uber Eats (fév–avr 2025, +15%) · ENGIE (2024).

### 4. Projets (`#projects`)
- Marqueur `03 — RÉALISATIONS`. Titre `Des projets <em>concrets</em>`. Lead.
- **Cartes projet** (liste verticale, `grid 1fr/auto`) : 
  - Gauche : cible (mono teal, « ↳ Cible: … »), nom (serif), type (mono accent), description (`--dim`, max 64ch), tags mono.
  - Droite : métrique (chiffre serif + label mono) + bouton « Voir le projet ↗ » (hover = fond accent).
  - Hover : `translateY(-3px)`, bordure accent, ombre, barre latérale gauche gradient (accent→teal) qui apparaît.
- **Réorganisation par rôle** : tri selon `roleObj.projects` ; position ≥ 3 → `.dim` (opacity 0.5).
- 5 projets (URLs live) : KM Platform · SUEZ ML · La Poste Prévision · Etam Strategic (+15%) · PwC Data Quality. + bloc **« En cours »** (carte tiretée, motif rayé, badge lavande) : Agents IA / RAG.

### 5. Vision (`#vision`)
- Marqueur `04 — VISION`. Grille `0.85fr / 1.15fr` (1 colonne < 900px).
- Gauche : titre `Ma vision de <em>l'IA</em>` + lead serif + **citation** (sticky, bordure gauche accent, italique serif `clamp(26px,3.2vw,40px)`).
- Droite : **3 principes** (numéro mono accent + titre + corps `--dim` + tags). Condensé volontairement (l'original en avait 6, trop verbeux).

### 6. Contact (`#contact`)
- Marqueur `05 — CONTACT`. Titre géant `On se <em>parle ?</em>`.
- Grille `1fr / auto` : gauche = accroche ; droite = 3 « rows » (Email / Appeler / LinkedIn) — bordées, hover bordure accent + `translateX(3px)`, clé mono + valeur.
- Footer mono `--faint`.

---

## Trajectory chart (`charts.jsx` → `TrajectoryChart`)
- SVG viewBox `0 0 470 290`, `preserveAspectRatio xMidYMid`. Padding L/R 16, T 26, B 34. Axes : x = temps (0→3.3), y = portée/impact (0→100).
- **Données** : `CONTENT.trajectory.points` (6 jalons, chacun `{ x, y, date, titleFr/En, descFr/En }`).
- **Tracé** : courbe lissée Catmull-Rom→bézier (`smoothPath`) + aire (gradient accent vertical) + ligne (gradient teal→accent, 2.6px).
- **Animation de tracé** : `stroke-dasharray = longueur`, `stroke-dashoffset` longueur→0 sur 2.1s (`--ease`) au scroll-in. Aire + dots en fade décalé. Dernier point = halo SMIL pulsant accent.
- **Interaction** : hover d'un dot → **tooltip HTML** positionné en `%` du viewBox (robuste au scaling), date (accent) + titre + description, bilingue.
- À recréer : en React/Vue garder la même logique ; ou utiliser une lib (visx, D3, recharts) en respectant strictement les couleurs/gradients ci-dessus.

---

## Sélecteur de poste (logique signature)
- Source : `CONTENT.roles` (5 rôles : `all`, `ds`, `da`, `ml`, `consult`). Chaque rôle a `{ label, tagline, skills:[ids ordonnés], projects:[ids ordonnés] }`.
- État global `role` (dans `App`, persisté `localStorage["fb_role"]`).
- Effets quand `role` change :
  1. **Hero** : le sous-titre = `roleObj.tagline`.
  2. **Skills** : tri par `roleObj.skills`, 1re = `.hot`, ≥2 = `.dim`.
  3. **Projects** : tri par `roleObj.projects`, ≥3 = `.dim`.
  4. **Toast** `.flash` « Contenu réorganisé pour ce poste » (2.2s) — sauf rôle `all`.

## Bilingue FR/EN
- État `lang` (`App`, persisté `localStorage["fb_lang"]`, met à jour `document.documentElement.lang`).
- Tout texte vient de `CONTENT` via `champ[lang]`. Toggle dans la nav **et** dans les Tweaks.
- Pour recréer : i18n simple (dictionnaire) ou react-i18next ; garder la même structure de clés.

## Scroll-reveal (helper `observeReveal`, `sections.jsx`)
- `.reveal { opacity:0; translateY(22px); transition .9s }` → `.reveal.in { opacity:1 }`.
- IntersectionObserver (threshold 0.08, rootMargin `0px 0px -4%`) ajoute `.in`. Filets : révélation immédiate si déjà dans le viewport au montage ; fallback timer ~2.6s ; **garde-fou** qui force `opacity:1` (transition coupée) si l'opacité reste < 0.05 après 950ms (anti-section-masquée).
- En prod avec un vrai build, un simple IntersectionObserver suffit (le garde-fou est une ceinture-bretelles).
- Respecter `@media (prefers-reduced-motion: reduce)` → tout visible, pas d'animation.

## State Management
- `lang` : 'fr' | 'en' — persisté.
- `role` : 'all' | 'ds' | 'da' | 'ml' | 'consult' — persisté.
- Tweaks (`accent`, `display`, `grain`) — gérés par le hook `useTweaks` (non essentiel en prod ; peut devenir un simple thème).
- Pas de fetch : contenu statique.

## Assets
- **Aucune image bitmap.** Tout est typographie, SVG (chart, point brand) et CSS.
- Polices : Google Fonts (Instrument Serif, Hanken Grotesk, IBM Plex Mono).
- Liens externes : 5 projets Netlify, LinkedIn, email/tél (voir `content.js` → `projects`, `contact`).
- Favicon/og-image : à ajouter en prod.

## Accessibilité / prod — à finaliser
- Vérifier contrastes (off-white sur encre OK ; `--faint` réservé aux petits labels).
- Ajouter `aria-label` sur la nav, le toggle langue, le sélecteur de rôle, les liens projets (`target=_blank rel=noopener`).
- Remplacer Babel in-browser par un build (Vite/Next).
- SEO : meta description, OpenGraph, `lang` cohérent.

## Files (dans ce bundle)
- `Portfolio.html`, `styles.css`, `content.js`, `charts.jsx`, `sections.jsx`, `sections2.jsx`, `app.jsx`, `tweaks-panel.jsx`.
