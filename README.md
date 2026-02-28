# 🌻 Pollinator Pathways Website

> [!WARNING]
> This site is a work in progress. The framework has been roughed in, but there's still a lot of work to do to build the remaining pages from the [existing website](https://www.pollinatorpathwaysproject.com/).

## How this site is built

The follow tools and frameworks are used in this website:

- [React](https://react.dev/)
  - A JavaScript library for building web components
- [NextJS](https://nextjs.org/)
  - A framework for using React for websites
- [CSS Modules](https://github.com/css-modules/css-modules)
  - An approach to writing CSS for React components
- [Tina CMS](https://tina.io/)
  - A content management system, intended to make it easier for folks who aren't into coding to edit the words and images shown on the website

## Deploying to production

The recommended deployment platform is [Vercel](https://vercel.com/). At present, this site is meant to be deployed in two separate instances:

- Create a new project, to set up the production instance of the site. Add a `NEXT_PUBLIC_EDITABLE` environment variable and set it to `false`. This deployment will not allow edits through TinaCMS, as it will prioritize performance.
- Create a second new project in Vercel, and set up an instance of the site that allows content edits. Add a `NEXT_PUBLIC_EDITABLE` environment variable and set it to `true`. This deployment will allow edits through TinaCMS, at the cost of a slightly slower experience.
- Modify the redirect in `next.config.mjs`, to redirect `/admin` from the production deployment to the editable deployment

> [!NOTE]
> This site has an unconventional approach to deployment, as I couldn't get TinaCMS to work as smoothly as I wanted with NextJS's new server-component-compatible app router. I found trying to toggle between "editable" mode (where a TinaCMS user is logged in, and pages load with client components for full interactivity) and "non-editable" mode (where we want pages to load with server components for better performance) didn't work as expected, with each edit session seemingly requiring authors to log out and log back in before being able to make further changes.

## Local development

First, make sure you have [Node](https://nodejs.org/en) installed, version 18 or later. You'll need some experience with [command line interfaces](https://en.wikipedia.org/wiki/Command-line_interface) as well. Once Node is installed, [`cd`](https://en.wikipedia.org/wiki/Cd_(command)) into this project folder, and run [`npm i` to install dependencies](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager).

Once you have Node installed and have installed `package.json` dependencies with `npm i`, you can run the development command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to visit the site's local development server. To make edits to the source code of the site, you'll need to get familiar with the [frameworks used for this site](#how-this-site-is-built).

### Environment variables

```sh
# See Tina docs for information on TINA_CLIENT_ID and TINA_TOKEN
NEXT_PUBLIC_TINA_CLIENT_ID=
TINA_TOKEN=
# Set these both to true if you are running the app locally
NEXT_PUBLIC_EDITABLE=true
TINA_PUBLIC_IS_LOCAL=true
# Enables the contact form. Sign up for SendGrid if needed.
SENDGRID_API_KEY=
```

## How to edit content

Content is stored in `.json` files in the `content` folder within this project. These files can be edited and committed to version control just as any other code file might be edited.

This site uses [TinaCMS](https://pollinator-pathways-project-website.vercel.app/admin) with the intention of allowing folks who are unfamiliar with coding to edit content. This project could be set up with [Tina Cloud](https://tina.io/docs/tina-cloud/overview/). The free plan could be used with a single admin account, and credentials shared between editors, to allow anyone to edit the site from anywhere.
