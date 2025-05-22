# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Content Configuration

To avoid the error `No content configuration found, falling back to default collection`, you need to set up a content configuration.

1. Create a `content/configuration.yml` file in the `content` directory with the following content:

```yaml
content:
  # Define the default locale for the content
  defaultLocale: 'en'

  # Define the locales available for the content
  locales:
    - code: 'en'
      iso: 'en-US'
      file: 'en-US.json'
    - code: 'bg'
      iso: 'bg-BG'
      file: 'bg-BG.json'

  # Define the directory where the content files are located
  dir: 'content'

  # Define the default slug for the content
  defaultSlug: 'index'

  # Define the default navigation settings for the content
  navigation:
    - title: 'Home'
      slug: '/'
    - title: 'Articles'
      slug: '/articles'
    - title: 'Tags'
      slug: '/tags'
    - title: 'Search'
      slug: '/search'
```

2. Update the `nuxt.config.ts` file to include the new content configuration:

```typescript
import contentConfig from './content/configuration.yml';

export default defineNuxtConfig({
  // other configurations...
  content: {
    ...contentConfig.content,
    highlight: {
      theme: 'github-dark'
    },
    experimental: {
      documentDriven: true,
      advancedSearch: true
    }
  },
  // other configurations...
});
```
