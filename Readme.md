# Storybook using ViteJS builder: Issue when importing same style file in two stories

**TL;DR**: When building the static storybook (`npm run build-storybook`), if two stories import the same style file, the two stories will be corrupted.

## The Issue

In a project using web component, there was two components that used the exact same style. Thus we imported the same style file as a string inside the two components. When tested the component inside the development storybook, it worked, all was fine.

However, when deploying the storybook, using the static build, the stories of the two component did not work anymore.

I discovered that using two different style files (with same content) it repaired the stories ins the production build.

## Expected behavior

I would like to be able to import same style file and have a production storybook that works just fine

## This repo

With this repository, I created the minimal code it need to make the bug appears. Originally, I uses SASS style files in my project, but the problem occurs with CSS. No need to use Web Component or fancy features.

The [`src`](./src/) directory contains 2 sub-directories:
+ [`sameFile`](./src/sameFile/) where there is only one `style.css` file and the two stories import it
+ [`differentFile`](./src/differentFile/) where there are two identical style file. Each story use one of them.

## What I discovered

Checking inside the `storybook-static/assets` directory to check the files and the content of the files, I discovered that
+ for the *diff* stories (two style file), the minified files contain the style as a string inside them.
+ for the *same* stories (one style file),
  + a minified style file exists,
  + the minified version of the stories try to import a js file named after the style file (something like `style-645d583c.js`). This particular file does not exist, but ...
  + There is a sourcemap file name `style-645d583c.js.map`.

## My Env

+ Node: 18.17.1
+ NPM: 9.6.7
+ Storybook: 7.3.2