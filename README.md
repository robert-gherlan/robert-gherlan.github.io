# Robert Gherlan — Personal Website & Resume

Static personal presentation and resume website for **Robert Gherlan** (Senior Software Engineer, Data Engineer, and Software Architect), hosted on GitHub Pages at [robert-gherlan.github.io](https://robert-gherlan.github.io).

## Pages

- **`index.html`** — Presentation landing page highlighting architectural focus areas (*Enterprise Data Platforms & Governance*, *High-Throughput Pipelines & Distributed Backends*, *Multi-Cloud Architecture, IaC & FinOps*), an experience snapshot, top skills, featured certifications, education, and direct links to the full resume.
- **`resume.html`** — Complete curriculum vitae structured for fast recruiter and ATS scanning (`Summary → Skills → Work Experience`), with detailed project case studies, full technology stacks across all roles, a categorized technical skills matrix, 10 verified international certifications, technical presentations & workshops, education, and a single-column ATS-safe print/PDF layout.

## Design & Technical Highlights

- **Zero-Build Static Architecture**: Pure semantic HTML5, modular CSS (`css/styles.css`), and vanilla JavaScript (`js/scripts.js`) with no bundler or external runtime dependencies.
- **Architectural Monograph Design System**: Pairs **Newsreader** (editorial serif headings) with **IBM Plex Sans** (technical body copy and `tabular-nums` dates/grades).
- **Light & Dark Themes**: Respects `prefers-color-scheme`, persists user selection via `localStorage`, and applies early theme initialization in `<head>` to prevent flash of unstyled content.
- **Print-to-PDF Ready**: Includes a dedicated `@media print` stylesheet in `css/styles.css` and a **Print PDF** action on `resume.html` for clean A4/Letter exports without navigation chrome.
- **Accessible & Responsive**: Semantic landmarks, skip-to-content link, `:focus-visible` indicators, `prefers-reduced-motion` support, and `IntersectionObserver`-based active navigation tracking.

## Repository Structure

```text
.
├── assets/
│   └── img/
│       ├── favicon.svg
│       └── logo.svg
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
├── index.html
├── resume.html
└── README.md
```

## Local Preview

Because the site is pure static HTML, CSS, and JavaScript, you can open `index.html` directly in a browser or serve the directory locally with any static file server, for example:

```bash
npx serve .
```

## Links

- **Website**: [robert-gherlan.github.io](https://robert-gherlan.github.io)
- **GitHub**: [github.com/robert-gherlan](https://github.com/robert-gherlan)
- **LinkedIn**: [linkedin.com/in/robert-gherlan](https://www.linkedin.com/in/robert-gherlan)
