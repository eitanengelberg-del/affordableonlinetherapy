# affordableonlinetherapy.xyz

SEO satellite site funneling traffic to ShemeshWellness.com

## Stack
- Astro (static site, 95+ PageSpeed score)
- Deployed on Vercel (free)
- No database, no CMS — just fast static files

## Local Development

```bash
npm install
npm run dev
# Opens at http://localhost:4321
```

## Deploy to Vercel

### First time setup:
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import from GitHub
3. Select this repo
4. Framework: Astro (auto-detected)
5. Click Deploy
6. Add your custom domain in Vercel → Domains → affordableonlinetherapy.xyz

### Every update after that:
```bash
git add .
git commit -m "add new article"
git push
# Vercel auto-deploys in ~30 seconds
```

## Adding New Articles

1. Copy any file from `src/pages/articles/`
2. Rename it to your new article slug (e.g. `online-therapy-for-burnout.astro`)
3. Update the frontmatter: title, description, pubDate, category, readingTime, canonical
4. Write your content between the `<ArticleLayout>` tags
5. Add it to `src/pages/sitemap.xml.astro`
6. Push to GitHub → auto-deploys

## Article Template

See `src/pages/articles/what-is-online-therapy.astro` as the gold standard template.

## Content Strategy (Topic Clusters)

### Pillar pages (done):
- /articles/what-is-online-therapy
- /articles/how-to-find-affordable-therapy  
- /articles/types-of-therapy-explained
- /articles/online-therapy-for-anxiety
- /articles/how-to-start-therapy

### Next articles to write:
- /articles/online-therapy-for-depression
- /articles/online-therapy-for-burnout
- /articles/online-therapy-vs-in-person
- /articles/is-online-therapy-effective
- /articles/online-therapy-cost-breakdown
- /articles/what-to-expect-first-therapy-session
- /articles/how-to-choose-a-therapist
- /articles/online-therapy-for-trauma
- /articles/cbt-explained
- /articles/signs-you-need-therapy

## Funnel
All CTAs → https://shemeshwellness.com

## Cloning for other domains
1. Duplicate this entire folder
2. Find & replace "affordableonlinetherapy.xyz" with new domain
3. Find & replace site name in Layout.astro
4. Update astro.config.mjs site URL
5. New GitHub repo → New Vercel project → Done
