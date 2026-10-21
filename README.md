# Twitter Clone

A Twitter-style social app built with Next.js, Google sign-in and MongoDB via Prisma.

**Status:** In progress. Google sign-in, user records and the protected dashboard routes work, but posts, notifications, bookmarks, explore and profile editing are static UI with no backend behind them (the Prisma schema only has a `User` model).

## The problem

A learning-style clone of the Twitter (X) layout: a login page, a three-column dashboard and a set of feed-style pages. The code shows the author working on the sign-in flow and the app shell first, with the social features still to come.

## What it does

- Google sign-in on the landing page (`@react-oauth/google`). The first login creates a `User` record from the Google profile (`name`, `email`, `picture`, `sub`); later logins reuse it.
- Session by cookie: `user-id` is set on login and removed on logout. The landing page redirects signed-in users to `/dashboard`, and the dashboard layout redirects anonymous users back to `/`.
- Dashboard shell with a left sidebar, a right sidebar, a mobile navigation bar and a post composer popup.
- Pages for home, explore, notifications, bookmarks, profile and a single post view at `/dashboard/post/[id]`.
- Profile edit modal (name, bio, location, website) in the profile page.

## How it's built

- Next.js 16 App Router with React 19 and TypeScript. Server components check the session cookie before rendering.
- Server actions in `actions/` (`loginSignup`, `logout`) handle database writes and cookie changes, so the browser never calls the database directly.
- Prisma 6 with the MongoDB provider. The client is generated into `app/generated/prisma` and wrapped in `lib/prisma.ts`.
- Styling with Tailwind CSS v4 through PostCSS.
- Shared types for the Google payload live in `types.ts`.

## Running it locally

```bash
pnpm install
# create .env with DATABASE_URL (MongoDB) and NEXT_PUBLIC_GOOGLE_CLIENT_ID
pnpm generate   # prisma generate
pnpm dev
```

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

## What's left

- Posts are not stored. There is no `Post` model, and the feed, the post popup and `/dashboard/post/[id]` use hard-coded content.
- Explore, notifications and bookmarks are static pages.
- The profile edit modal keeps its values in local state and does not save them.
- The `user-id` cookie holds the raw database id and is not signed or encrypted. Any browser can set it and reach the dashboard, so the session needs a signed token or a server-side session before this is used for real data.
- No automated tests.
