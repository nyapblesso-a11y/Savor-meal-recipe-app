# Savor — Recipe App

A clean, minimalist recipe management app built with **React 19** and **Vite**. Store, search, favourite, and manage all your recipes directly in the browser — no account or backend required.

![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white&style=flat-square)
![CSS](https://img.shields.io/badge/CSS-Custom_Properties-1572b6?logo=css3&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## Table of Contents

- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Recipe Data Model](#recipe-data-model)
- [State Management](#state-management)
- [Available Scripts](#available-scripts)
- [Extending the App](#extending-the-app)

---

## Screenshots

| Landing Page | Recipe Dashboard | Recipe Detail |
|---|---|---|
| Hero section with CTA | Card grid with search | Slide-in right panel |

> The app ships with 7 sample recipes so you can explore immediately on first load.

---

## Features

- **Landing page** — Hero section, bento feature grid, and a call-to-action to enter the app
- **Browse recipes** — Responsive card grid showing image, cook time, and servings
- **Search** — Instant search across recipe name and description
- **Favorites** — Heart-toggle any recipe; switch to the Favorites tab to filter them
- **Add recipe** — Full form with live image URL preview and dynamic ingredient / step lists
- **Edit recipe** — Pre-filled form that updates the recipe in place
- **Delete recipe** — Confirmation prompt before permanent removal
- **Recipe detail panel** — Slide-in drawer with stats, an interactive ingredient checklist, and numbered method steps
- **Persistent storage** — All data is saved to `localStorage` automatically and survives page refresh
- **Responsive** — Works on mobile, tablet, and desktop
- **Empty states** — Contextual messages and actions when the grid is empty

---

## Tech Stack

| | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Standard CSS files with CSS custom properties |
| State | React Context API |
| Persistence | Browser `localStorage` |
| Icons | Google Material Symbols |
| Fonts | Plus Jakarta Sans · Be Vietnam Pro |
| Dependencies | **Zero** third-party UI libraries |

---

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** 9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/savor-app.git

# Move into the project folder
cd savor-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Other package managers

```bash
# yarn
yarn install && yarn dev

# pnpm
pnpm install && pnpm dev

# bun
bun install && bun dev
```

### Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the build locally
```

---

## Project Structure

```
savor-app/
│
├── index.html
├── vite.config.js
├── package.json
├── README.md
│
└── src/
    │
    ├── main.jsx                          # App entry point
    ├── App.jsx                           # Page switcher: Landing → Home
    │
    ├── styles/
    │   ├── variables.css                 # All design tokens
    │   ├── global.css                    # CSS reset and base styles
    │   └── typography.css                # Text utility classes
    │
    ├── utils/
    │   ├── constants.js                  # STORAGE_KEY, PANEL_MODES, TABS
    │   └── storage.js                    # localStorage read/write helpers
    │
    ├── data/
    │   └── sampleRecipes.js              # 7 seed recipes for first load
    │
    ├── hooks/
    │   ├── useLocalStorage.js            # State that persists to localStorage
    │   └── useRecipes.js                 # Shortcut: useContext(RecipeContext)
    │
    ├── context/
    │   └── RecipeContext.jsx             # Global state + all CRUD actions
    │
    ├── components/
    │   │
    │   ├── common/                       # Reusable UI atoms
    │   │   ├── Chip/                     # Pill label tag
    │   │   ├── IconButton/               # Icon-only button
    │   │   ├── PrimaryButton/            # Filled action button
    │   │   ├── GhostButton/              # Text / cancel button
    │   │   ├── TextInput/                # Controlled input & textarea
    │   │   ├── Field/                    # Label + input wrapper
    │   │   └── StatCell/                 # Icon + label + value stat card
    │   │
    │   ├── recipe/                       # Recipe-specific components
    │   │   ├── RecipeCard/               # Grid card with image and favourite button
    │   │   ├── RecipeDetail/             # Full detail view inside the panel
    │   │   ├── RecipeForm/               # Add / Edit form
    │   │   ├── IngredientsList/          # Interactive ingredient checklist
    │   │   └── InstructionsList/         # Numbered method steps
    │   │
    │   └── layout/                       # App shell
    │       ├── TopNavbar/                # Fixed header with tabs and search
    │       ├── RightPanel/               # Slide-in detail / form drawer
    │       ├── EmptyState/               # Empty grid message with CTA
    │       └── Footer/                   # Links footer
    │
    └── pages/
        ├── Landing/                      # Marketing landing page
        └── Home/                         # Main recipe dashboard
```

Every component has its own `.jsx` and `.css` file. No inline styles anywhere in the codebase.

---

## Design System

The **Fresh Harvest** design system powers the visual language. All tokens are defined as CSS custom properties in `src/styles/variables.css`.

### Colours

| Token | Hex | Role |
|---|---|---|
| `--color-primary` | `#9f402d` | Terracotta — buttons, active tabs, brand |
| `--color-secondary` | `#41674c` | Sage green — secondary actions, checkmarks |
| `--color-tertiary` | `#8d4f11` | Amber — calorie indicators |
| `--color-surface` | `#faf9f6` | App background |
| `--color-surface-low` | `#f4f3f1` | Input backgrounds |
| `--color-surface-container` | `#efeeeb` | Stat cells, card surfaces |
| `--color-on-surface` | `#1a1c1a` | Primary body text |
| `--color-on-surface-variant` | `#56423e` | Secondary / muted text |
| `--color-outline-variant` | `#ddc0ba` | Subtle borders |
| `--color-error` | `#ba1a1a` | Delete actions |
| `--color-inverse-surface` | `#2f312f` | Dark CTA card |

### Typography

| Style | Font | Size | Weight |
|---|---|---|---|
| Display LG | Plus Jakarta Sans | `clamp(32px, 5vw, 40px)` | 800 |
| Headline LG | Plus Jakarta Sans | `clamp(26px, 3vw, 32px)` | 700 |
| Headline MD | Plus Jakarta Sans | 24px | 600 |
| Body LG | Be Vietnam Pro | 18px | 400 |
| Body MD | Be Vietnam Pro | 16px | 400 |
| Label MD | Be Vietnam Pro | 14px | 600 |
| Label SM | Be Vietnam Pro | 12px | 500 |

### Spacing & Radius

```css
--radius-sm:   8px    /* buttons, inputs       */
--radius-md:   12px   /* stat cells            */
--radius-lg:   16px   /* recipe cards          */
--radius-xl:   24px   /* bento cards, CTA      */
--radius-full: 9999px /* pills, search bar     */
```

---

## Recipe Data Model

```js
{
  id:           string,    // auto-generated — Date.now().toString()
  name:         string,    // recipe title (required)
  description:  string,    // short description (also searched)
  image:        string,    // absolute URL to a photo
  time:         string,    // cook time in minutes
  servings:     string,    // number of servings
  calories:     string,    // kcal per serving
  ingredients:  string[],  // e.g. ["2 cups basil", "1/2 cup olive oil"]
  instructions: string[],  // ordered steps as plain text
  favorite:     boolean,   // whether marked as a favourite
}
```

All fields except `id`, `name`, and `favorite` are optional — the UI gracefully hides any missing sections.

---

## State Management

All state lives in `RecipeContext` and is accessed anywhere via the `useRecipes()` hook.

```js
const {
  // Data
  recipes,           // full persisted list
  filteredRecipes,   // derived — search + tab filter applied
  selectedRecipe,    // current recipe object or null

  // UI state
  panelMode,         // "view" | "add" | "edit"
  searchQuery,
  activeTab,         // "all" | "favorites"
  isPanelOpen,

  // Setters
  setSearchQuery,
  setActiveTab,

  // CRUD
  addRecipe(data),
  updateRecipe(id, data),
  deleteRecipe(id),
  toggleFavorite(id),

  // Panel helpers
  openAddPanel(),
  openEditPanel(),
  openViewPanel(id),
  closePanel(),
} = useRecipes();
```

`filteredRecipes` is computed with `useMemo` — it updates automatically whenever `recipes`, `searchQuery`, or `activeTab` changes.

---

## Available Scripts

| Script | Command | What it does |
|---|---|---|
| Development | `npm run dev` | Start Vite dev server with HMR at localhost:5173 |
| Build | `npm run build` | Compile and bundle into `dist/` |
| Preview | `npm run preview` | Serve the `dist/` folder locally |
| Lint | `npm run lint` | Run ESLint across all source files |

---

## Extending the App

### Connect a real backend

The context CRUD methods are the only integration point. Replace `useLocalStorage` with API calls and the entire UI stays unchanged:

```js
// Before (localStorage)
const [recipes, setRecipes] = useLocalStorage(STORAGE_KEY, SAMPLE_RECIPES);

// After (REST API example)
const [recipes, setRecipes] = useState([]);
useEffect(() => {
  fetch("/api/recipes")
    .then((res) => res.json())
    .then(setRecipes);
}, []);
```

### Add a new page

1. Create `src/pages/NewPage/NewPage.jsx` + `NewPage.css`
2. Add the route condition in `App.jsx`
3. The `RecipeProvider` wraps the whole tree so the new page has full context access

### Clear all data

Open **DevTools → Application → Local Storage** → delete the `savor_recipes_v1` key → refresh. The app reloads with the 7 sample recipes.

---

## Browser Support

Requires `color-mix()` CSS support — available in all modern browsers since 2023.

| Browser | Version |
|---|---|
| Chrome | 111+ |
| Firefox | 113+ |
| Safari | 16.4+ |
| Edge | 111+ |

---

## License

MIT — free to use, modify, and distribute.

---

*Built with React 19 + Vite 8 · Zero UI library dependencies · No backend required*
