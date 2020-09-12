---
published: true
title: Introducing purgitory. My first npm package :)
date: 2020-09-12T17:38:49.758Z
description: An npm tool to purge local branches that have been merged and
  deleted to the main branch in remote
coverImage: /img/2020-09-12-19_37_23-purgitory-npm.png
---
# Introducing purgitory. My first npm package :)

#### \

So purgitory is an npm tool to An npm tool to purge local branches that have been merged and deleted to the main branch in remote.

Working in a fast paced project and/or projects basically means I'll be creating, checking out and reviewing around a dozen of git branches per week, and from this, I found myself with a bunch of stale branches locally to which most have been merged into master as the work has been deployed.

I needed something to clean my local repositories, many people do. So while I was pair programming with my teammate this past Friday he asked me "Hey man, what do you use to remove merged branches locally?" and my answer was "there's a way, google search 'git purge local merged branches' and you'll definitelly find some bash script on stackoverflow" not a good answer, I know. But then that's what I always do. I surf the internet until I forget what I was looking for in the first place. Now because there's no easy way to do this, the number of branches locally kept on growing. Clearly we need a solution for this.... and it hit me

"Fine, I'll do it myself" - This phrase, every time I fail to find a tool for something, it hits me, and then another side project is born

![Gif of thanos taking the gauntlet and with caption "I'll do it myself"](/img/tenor.gif "Gif of thanos taking the gauntlet and with caption \"I'll do it myself\"")