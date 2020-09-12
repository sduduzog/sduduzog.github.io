---
published: true
title: Introducing purgitory. My first npm package :)
date: 2020-09-12T17:38:49.758Z
description: An npm tool to purge local branches that have been merged and
  deleted to the main branch in remote
coverImage: /img/2020-09-12-19_37_23-purgitory-npm.png
---
# Introducing purgitory. My first npm package :)

So purgitory is an npm tool to An npm tool to purge local branches that have been merged and deleted to the main branch in remote.

Working in a fast paced project and/or projects basically means I'll be creating, checking out and reviewing around a dozen of git branches per week, and from this, I found myself with a bunch of stale branches locally to which most have been merged into master as the work has been deployed.

I needed something to clean my local repositories, many people do. So while I was pair programming with my teammate this past week he asked me "Hey man, what do you use to remove merged branches locally?" and my answer was "there's a way, google search 'git purge local merged branches' and you'll definitely find some bash script on stackoverflow" not a good answer, I know. But then that's what I always do. I surf the internet until I forget what I was looking for in the first place. Now because there's no easy way to do this, the number of branches locally kept on growing. Clearly we need a solution for this.... and it hit me

"Fine, I'll do it myself" - This phrase, every time I fail to find a tool for something, it hits me, and then another side project is born

![Gif of thanos taking the gauntlet and with caption "I'll do it myself"](/img/tenor.gif "Gif of thanos taking the gauntlet and with caption \"I'll do it myself\"")

So immediately after work on Friday. I took a nap, or at least tried to, but I couldn't because I was trying to figure out *"how do I make this super simple?"*, *"how do I make it easy for myself to accomplish this?"* and *"what would I consider a complete project"* and while asking myself those questions I jotted a couple of notes down and went to work.

This how how [purgitory](https://www.npmjs.com/package/purgitory) was born.

The name is like a combination of "purge" and "git". I asked my colleague "what do you think of this name?" and he was like "I just want to use the thing, the name sounds cool" and well.... so if the name doesn't make sense, that's because the focus was on getting this thing to work.

I had a choice to write this in either c# or javascript, but because of the npm ecosystem, it was easier to lean more towards javascript just so that the tool is easily accessible to a wider audience easier and there are packages for interactive command line tools I can use from npm to make this easier for me.

This was written 24hrs after the first version "0.0.1" literally had a '[console.log("foo")](https://github.com/sduduzog/purgitory/blob/2790ee88c303efc0ce90b2138dbd085a144f76b2/bin/index.js)' which didn't work obviously as I learned. But that was the whole point. I heard a quote today from Stefan Mischook "You wanna learn how to fight, you fight" which I resonated with greatly as it's been how I've probably learned everything I know today, or most of it. By diving head first into a challenge.