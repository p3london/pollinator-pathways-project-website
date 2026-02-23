# Notes

## Next steps

### Revisit priorities with simplified approach

- Zeffy - should probably stay
- Contact form - can be dropped in favour of `mailto:` link (though form is probably a good idea, definitely reduces friction eg for volunteer communication)
- Mailing list - can be dropped in favour of blind-CC emails. Later, use Zeffy, it's free.
- Home page - keep as-is for now, could revisit later

- [ ] Revisit Figma with super-simplified approach

### Contact form

- [ ] Simple version... `mailto:` link!
  - `mailto:user@example.com?subject=&:subjectbody=:body`
  - Implement this, maybe have a CMS option to `Use contact form` / `Use email link` in the contact form configuration?

- [ ] Investigate how contact form will work
  - Form submission needs to go somewhere... use MailGun I guess?
  - Looking up `Contact form to email` services seems like a good direction. Examples... <https://web3forms.com>, <https://www.formspark.io>, <https://www.smtp2go.com/pricing/>
  - [Nodemailer](https://nodemailer.com/) might be a useful thing to look at

### Test TinaCMS

- Had a multi-deployment setup at some point... will probably make sense to do that again?

### Mailing list

- [ ] Investigate what mailing list tool P3 London is using
  - I think probably Wix? So we need to migrate their mailing list out of Wix... and into some new tool.

Notes from a couple years ago...

- [ ] Set up email platform
    - See if you can do the "welcome email" thing?
    - https://convertkit.com/ seems popular
    - https://buttondown.email/ looks promising, maybe best? Do they expect a lot of subscribers? Maybe start with $ 9 / mo plan?
    - https://www.mailerlite.com also looks neat, seems like best option so far
    - Zeffy also seems to have some email features... see "Donor Management" stuff: https://www.zeffy.com/home/donor-management

### Remaining pages

- [ ] Get a rough implementation of all pages done
  - Goal is to have content on the page. Doesn't need to be editable. Doesn't need to look good. That can come later.
  - Already mostly done this, kind of "tracking" it in Figma

- [ ] Get a polished design done for each page
  - Stay in Figma for now. You'll have wireframed everything out, screengrab the wireframes and reference them.
  - Current goal is parity with the existing website. Can probably avoid review cycles by sticking to that.

- [ ] Plan out design and development tasks for remaining pages
  - aka rough wire-framing, searching for potentially sharp edges
  - Component-by-component breakdown might be nice
  - Dropping placeholder components into the page might make sense as well. Could use this as a way to test the basic functionality... does it feel right? If so, then layer nicer design, then do final implementation. If not, iterate on the stubbed-in implementation till it feels right.

- [ ] Continue work on page implementation
  - Once first cut is shared, may as well get ahead of it. Start with what you feel most sure of.

#### Blog post changes needed

- [x] Model support for "cover image"
- [x] Model support for "author" (exists on current blog, even if unused)
  - For now, this can be text field I think... later could have author collection
- [x] Render "author"
- [x] Render "cover image"
- [x] Model support for "category"
- [x] Render "category" (link to category pages?)
- [x] Model support for "date"
- [x] Render "date"

### Blog post migration

Goal is to _download_ content, not to get the whole blog working.

#### Blog post download process

- Visit the original URL
- Copy contents, paste into Obsidian to convert to Markdown
- Save markdown file to Desktop, with URL "slug" as file name
- Drag and drop to download all images
- Take a screenshot of the page, save as well
- Place the markdown and images in a new folder in `blog-raw-data`, name the folder after the URL "slug"

#### Blog post download list

Download status: 33 / 33

- [x] <https://www.pollinatorpathwaysproject.com/post/program-overview-central-london-pathway>
- [x] <https://www.pollinatorpathwaysproject.com/post/earth-day-is-everyday>
- [x] <https://www.pollinatorpathwaysproject.com/post/pollinators-to-expect-in-your-garden-this-spring>
- [x] <https://www.pollinatorpathwaysproject.com/post/spring-is-near-time-to-start-planning-your-garden>
- [x] <https://www.pollinatorpathwaysproject.com/post/why-pollinators-are-the-best-innovators>

- [x] <https://www.pollinatorpathwaysproject.com/post/looking-out-for-the-little-guy>
- [x] <https://www.pollinatorpathwaysproject.com/post/pollinator-pathways-garden-at-western-fair-and-museum-london>
- [x] <https://www.pollinatorpathwaysproject.com/post/new-year-new-environmental-actions>
- [x] <https://www.pollinatorpathwaysproject.com/post/sowing-your-seeds-in-the-winter>
- [x] <https://www.pollinatorpathwaysproject.com/post/getting-to-know-pollinators>

- [x] <https://www.pollinatorpathwaysproject.com/post/pollinator-in-a-box-an-environmentally-friendly-holiday-gift>
- [x] <https://www.pollinatorpathwaysproject.com/post/winterizing-your-garden>
- [x] <https://www.pollinatorpathwaysproject.com/post/pollinators-from-around-the-world-the-himalayan-cliff-honey-bee>
- [x] <https://www.pollinatorpathwaysproject.com/post/eco-mimicry-an-alternative-to-blandscaping>
- [x] <https://www.pollinatorpathwaysproject.com/post/pollination-with-purpose>

- [x] <https://www.pollinatorpathwaysproject.com/post/pollinator-pathways-take-ecosystem-scientist-down-a-new-path>
- [x] <https://www.pollinatorpathwaysproject.com/post/growing-a-community-withthe-pollinator-pathways-project>
- [x] <https://www.pollinatorpathwaysproject.com/post/london-environmental-network-and-pollinator-pathways-project-are-launching-a-spring-giveaway>
- [x] <https://www.pollinatorpathwaysproject.com/post/six-bees-to-look-out-for-this-spring-summer>
- [x] <https://www.pollinatorpathwaysproject.com/post/dutch-ingenuity-leads-the-way-saving-pollinators-in-urban-environments>

- [x] <https://www.pollinatorpathwaysproject.com/post/now-hiring-pollinator-pathways-communications-coordinator>
- [x] <https://www.pollinatorpathwaysproject.com/post/monarch-butterflies-in-the-city>
- [x] <https://www.pollinatorpathwaysproject.com/post/london-ont-group-paving-pollinator-pathways-in-honour-of-world-bee-day>
- [x] <https://www.pollinatorpathwaysproject.com/post/8-pollinator-favourite-spring-blooms>
- [x] <https://www.pollinatorpathwaysproject.com/post/15-in-season-holiday-recipes>

- [x] <https://www.pollinatorpathwaysproject.com/post/boycott-plastic-with-these-bees-knees-food-wraps>
- [x] <https://www.pollinatorpathwaysproject.com/post/bee-kind-helping-urban-pollinators>
- [x] <https://www.pollinatorpathwaysproject.com/post/what-is-a-pollinator-species-how-does-pollination-work>
- [x] <https://www.pollinatorpathwaysproject.com/post/bee-hotels-back-to-nature>
- [x] <https://www.pollinatorpathwaysproject.com/post/the-importance-of-water-in-a-pollinator-garden>

- [x] <https://www.pollinatorpathwaysproject.com/post/how-to-start-a-pollinator-garden>
- [x] <https://www.pollinatorpathwaysproject.com/post/so-what-are-pollinator-pathways-anyway>
- [x] <https://www.pollinatorpathwaysproject.com/post/community-engaged-learning-project>

#### Blog post migration process

- [ ] Open existing old blog post to compare as you go
- [ ] For images, create new folder in `public/uploads/Blog Posts`, and move all images into the folder
- [ ] Fix all image links within the markdown, to point to the images in the newly created folder
- [ ] Add YAML front-matter to the markdown. Match the structure of an existing blog post
- [ ] Skim through the markdown content and fix any other issues
- [ ] Run the project locally in order to test the page's appearance. 
- [ ] Compare the locally running post to the existing old blog post, to double-check everything looks right

#### Blog post migration list

```yaml
---
title: '<TITLE>'
coverImage: /uploads/Blog Posts/<SLUG>/<COVER-IMAGE>
date: <YYYYMMDD>T04:00:00.000Z
author: <AUTHOR>
category: news
---
```

Download status: 20 / 33

- [x] <https://www.pollinatorpathwaysproject.com/post/program-overview-central-london-pathway>
- [x] <https://www.pollinatorpathwaysproject.com/post/earth-day-is-everyday>
- [x] <https://www.pollinatorpathwaysproject.com/post/pollinators-to-expect-in-your-garden-this-spring>
- [x] <https://www.pollinatorpathwaysproject.com/post/spring-is-near-time-to-start-planning-your-garden>
- [x] <https://www.pollinatorpathwaysproject.com/post/why-pollinators-are-the-best-innovators>

- [x] <https://www.pollinatorpathwaysproject.com/post/looking-out-for-the-little-guy>
- [x] <https://www.pollinatorpathwaysproject.com/post/pollinator-pathways-garden-at-western-fair-and-museum-london>
- [x] <https://www.pollinatorpathwaysproject.com/post/new-year-new-environmental-actions>
- [x] <https://www.pollinatorpathwaysproject.com/post/sowing-your-seeds-in-the-winter>
- [x] <https://www.pollinatorpathwaysproject.com/post/getting-to-know-pollinators>

- [x] <https://www.pollinatorpathwaysproject.com/post/pollinator-in-a-box-an-environmentally-friendly-holiday-gift>
- [x] <https://www.pollinatorpathwaysproject.com/post/winterizing-your-garden>
- [x] <https://www.pollinatorpathwaysproject.com/post/pollinators-from-around-the-world-the-himalayan-cliff-honey-bee>
- [x] <https://www.pollinatorpathwaysproject.com/post/eco-mimicry-an-alternative-to-blandscaping>
- [x] <https://www.pollinatorpathwaysproject.com/post/pollination-with-purpose>

- [x] <https://www.pollinatorpathwaysproject.com/post/pollinator-pathways-take-ecosystem-scientist-down-a-new-path>
- [x] <https://www.pollinatorpathwaysproject.com/post/growing-a-community-withthe-pollinator-pathways-project>
- [x] <https://www.pollinatorpathwaysproject.com/post/london-environmental-network-and-pollinator-pathways-project-are-launching-a-spring-giveaway>
- [x] <https://www.pollinatorpathwaysproject.com/post/six-bees-to-look-out-for-this-spring-summer>
- [x] <https://www.pollinatorpathwaysproject.com/post/dutch-ingenuity-leads-the-way-saving-pollinators-in-urban-environments>

- [ ] <https://www.pollinatorpathwaysproject.com/post/now-hiring-pollinator-pathways-communications-coordinator>
- [ ] <https://www.pollinatorpathwaysproject.com/post/monarch-butterflies-in-the-city>
- [ ] <https://www.pollinatorpathwaysproject.com/post/london-ont-group-paving-pollinator-pathways-in-honour-of-world-bee-day>
- [ ] <https://www.pollinatorpathwaysproject.com/post/8-pollinator-favourite-spring-blooms>
- [ ] <https://www.pollinatorpathwaysproject.com/post/15-in-season-holiday-recipes>

- [ ] <https://www.pollinatorpathwaysproject.com/post/boycott-plastic-with-these-bees-knees-food-wraps>
- [ ] <https://www.pollinatorpathwaysproject.com/post/bee-kind-helping-urban-pollinators>
- [ ] <https://www.pollinatorpathwaysproject.com/post/what-is-a-pollinator-species-how-does-pollination-work>
- [ ] <https://www.pollinatorpathwaysproject.com/post/bee-hotels-back-to-nature>
- [ ] <https://www.pollinatorpathwaysproject.com/post/the-importance-of-water-in-a-pollinator-garden>

- [ ] <https://www.pollinatorpathwaysproject.com/post/how-to-start-a-pollinator-garden>
- [ ] <https://www.pollinatorpathwaysproject.com/post/so-what-are-pollinator-pathways-anyway>
- [ ] <https://www.pollinatorpathwaysproject.com/post/community-engaged-learning-project>

## Done

### General

- [x] Fix `/admin` redirect loop
- [x] Update `README.md`, with notes on deployment strategy
- [x] Add custom domain
  - I've purchased `pollinatorpathwaysproject.ca` on NameCheap
  - Going forward, could redirect `pollinatorpathwaysproject.com` to `.ca`
  - Alternately, if it's an option, could transfer `pollinatorpathwaysproject.com` to some custom P3 account that I could make in NameCheap. Would also transfer `pollinatorpathwaysproject.ca` to that account.
- [x] Ensure custom domain actually works
  - `pollinatorpathwaysproject.ca` should function as expected
- [x] Ensure non-editable build works as static pages, editable is editable
  - Can test this locally
  - Or, should be able to go to `pollinatorpathwaysproject.ca/admin`, and be redirected

### Connect page

- [x] Build out functional contact form
  - Using [Formik](https://formik.org/docs/overview), familiar and I know it works
  - Next step is to get a submission to val.town working, should send the contact form as an email to myself. Can later update this to be a pollinator pathways email... but that will come WAY later.

### Navigation editing

- [x] Test out wiring up the navigation to be editable
