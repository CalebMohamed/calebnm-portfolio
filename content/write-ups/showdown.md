+++
date = 2025-11-16
draft = false
title = "seallion vs manbusiness // write-up"
[params]
  colour = "game"
  pageKey = "src/light.js"
+++
This is a tiny game that I made when learning Java
in a year 12 computer science class. It was made with
[greenfoot][1], an educational game-engine for teaching
people how to program (so no export T-T). It was a very
simple game with a disproportionately large personality -
I had way too much fun making it. Ok ok - lets get down to business...

![title screen, seal stands opposing evil looking business man](/images/games/showdown/title-screen.jpg)

SealLion is a hand-warmer merchant in the cold arctic
ocean. Despite his lack of competition, he is an honest... seal?
Regardless, he's been supplying hand-warmers to the local
residents for fair prices since at least the 2000s or something.
There's a problem though: a new competitor is in town. The 
infamous ManBusiness is here to undercut SealLion, establish 
a monopoly, and eventually extort the local populus in his 
insatiable fiscal conquest. How else are they supposed to 
settle this if not by firing energy balls at each other in 
the deep dark ocean.

---

SealLion moves around the screen with WASD and incredibly
slippery movement, having difficulty decelerating probably
because he's underwater. (I just wanted an excuse to make
a more complicated movement system and use acceleration)

![seal (left) faces off against business man (right) under the ocean](/images/games/showdown/start.jpg)

ManBusiness takes the initiative to fire homing energy
balls at SealLion in vollies of 3. SealLion, however, uses 
the power of local businesses when pressing SPACE to form a
reflective shield around himself. If timed well the 
projectile will reflect off of SealLion and home towards 
ManBusiness.

![seal glows blue and deflects one red projectile back towards business man](/images/games/showdown/block.jpg)

SealLion starts with 3 handwarmers, and loses one each
time he is hit with an energy ball. He can pick up loose
hand-warmers which spawn randomly to recover up to a 
maximum of 3 during the fight.

![seal beside business man with a handwarmer colinear with them to the top right](/images/games/showdown/hand-warmer.jpg)

SealLion needs to deflect 10 projectiles back to ManBusiness
to win the game. Unfortunately, there is no win or lose state,
the game just freezes when either party runs out of hand-warmers.

Whelp. Thanks for listening to my TED talk.
