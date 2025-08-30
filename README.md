This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Supabase Schema
Tables:
events: stores event details
rsvp: stores RSVP entries with foreign key to events
user: optional table for user profiles

Relationships:
rsvp.event_id → events.id
rsvp.user_id → users.id
RLS: Disabled for assignment review
Sample Data: Added via Supabase Table Editor

## use command prompt and  vs code 
## In command prompt:
create a new folder name: my-events-app

## paste all codes in current directory
cd my-events-app

## need to install following packages:

√ Which linter would you like to use? » ESLint
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack? (recommended) ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes

## creat a new next.js in your project folder
Creating a new Next.js app in C:\Users\admin\my-events-app.

## install supabase:
C:\Users\admin\my-events-app>npm install @supabase/supabase-js

## open vs code 
add 
# PBDS – Event & RSVP Tracker

A full-stack web app built with **Next.js** and **Supabase** that allows users to view upcoming events and track RSVP responses in a clean, tabular format. Designed for clarity, simplicity, and real-world deployment workflows.

---

## 🚀 Tech Stack

- **Frontend**: Next.js (App Router)
- **Backend**: Supabase (PostgreSQL)
- **Styling**: TailwindCSS
- **Deployment**: Vercel

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/pbds-rsvp-tracker.git
cd pbds-rsvp-tracker

```
## install dependencies
npm install

## Create .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

This file is ignored by Git. A .env.example is provided to guide setup.

## run locally 
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
