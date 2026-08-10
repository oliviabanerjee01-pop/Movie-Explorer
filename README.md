# 🎬 Cineva

> **Discover. Search. Explore.**

Cineva is a modern movie discovery web app built with **React** and the **OMDb API**. Search for movies, browse results, and explore titles through a sleek dark cinematic interface.

---

## ✨ Features

* 🔎 **Movie Search**
  Search movies by title using the OMDb API.

* 🎞️ **Dynamic Movie Cards**
  Movie results are rendered dynamically from API data.

* ⭐ **Movie Information**
  Displays movie titles, release years, ratings, and posters.

* 🎠 **Horizontal Movie Carousel**
  Browse multiple search results with smooth horizontal navigation.

* 🌙 **Dark Cinematic UI**
  A modern dark interface with gradient typography, subtle borders, glass-like surfaces, and animated interactions.

* ⌨️ **Keyboard Search**
  Press `Enter` to search without reaching for the mouse, because apparently even clicking buttons has become optional.

* 📱 **Responsive Design**
  Designed to remain usable across desktop and smaller screens.

---

## 🛠️ Tech Stack

| Technology               | Purpose                                |
| ------------------------ | -------------------------------------- |
| ⚛️ React                 | UI and component architecture          |
| ⚡ Vite                   | Development environment and build tool |
| 🎨 CSS                   | Styling and responsive design          |
| 🌐 OMDb API              | Movie data                             |
| 🔐 Environment Variables | API key protection                     |
| 🐙 Git & GitHub          | Version control                        |

---

## 🧠 React Concepts Practiced

Cineva was built while learning the fundamentals of React, including:

### Components

The interface is divided into reusable components:

```text
App
├── Header
├── SearchBar
└── MovieCard
```

### Props

Movie data is passed from the parent component into each movie card:

```jsx
<MovieCard movie={movie} />
```

### State

React state stores the current search and movie results:

```jsx
const [search, setSearch] = useState("");
const [movies, setMovies] = useState([]);
```

### Controlled Inputs

The search input is connected to React state:

```jsx
<input
    value={search}
    onChange={(event) => setSearch(event.target.value)}
/>
```

### Async / Await

The application communicates with the OMDb API asynchronously:

```jsx
const response = await fetch(url);
const data = await response.json();
```

### Rendering API Results

The returned movies are rendered dynamically:

```jsx
movies.map((movie) => (
    <MovieCard
        key={movie.imdbID}
        movie={movie}
    />
))
```

---

## 🔄 How It Works

```text
User searches for a movie
          ↓
Search state updates
          ↓
Search button / Enter
          ↓
searchMovies()
          ↓
fetch()
          ↓
OMDb API
          ↓
JSON response
          ↓
setMovies()
          ↓
React re-renders
          ↓
MovieCard × results
```

---

## 🔑 Environment Setup

Cineva uses an OMDb API key.

Create a `.env` file in the project root:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

The application accesses it through Vite:

```javascript
import.meta.env.VITE_OMDB_API_KEY
```

### ⚠️ Important

Never commit your `.env` file to GitHub.

Make sure your `.gitignore` contains:

```gitignore
node_modules
dist
.env
.env.local
```

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Enter the project

```bash
cd cineva
```

### 3. Install dependencies

```bash
npm install
```

### 4. Add your API key

Create `.env`:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

---

## 📁 Project Structure

```text
cineva/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieCard.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🎨 Design

Cineva uses a dark cinematic visual language built around:

* Deep black backgrounds
* Purple accent gradients
* Glass-like surfaces
* Soft borders
* Subtle shadows
* Smooth hover animations
* Responsive layouts

The goal is to keep the interface visually rich without letting the styling completely mug the user.

---

## 🧪 Current Status

**Version:** `1.0.0`

### Implemented

* [x] React project setup
* [x] Component architecture
* [x] Search input
* [x] React state
* [x] OMDb API integration
* [x] API result rendering
* [x] Movie cards
* [x] Movie posters
* [x] Horizontal movie carousel
* [x] Responsive styling
* [x] Environment variable for API key

### Planned Improvements

* [ ] Movie details page
* [ ] Genre filtering
* [ ] Year filtering
* [ ] Pagination
* [ ] Loading animation
* [ ] Better error states
* [ ] Favorites / watchlist
* [ ] Search history
* [ ] More detailed movie information
* [ ] Improved accessibility

---

## 📚 What I Learned

Building Cineva helped me understand how a React application connects **user interaction, state, APIs, and UI rendering**.

The most important progression was:

```text
Static UI
   ↓
Components
   ↓
Props
   ↓
State
   ↓
User Input
   ↓
API Requests
   ↓
Dynamic Rendering
```

Rather than treating React hooks as things to memorize, the project focuses on understanding **why each concept is needed** and how the pieces communicate with one another.

---

## 👩‍💻 Author

**Olivia**

Built as a learning project while exploring React, APIs, and modern frontend development.

---

## 📄 License

This project is intended for educational and portfolio purposes.





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
