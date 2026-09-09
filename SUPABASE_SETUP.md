# Supabase Auth Setup

This static portfolio uses Supabase Auth for the Data Hub login and registration flow.

## Required values

Create a Supabase project, then copy these public project values into `supabase-config.js`:

- `SUPABASE_URL`: your project URL, for example `https://your-project-id.supabase.co`
- `SUPABASE_ANON_KEY`: your public anon key from Project Settings > API

The anon key is designed for browser use, but never place service-role keys or database passwords in this repository.

## Auth settings

In Supabase, enable Email provider authentication under Authentication > Providers. Add the deployed GitHub Pages URL to Authentication > URL Configuration so confirmation links and redirects work correctly.

## Future protected downloads

The Data Hub cards are preserved. Actual file delivery can be wired later by adding signed/protected URLs in the `protectedDownloads` map inside `index.html`, or by replacing that map with a Supabase Storage signed URL request.