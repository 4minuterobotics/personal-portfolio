# Personal Portfolio — williamlawrence.tech

React + Vite single-page portfolio. Deployed to Hostinger shared hosting.

## Run locally

```
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build

```
npm run build
```

Outputs static site to `./dist/` — pure client-rendered SPA, no pre-rendering step.

## Deploy — automated

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and uploads `dist/` to Hostinger via FTPS. Typical deploy time: ~2 minutes.

### One-time setup (GitHub repository secrets)

In GitHub → repo Settings → Secrets and variables → Actions → New repository secret, add these four:

| Secret name | Value | Where to find it |
|---|---|---|
| `FTP_SERVER` | FTP hostname | Hostinger hPanel → Files → FTP Accounts → "FTP server" (typically `ftp.<your-domain>` or a numeric IP) |
| `FTP_USERNAME` | FTP username | Same panel — usually formatted `u123456789.your-domain.com` |
| `FTP_PASSWORD` | FTP password | Same panel — set or reset there |
| `FTP_SERVER_DIR` | Remote directory the site should live in | Usually `/public_html/` for the root domain. Trailing slash matters. For a subdomain like `staging.williamlawrence.tech`, it would be `/public_html/staging/` |

After setting the secrets, push any commit to `main` (or click "Run workflow" on the Actions tab) to trigger the first automated deploy.

### One-time setup (Hostinger side)

1. Log into Hostinger hPanel for `williamlawrence.tech`.
2. Go to **Files → FTP Accounts**. Note the FTP server, username, and create/note a password.
3. (Optional but recommended) Create a dedicated FTP account just for CI deploys — limited to `/public_html/` — instead of using your main account. Easier to rotate if the password ever leaks.
4. Go to **Files → File Manager** and verify `/public_html/` is the directory currently serving `williamlawrence.tech`. If the live site is in a different folder, use that path for `FTP_SERVER_DIR`.

### First-deploy bootstrap (recommended)

Before letting CI overwrite the live site, sanity-check the build artifact once manually:

1. Run `npm run build` locally.
2. Open Hostinger File Manager → backup or rename your current `/public_html/` contents (e.g., to `public_html_old/`) so you can roll back if the new build looks wrong.
3. Upload the contents of `./dist/` into `/public_html/`.
4. Visit `https://williamlawrence.tech` — confirm the new site loads correctly.
5. Once verified, push the workflow + content changes to `main`. Future deploys are automated.

## Stack

- React 18 + Vite 4
- React Bootstrap, Tailwind 3, Bootstrap 5 (mixed — yes it's odd, that's how the original is wired)
- `react-vertical-timeline-component` for the Experience timeline
- `react-on-screen` for scroll-triggered fade/slide animations (locked to `once` so they fire only on first viewport entry, never re-trigger on scroll back up)
- EmailJS for the contact form

> **Note on pre-rendering:** the original repo had `"postbuild": "react-snap"` in `package.json` but the package was never actually installed — every `npm run build` was silently failing at that step. The postbuild has been removed so CI builds cleanly. If you want SEO pre-rendering back later, use `vite-plugin-prerender` (modern, maintained) rather than reinstalling react-snap (unmaintained since 2019).

## Adding a new project card

Open `src/components/Projects.jsx`. Add an entry to the `projects` array:

```js
{
  title: 'My Project',
  description: '2-3 sentences. Lead with what was built (engineering signal), close with the user/business decision behind it (product judgment signal).',
  imgUrl: ph('MP', '#2563EB'),   // placeholder; swap for `import img from '../assets/img/my-project.webp'` once you have a screenshot
  tags: [
    { name: 'react · next.js',          color: 'blue-text-gradient' },
    { name: 'supabase · stripe',         color: 'green-text-gradient' },
    { name: 'multi-tenant SaaS',         color: 'orange-text-gradient' },
  ],
  source_code_link: '',   // empty string hides the GitHub button
  website_link: '',       // empty string hides the Visit Website button
},
```

When both links are empty the modal shows "Live link and source coming soon." in place of the buttons.

## Adding a screenshot

Drop a WebP file into `src/assets/img/`, import it at the top of `Projects.jsx`:

```js
import myProject from '../assets/img/my-project.webp';
```

Then swap the placeholder: `imgUrl: myProject`.
