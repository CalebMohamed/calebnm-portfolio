+++
date = '2025-10-07'
draft = false
title = 'when things go dark'
[params]
    pageKey = 'src/light.js'
    colour = "blog"
+++
My pi might have been hacked.

But I'm elsewhere and in the dark.

Right after making my move back to the beautiful Oxford, I tried
to access this website, and was greeted with a forboding:
> Access to this site has been blocked by the Protective DNS Service.
> This site may be associated with malicious activity or malware.

D: I...didn't...think I was that malicious?

Thankfully, upon further inspection, it looks like my site was
just flagged as a "Newly Seen Domain", and so has been blocked.
I think I only discovered it in Oxford because it sometimes takes these
categorisation lists a few weeks to update, and Oxford may have a
stricter policy than my home ISP.

It's really made me think though. About my relationship with the
internet and putting myself out there in its current state. The
internet really is very much more *outside* than I'm often aware.
I mean in many senses it is sterile without all the creepy crawlies,
and confined in little boxes in our houses. 

But there are some aspects where you are letting the outside world in.
There is a real need for security because of hostile strangers and 
runaway scripts roaming the landscape. Ultimately, its a give and take:
despite the vulnerability, I hope to reach real people with my words 
\- to reach people *outside*.

This is quite a basic point that I've known for a while, but it's
especially hit home with the physical distance I have to my webserver.
It makes placing my website on the internet feel more like gaining
distance with my work, in the same way other artists move away from
their work when it hangs in a gallery or someone else's living room.

Even though it's likely a false alarm and my site will be
in the clear after a period of being nice and friendly, to be safe,
my sister kindly unplugged my pi at home. I'll sort it out in a couple
months when I can investigate offline. 

For now I'm in the dark.

---

EDIT: 14.10.25

After becoming quite certain that I was just flagged for being new,
I asked my Mum to turn my pi on again. I ssh'd in, checked logs, 
users and crons and boom! we're so back.
