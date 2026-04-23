# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Castle Peak Farm — a React/TypeScript SPA for browsing and purchasing tickets to farm events. Deployed as a static site via `gh-pages`.

## Related Applications

This is one of three apps in the CPF monorepo at `../`:

- **`../CPF_Back`** — Express/TypeScript backend. Handles Stripe payment intent creation, pre-payment availability verification, and a Stripe webhook that writes sales + updates `Sold` count in Firestore. Also exposes password-protected `/sales` and `/customers` endpoints and a `/delete-event` endpoint. Run with `npm start` (nodemon/ts-node). Has Jest tests (`npm test`).
- **`../cpf-next-admin`** — Next.js 15 full-stack admin app. Uses Firebase Admin SDK server-side to create, modify, and delete events. Cloudinary for image uploads. shadcn/ui components. Run with `npm run dev`.

The shared Firestore database (`Events` collection, `Sales` collection, `Customers` collection) is the integration point between all three apps.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Type-check + build (tsc && vite build)
npm run lint       # ESLint with zero warnings tolerance
npm run deploy     # Build and deploy to GitHub Pages (gh-pages -d dist)
```

There are no tests.

## Environment Variables

Create a `.env` file at the root with:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_STRIPE_PUBLISHABLE_KEY=
VITE_BACKEND_URL=         # Backend API base URL (e.g. https://api.example.com)
```

## Architecture

**Routing** — Uses `createHashRouter` (hash-based, required for static hosting). All routes defined in `src/main.tsx`. The `<Page>` component wraps every page with the shared `<NavBar>` and `<Footer>`.

**Data layer** — `EventsProvider` (`src/contexts/`) subscribes to Firestore (`Events` collection) via `onSnapshot`, filtering to only future events ordered by `EndDateTime`. Events are further filtered by `hideUnsoldEvents` (hides events with 0 sales within 48 hours of start). All pages that need events consume `EventsContext` via `useContext`.

**Checkout flow** — Route `/checkout/:eventId/:ticketQuantity`:

1. `CheckoutPage` fetches a Stripe payment intent from `VITE_BACKEND_URL/create-payment-intent`
2. `CheckoutForm` validates name/email with Zod, calls `VITE_BACKEND_URL/verify-event-availability`, then confirms the Stripe payment
3. On success, navigates to `/order-complete`

**Backend calls** — Two fetch calls go to the backend API (not Firebase): `create-payment-intent` and `verify-event-availability`. Everything else reads directly from Firestore.

**Firestore field naming** — Firestore document fields use PascalCase (`Name`, `StartDateTime`, `EndDateTime`, `Capacity`, `Sold`, `Price`, `IsDirectSaleOnly`). These are mapped to camelCase in `EventsProvider` and `fetchEventsService`.

**Static content** — Blog posts are defined locally in `src/BlogPosts.ts` (not in Firestore). Legal documents (privacy policy, terms of use) are static HTML files in `public/`.

**Styling** — Tailwind CSS with `@tailwindcss/forms` and `@tailwindcss/typography` plugins. Prettier is configured with `prettier-plugin-tailwindcss` for class sorting.
