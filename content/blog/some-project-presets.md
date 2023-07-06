---
title: These are my favourite presets when working on any project
---

There are some tweaks that probably add nothing much but pleasure in working with particular projects.

<!-- more -->

# These are my favourite presets when working on any project

## In a JavaScript project, every dependency should be a devDependency...until it is not.

By default, the command `npm install package`{lang=bash} will install the package as a production dependency. There's nothing 'wrong' with this, just that once the project grows and you've been also collecting some tools, the meaning of production dependencies and development dependencies is lost.

I'm sure there's plenty of projects out there with `@types/*`{lang=bash} under production dependencies because someone did a quick npm install without passing the `--save-dev` flag.

As a quick reminder, production dependencies are dependencies that are required at runtime. When you app runs, it need node_modules with those dependencies installed. Dev dependencies are dependencies that don't go beyond the build step. Dependencies that will only live in your dev machine or the CI. So all of us that are writing bundled apps, there's absolutely no reason for us to install 'production' dependencies.

Now that's out the way, how do we do this the easy way? I mean its annoying having to set `--save-dev` all the time when you install something, crap I sometimes forget. Turns out there's an easy way of setting these defaults. Just create an .npmrc file in your project, or in your home directory if you want these options for all your projects

```bash
# .npmrc
save-dev = true
```
