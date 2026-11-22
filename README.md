# Rilwana Niyas — Cybersecurity Portfolio

A responsive React + Vite portfolio starter based on the information supplied in the CV and conversation.

## Run locally (Windows PowerShell)

1. Install Node.js LTS if it is not already installed.
2. Extract this ZIP.
3. Open the extracted `rilwana-cybersecurity-portfolio` folder in VS Code.
4. Open Terminal > New Terminal and run:

```powershell
npm install
npm run dev
```

5. Open the local URL shown by Vite (usually http://localhost:5173).

## Before publishing — personalize these items

- Replace `public/Rilwana_Niyas_CV.pdf` with your latest CV PDF. Keep the exact filename or update both Download CV links in `src/App.jsx`.
- Add your own profile photo if you want one. The current design intentionally uses a CSS illustration rather than a stock portrait.
- Verify your degree start date. The CV uploaded in this conversation says 2024–present; use the correct official date.
- Verify dates and current status for IqraSec and Codomax. Do not describe an ongoing internship as completed.
- Add project GitHub repository links only after making the repositories public and checking that they contain the project.
- Add certificate URLs only if you have real shareable certificate links.
- Check the exact spelling of the LinkedIn and TryHackMe profile URLs.
- Remove or edit any skill you cannot confidently explain in an interview.

## Build for deployment

```powershell
npm run build
```

The production website is generated in the `dist` folder. It can be deployed to GitHub Pages, Netlify, or Vercel.

## Accuracy note

The portfolio describes SIEM, alert triage, phishing analysis, incident response and MITRE ATT&CK as learning areas, not professional experience. Update the content as you gain hands-on experience.

## 🚀 AWS CI/CD Deployment

This portfolio is deployed using AWS CI/CD services.

**Technologies used:**
- GitHub – Source Code Repository
- AWS CodeBuild – Automated Build Process
- Amazon S3 – Static Website Hosting

**Deployment Workflow:**

Whenever new code is pushed to GitHub, a webhook automatically triggers AWS CodeBuild. CodeBuild installs dependencies, builds the React application using Vite, and deploys the production files from the `dist/` folder to Amazon S3.
git commit -m "Test automatic AWS deployment"