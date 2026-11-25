# Original portfolio - recovered deployed artifact

This is the deployed HTML of Ahmed Gamal's original Arabic portfolio, recovered from its
Netlify deployment (ahmedgportfolio.netlify.app, deploy of 2026-05-12). It is a Netlify
Drop static deploy: this file is the deployed build as served, not the original source
project, which is not available.

## Sanitization applied

Before publishing, all images were replaced with local sanitized copies (no external
image URLs remain):

- images/p2.jpg (CV design sample): third-party personal details opaquely removed -
  name, phone, email, location, both employers, both employment date ranges, university
  name and years. Marked "Anonymized design sample - personal details hidden".
- images/p10.jpg (report sample): third-party student name, the "prepared by student"
  label and the section identifier opaquely removed.
- images/hero.png: the owner's own photo, kept as-is.
- images/p1.jpg, p3.jpg-p9.jpg: unchanged; contained no third-party personal data.

External references that remain are library/font CDNs only (three.js, Google Fonts) and
the owner's own WhatsApp link.
