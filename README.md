# Camp Messiah Website

Camp Messiah marketing site built with Next.js 16, HeroUI v3, and Tailwind CSS.

## Local development

Install dependencies and start the app:

```bash
npm install
npm run dev
```

## Registration email delivery

The registration form submits on the server and sends a notification email through Resend.

Create a local env file from `.env.example` and set:

```bash
RESEND_API_KEY=re_xxxxxxxxx
NOTIFICATION_FROM_EMAIL="Camp Messiah <campmessiah@yourdomain.com>"
REGISTRATION_TO_EMAIL="camp-admin@example.com"
NEXT_PUBLIC_SITE_URL=https://www.example.com
SITE_ALLOW_INDEXING=false
```

Notes:

- The form will use the first sender address it finds from:
  - `RESEND_FROM_EMAIL`
  - `NOTIFICATION_FROM_EMAIL`
  - `CONTACT_FROM_EMAIL`
- That sender address must use a domain verified in your Resend account.
- `REGISTRATION_TO_EMAIL` is the inbox that receives each registration submission.
- The parent or guardian email from the form is attached as `reply_to` on the outgoing message.
- `NEXT_PUBLIC_SITE_URL` should be the final production domain. It may be omitted for a Vercel preview deployment.
- Leave `SITE_ALLOW_INDEXING=false` during review. Set it to `true` when the site is ready to appear in search results.

Add the same email environment variables in the Vercel project settings. Local `.env.local` values are not uploaded automatically.

Without the email env vars, the form will render but submission will return a temporary-unavailable message instead of sending email.

Search indexing is disabled by default, including on Vercel production deployments. Setting `SITE_ALLOW_INDEXING=true` enables indexing and publishes the sitemap through `/robots.txt`; Vercel preview deployments remain `noindex`.

## Build

```bash
npm run build
```
