<a href="https://demo-nextjs-with-supabase.vercel.app/">
  <img alt="Next.js and Supabase Starter Kit - the fastest way to build apps with Next.js and Supabase" src="https://demo-nextjs-with-supabase.vercel.app/opengraph-image.png">
  <h1 align="center">Next.js and Supabase Starter Kit</h1>
</a>

<p align="center">
 The fastest way to build apps with Next.js and Supabase
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
  <a href="#more-supabase-examples"><strong>More Examples</strong></a>
</p>
<br/>

## Features

- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Components with [shadcn/ui](https://ui.shadcn.com/)
- Optional deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables automatically assigned to Vercel project

## Demo

You can view a fully working demo at [demo-nextjs-with-supabase.vercel.app](https://demo-nextjs-with-supabase.vercel.app/).

## Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

After installation of the Supabase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This+starter+configures+Supabase+Auth+to+use+cookies%2C+making+the+user%27s+session+available+throughout+the+entire+Next.js+app+-+Client+Components%2C+Server+Components%2C+Route+Handlers%2C+Server+Actions+and+Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png)

The above will also clone the Starter kit to your GitHub, you can clone that locally and develop locally.

If you wish to just develop locally and not deploy to Vercel, [follow the steps below](#clone-and-run-locally).

## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   npx create-next-app --example with-supabase with-supabase-app
   ```

   ```bash
   yarn create next-app --example with-supabase with-supabase-app
   ```

   ```bash
   pnpm create next-app --example with-supabase with-supabase-app
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd with-supabase-app
   ```

4. Rename `.env.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

6. This template comes with the default shadcn/ui style initialized. If you instead want other ui.shadcn styles, delete `components.json` and [re-install shadcn/ui](https://ui.shadcn.com/docs/installation/next)

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Feedback and issues

Please file feedback and issues over on the [Supabase GitHub org](https://github.com/supabase/supabase/issues/new/choose).

## More Supabase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)


/* Create table public.users (
  id bigint generated by default as identity not null,
  created_at timestamp with time zone not null default now(),
  name text null,
  zip bigint null,
  whatsapp bigint null,
  user_id uuid null,
  id_branch bigint null,
  id_role bigint null,
  city text null,
  state text null,
  street text null,
  number bigint null,
  complement text null,
  district text null,
  constraint users_pkey primary key (id),
  constraint users_id_branch_fkey foreign KEY (id_branch) references branch (id) on update CASCADE,
  constraint users_id_role_fkey foreign KEY (id_role) references role (id) on update CASCADE
) TABLESPACE pg_default; */

/* create table public.profiles (
  id uuid not null,
  created_at timestamp with time zone not null default now(),
  email text not null,
  display_name text null,
  image_url text null,
  constraint profiles_pkey primary key (id),
  constraint profiles_id_fkey foreign KEY (id) references auth.users (id) on update CASCADE on delete CASCADE
) TABLESPACE pg_default;*/

/*create table public.role (
  id bigint generated by default as identity not null,
  created_at timestamp with time zone not null default now(),
  name text null,
  constraint role_pkey primary key (id)
) TABLESPACE pg_default;*/  

/*create table public.branch (
  id bigint generated by default as identity not null,
  created_at timestamp with time zone not null default now(),
  user_id uuid null default auth.uid (),
  name_branch text null,
  cep bigint null,
  status bigint null,
  cover_photo text null,
  profile_picture text null,
  email_branch text null,
  cnpj_cpf text null,
  phone bigint null,
  constraint branch_pkey primary key (id)
) TABLESPACE pg_default;*/

/* create table public.status (
  id bigint generated by default as identity not null,
  created_at timestamp with time zone not null default now(),
  name text null,
  description text null,
  constraint status_pkey primary key (id)
) TABLESPACE pg_default;*/

/*create view public.view_auth_uid_users as
select
  u.id,
  u.name,
  u.zip,
  u.whatsapp,
  u.user_id,
  u.id_branch,
  b.name_branch,
  a.email as auth_email,
  u.id_role,
  c.name as name_role,
  to_char(
    (
      (a.created_at AT TIME ZONE 'UTC'::text) AT TIME ZONE 'America/Sao_Paulo'::text
    ),
    'DD/MM/YYYY HH24:MI:SS'::text
  ) as created_at
from
  users u
  left join auth.users a on u.user_id = a.id
  left join branch b on b.id = u.id_branch
  left join role c on c.id = u.id_role
where
  u.user_id = auth.uid ();*/

/* create view public.view_category_same_company as
select
  j.id,
  to_char(
    j.created_at - '03:00:00'::interval,
    'DD/MM/YYYY HH24:MI:SS'::text
  ) as created_at,
  j.title,
  j.user_id,
  case
    when auth.uid () = j.user_id then 'Sim'::text
    else 'Não'::text
  end as user_criou
from
  categories j
  left join users jb on j.user_id = jb.user_id
where
  jb.id_branch = (
    (
      select
        users.id_branch
      from
        users
      where
        users.user_id = auth.uid ()
    )
  );*/

  /* create view public.view_company_members as
select
  u.id,
  u.name,
  u.zip,
  u.whatsapp,
  u.user_id,
  u.id_branch,
  b.name_branch,
  a.email as auth_email,
  u.id_role,
  c.name as name_role,
  to_char(
    a.created_at - '03:00:00'::interval,
    'DD/MM/YYYY HH24:MI:SS'::text
  ) as created_at,
  case
    when auth.uid () = u.user_id then 'yes'::text
    else 'no'::text
  end as your_profile
from
  users u
  join auth.users a on u.user_id = a.id
  join branch b on b.id = u.id_branch
  join role c on c.id = u.id_role
where
  u.id_branch = (
    (
      select
        users.id_branch
      from
        users
      where
        users.user_id = auth.uid ()
    )
  );*/
/*create view public.view_company_same_user as
select
  j.id,
  to_char(
    j.created_at - '03:00:00'::interval,
    'DD/MM/YYYY HH24:MI:SS'::text
  ) as created_at,
  j.user_id as owner_id,
  jb.user_id,
  case
    when j.user_id = jb.user_id then 'Sim'::text
    else 'Não'::text
  end as owner,
  jb.name,
  jc.name as role,
  j.name_branch,
  j.cep,
  j.status as id_status,
  ja.name as status,
  j.cover_photo,
  j.profile_picture,
  j.email_branch,
  j.cnpj_cpf,
  j.phone,
  jd.total_users
from
  branch j
  left join status ja on j.status = ja.id
  left join users jb on j.id = jb.id_branch
  left join role jc on jb.id_role = jc.id
  left join (
    select
      users.id_branch,
      count(users.user_id) as total_users
    from
      users
    group by
      users.id_branch
  ) jd on j.id = jd.id_branch
where
  jb.id_branch = (
    (
      select
        users.id_branch
      from
        users
      where
        users.user_id = auth.uid ()
    )
  );*/

/*create view public.view_ingredient_same_company as
select
  j.id,
  to_char(
    j.created_at - '03:00:00'::interval,
    'DD/MM/YYYY HH24:MI:SS'::text
  ) as created_at,
  j.name_ingredient as title,
  j.user_id,
  case
    when auth.uid () = j.user_id then 'Sim'::text
    else 'Não'::text
  end as user_criou
from
  ingredient j
  left join users jb on j.user_id = jb.user_id
where
  jb.id_branch = (
    (
      select
        users.id_branch
      from
        users
      where
        users.user_id = auth.uid ()
    )
  );*/