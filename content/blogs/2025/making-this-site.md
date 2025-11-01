+++
date = 2025-08-28
draft = false
title = "making this site"
[params]
    pageKey = 'src/light.js'
    colour = "comp"
+++
## how i got here
I've wanted a personal website for a long time. I was first introduced to html and css in an ice-cool computer room at secondary
school. The teacher outlined the basic elements and remarked on the tediousness of css rules as they sent us off on 
our task. Suffice it to say I wasn't quite hooked. 

"Web stuff" remained a fantastical continent of Computer Science which wasn't quite for me. But somewhere along the way, I 
started to oggle nice looking websites. I begun to really like the idea of some personal place on this vast internet to share 
something of myself. The details of html and css begun to look less like tedium and more like control. As with too many things
in my life, social media algorithms played a part and I begun to watch youtube videos on website effects and design.

One summer I was feeling especially inspired after watching a [hyperplexed video][1] on a stunning website by [Camille Mormal][2].
The visuals were elegant, expressive, tactile. Somehow Camille had left a tiny mark on the canvas of the
internet and this was a window into her world. I know that this website is not nearly as impressive, but I still hope to make
it a humble home for myself (and maybe over time I'll build it out into a mansion). Since then I've loved looking at portfolio
websites, poking around in dev tools, and had a short stint around some [web rings][3].

I've always liked the idea of doing something a bit more DIY so I shunned the use of a website builder or super complex
framework, and followed a tutorial on making a portfolio website with Vite. I then got quite excited about the idea of self
hosting and after quite a delay set up a raspberry pi to run it on.

## what did i do
As mentioned above the website is html, css and a little javascript (for the nice title letter hops) compiled with vite.
I then dived into far too many worlds at once and now have a little knowledge of each:
- linux for the pi operating system (ubuntu server os)
- docker to run the server in a modular and extensible way
- nginx and certbot for serving the http and https requests
- hardening with ufw, fail2ban, and some careful configs (not perfect but hopefully enough to not make my lovely pi a sitting duck)
- portforwarding and a dynamic dns server duckdns for connecting to the internet
- i also explored the amazing world of ssh (it still feels magical everytime I use it), hardening that too with authorized keys and using a git remote to update the website distribution

To summarise my 'tech stack' (way too pretentious for how I just half understand it all):
- ubuntu server os running on a raspberry pi 5 4gb ram
- docker for containerization
- nginx for serving http and https requests (always running)
- certbot for certificates running in its own container (spun up twice a day)
- duckdns for effectively static external ip (and cron script updating duckdns every 5 minutes)

In the future I'd like to add a blogging system, and a dynamic system to serve my daily poems from a databse. When I do those
I'll link the writeups [here][4] and [here][5], respectively.

[1]: https://www.youtube.com/watch?v=PkADl0HubMY
[2]: https://camillemormal.com/about
[3]: https://en.wikipedia.org/wiki/Webring
[4]: /blogs/2025/blogging-is-here/
[5]: /blogs/2025/poeming-is-here/
