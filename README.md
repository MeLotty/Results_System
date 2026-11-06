# Results System — Office 2021 Learning Library

A responsive, dependency-free information site with 30 original introductory lessons and 30 multiple-choice practice questions for Microsoft Word, Excel, PowerPoint, Publisher, and Access 2021 on Windows.

## Run locally

Open `index.html` in a modern browser, or serve the repository:

```sh
cd /workspace/Results_System
python3 -m http.server 8000 --bind 0.0.0.0
```

No installation, build, account, or database is needed. The tutorials explain the desktop applications; they do not embed or install Office. Publisher and Access are Windows-only and are not included in every Office 2021 edition.

## Features

- Five application learning paths with chapter navigation and direct lesson links.
- Cross-application lesson search; `/` focuses search and Escape clears it.
- Learning objectives, numbered instructions, examples, tips, and practice tasks.
- Previous/next navigation and an in-page contents list.
- Optional completion tracking stored only in the current browser's local storage. No data is sent to a server; clearing browser storage resets progress.
- A six-question quiz per application with radio choices, Show Answer explanations, a final score, and retry. Revealing an answer locks that question; unanswered questions block submission.
- Quiz attempts stay in memory while navigating between lessons and reset on refresh; lesson completion still persists locally.
- Responsive navigation, keyboard focus states, and semantic page landmarks.

## Content and deployment

Lessons live in the `courses` object in `script.js`. Quiz questions live in `quizzes.js`; each has four choices, a correct-answer index, and an explanation. Each lesson includes a route, title, introduction, objectives, explanation, steps, example, tip, and exercise. These are independent introductory guides, not Microsoft documentation. Menu names may vary across platforms and language settings.

For GitHub Pages, publish the branch from its root directory. The site uses relative assets and hash-based lesson routes, so no server-side routing is required.

## Validation

Run `node --check script.js` for syntax. For browser validation, exercise all five app tabs and 30 lessons, search and its empty state, previous/next links, completion persistence, in-page links, and narrow-screen navigation. Check correct, incorrect, and mixed quiz scores, incomplete submission, answer locking, retry, and navigation between quizzes and tutorials. There is no build step or repository test runner.
