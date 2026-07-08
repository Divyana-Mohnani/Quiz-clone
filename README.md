# Which Crow Are You?

## Live Demo
🔗 [quiz-clone.vercel.app](https://your-actual-url.vercel.app)

A **Six of Crows** character quiz built with React. Swipe through a
Ketterdam "dossier" of seven questions, Tinder-style — swipe right to
answer, left to pass — and get matched with Kaz, Inej, Nina, Matthias,
Jesper, or Wylan.

## Stack

- React 18 (Create React App, plain JavaScript — no external UI libraries)
- Custom pointer-event drag logic for the swipeable card stack (no
  animation library required)
- Plain CSS with a shared design-token system (`:root` variables in
  `src/index.css`)

## Folder structure

```
six-of-crows-quiz/
├── public/
│   └── index.html
├── src/
│   ├── index.js              # React entry point
│   ├── index.css             # global styles + design tokens (colors, fonts)
│   ├── App.js                # quiz state machine: start → quiz → result
│   ├── App.css
│   ├── data/
│   │   └── quizData.js       # characters + questions, single source of truth
│   └── components/
│       ├── StartScreen.js/.css
│       ├── ProgressBar.js/.css
│       ├── QuestionStack.js/.css   # the swipeable card stack
│       └── ResultScreen.js/.css
├── package.json
├── .gitignore
└── README.md
```

## How the scoring works

Each question's `options` array in `quizData.js` is **positionally mapped**
to the `characters` array — `options[0]` always scores a point for
`characters[0]`, `options[1]` for `characters[1]`, and so on. `App.js`
keeps a running tally (an array of six counters) and, after the last
question, picks whichever character has the highest count.

## How the swipe works

`QuestionStack.js` keeps the six answer options in an `order` array.
The first item in `order` is the card on top. Dragging (via
`onPointerDown/Move/Up`) past a threshold either:
- **swipes right** → calls `onChoose(topIndex)`, locking in that answer, or
- **swipes left** → moves the top card to the back of `order` (a "pass"),
  revealing the next option

Buttons below the stack (`✕ Pass` / `✓ Recruit`) do the same thing for
anyone not using touch/mouse drag.

## Running it locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Deploying / pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Six of Crows character quiz"
git branch -M main
git remote add origin https://github.com/<your-username>/which-crow-are-you.git
git push -u origin main
```
