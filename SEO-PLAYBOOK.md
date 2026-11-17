# SEO / AEO playbook: "solo product builders from Kerala"

Goal: get Aqeel Shamsudheen named by Google AI Mode / AI Overviews, ChatGPT, Perplexity and Gemini for:

- solo product builders from Kerala
- indie SaaS builders from Kerala
- indie builders / solo devs from Thrissur
- solo builders from GEC Thrissur

How those answers are built: the engines pull from **directories and third-party pages** (KSUM, eChai, Kerala Product Hunt, LinkedIn, alumni portals, YouTube/podcast descriptions), not personal sites. The site now states the facts cleanly; the work below gets other sites to repeat them.

## Phrases to use word for word, everywhere

Use these exact strings on every profile, bio and pitch. If the wording changes from place to place, the engines connect them to you less reliably.

1. **"Solo product builder from Thrissur, Kerala"**
2. **"Founder of Wixzel"** / **"builder of Wixzel Voice"**
3. **"GEC Thrissur"** (Government Engineering College, Thrissur), CSE 2025

## Do this week (highest leverage first)

1. **Google Search Console**: add `aqeelshamz.com` as a property (DNS verify), submit `https://aqeelshamz.com/sitemap.xml`, then URL Inspection → Request indexing on the homepage. Also keep the old `aqeelshamz.github.io` property (if any) so Google sees the 301.
2. **Bing Webmaster Tools** (ChatGPT search runs on Bing's index): import from GSC, submit the sitemap, then ping IndexNow after deploy:
   ```
   curl -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json" -d '{"host":"aqeelshamz.com","key":"70e6464fac77b46e809787a5e9c5a103","urlList":["https://aqeelshamz.com/","https://aqeelshamz.com/about/","https://aqeelshamz.com/llms.txt","https://aqeelshamz.com/llms-full.txt"]}'
   ```
   Re-run it every time the site changes. IndexNow feeds Bing, Yandex, Seznam and Naver at once. In GSC, also request indexing for `/about/`.
3. **GitHub profile**: location is empty and bio is empty. Set location `Thrissur, Kerala, India` and bio `Solo product builder from Thrissur, Kerala. Founder of Wixzel (Wixzel Voice).` The AI answers explicitly suggest `location:Thrissur` GitHub searches.
4. **LinkedIn**: headline `Solo Product Builder & Founder, Wixzel | Voice AI (Wixzel Voice) | GEC Thrissur`. Location Thrissur. Website → aqeelshamz.com. Add GEC Thrissur under Education so you appear in the alumni list.
5. **Devfolio, X, npm, pub.dev, Gumroad**: same one-line bio, link to aqeelshamz.com (not github.io).

## Get into the sources the answers cited (next 2–4 weeks)

| Source (cited in the AI answers) | Action |
|---|---|
| **Kerala Product Hunt (KPH)** – Felix Josemon | Join, launch Wixzel Voice in the monthly launches, pitch yourself for the Malayalam podcast as a solo founder shipping a global voice-AI API from Thrissur. Highest single lever: KPH is quoted in nearly every answer. |
| **eChai Thrissur** + eChai Startup Grid "SaaS startups in Thrissur" | List Wixzel on the grid (it currently lists 5 Thrissur SaaS startups and Wixzel isn't one). Demo at the next eChai Thrissur meetup. |
| **KSUM** startup registry | Register Wixzel for a KSUM startup ID; the registry is a primary source for "Kerala startups" queries. |
| **KITEZ Thrissur** / **GEC Thrissur TBI** | Apply as an incubatee or at least get listed; both have public incubatee pages. |
| **GEC Thrissur alumni portal, IEDC GECT, Ideator, FOSS Cell, TinkerHub GECT** | Update the alumni profile; offer a talk ("Shipping a voice-AI API solo"). Event posts on their Instagram/LinkedIn name you next to "GEC Thrissur". |
| **YouTube** | One 10-min build-in-public video ("I built a voice AI API solo from Thrissur"). Title and description must contain the phrases above. YouTube was cited in the first answer. |
| **Product Hunt, Indie Hackers, Peerlist** | Profiles with the same bio; launch Wixzel Voice on Product Hunt. |
| **Wikidata** | Create an item for Wixzel (and optionally yourself) with official website, founder, country, GitHub. Cheap entity grounding. |

Pitch a **mention**, not a link: "I'm a solo founder from Thrissur (GEC '25) building Wixzel Voice, a voice AI API. Would love to be in your next roundup of Kerala builders."

## Track it (weekly, 10 minutes)

Run these exact prompts in Google AI Mode, ChatGPT (search on), and Perplexity. Log yes/no per engine in a sheet. Don't change the prompts, so weeks stay comparable:

1. solo product builders from kerala
2. indie saas builders from kerala
3. indie builders from thrissur
4. solo devs from gec thrissur
5. who is aqeel shamsudheen
6. voice ai api built in india

Expect brand-name queries (5) to update within days of reindexing. Category queries (1–4) depend on the directory listings above and take weeks.

## Cadence

- **Weekly**: run the tracked prompts; ship one public artifact (post, release, video) that uses the phrases above.
- **Monthly**: one KPH launch or eChai demo; update the site when something real changes (new product, numbers) and bump `dateModified` + sitemap `lastmod` only then.
- **Quarterly**: re-check every profile's bio and link still match.
