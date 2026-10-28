# Muhammad Talha — Portfolio Website

A responsive, light-mode React portfolio built with Vite. Includes animated hero, filterable project grid, project detail modals, expertise, career timeline, certificates, CV download, and contact links.

## Run locally

1. Install Node.js (18+ recommended).
2. In this folder, run `npm install`.
3. Run `npm run dev` and open the local URL shown by Vite.
4. Run `npm run build` to create the production build in `dist/`.

## Project structure

```
src/
  main.jsx                  App entry point
  App.jsx                   Page composition (header, sections, footer)
  styles.css                Global stylesheet
  constants.js              Asset base path and contact email
  data/
    projects.js             Project list and filter categories
    skills.js               Tech-stack skills
    experience.js           Career timeline entries
    certificates.js         Certifications and credential links
    reviews.js              Client review screenshots
  hooks/
    useBodyScrollLock.js    Locks page scroll while a modal is open
  components/
    layout/                 Header, Footer
    sections/               Hero, IntroStrip, About, Projects, Reviews,
                            Expertise, Experience, Certifications, Contact
    projects/               ProjectCard, ProjectModal
    experience/             ExperienceItem, ExperienceModal
    certifications/         CertificationCard, CertificationModal
    ui/                     Modal, ProjectGraphic, StarIcon,
                            ExpertiseCard, WelcomePopup
```

## Customisation

- Portrait and certificate images/PDFs are in `public/assets/`.
- Project content lives in `src/data/projects.js`.
- Skills, experience, certificates, and client reviews live in the matching files under `src/data/`.
- Contact links and the contact email are in `src/components/sections/Contact.jsx` and `src/constants.js`.
- Visual styles and responsive behaviour are in `src/styles.css`.
- Email links use `captiontalha@gmail.com`; CV downloads `public/assets/Muhammad-Talha-CV.pdf`.

## Notes

Project cards are based on the information provided in the conversation and uploaded CV/profile. Some items are intentionally described at a high level where detailed feature descriptions or public links were not supplied. Review project wording and metrics for accuracy before publishing. The supplied profile PDF is included as a separate asset for reference; the CV download is the resume PDF.
