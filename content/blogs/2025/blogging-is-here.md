+++
date = "2025-09-30"
draft = false
title = "blogging is here"
[params]
    pageKey = 'src/light.js'
    type = "comp"
+++
After a lot of revisions and tweaks my blogging system is here.

It's a bit of a strange combo, but hear me out: I'm using a content-driven static site generator called Hugo to template together each html page, and a js and css bundler typically used for web apps called Vite. I use the template system and the Vite manifest file to hook up the styling and scripts correctly.

I got into this strange situation because I started with a purely Vite site, and then realised that it wouldn't be able to handle my blogs that easily. So I looked around and found Hugo. But alas, Vite offered me more control and familiarity for styling and functionality (like the hero section on the home page). What is a man to do?

I had this liminal period for a few days where I thought I'd keep all blogs and Hugo shennanigans separate and just strap it on like some wordy symbiote. It worked, but I was unsatisfied.

After seeing the power and modularity of templates I wanted the headers and footers - and everything that repeated, really - to be in the Hugo system. So I did just that: migrating all handcrafted pages into the template system. Then I slimmed down the Vite so it just bundled together the assets for three different kinds of pages: light, main, and home. Home being separate because of the landing page functionality, and light being a stripped down bundle for the blogs.

And voila, now I only have to edit one place and the header updates everywhere, there's way less copy pasting - it's a programmers paradise.

It also very happily made me a little more future proof: most of my content is markdown and so will travel with me from platform to platform, and both vite and go are programs that will run for as long as my computer can execute javascript and go.

It's also inspired me to stick with markdown for my poems instead of a database. I was thinking of having something dynamic with a database for the poems, but I think that keeping it all markdown and using hugo should keep me lower tech and with less dependencies.

Anyways, thanks for reading this rather niche yap about my setup, I'm off to continue formatting and tagging my 1000+ poems.

@\_@
