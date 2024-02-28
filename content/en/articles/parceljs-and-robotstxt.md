---
title: "Parcel & Robots"
date: "2024-02-28T12:35:23.000Z"
draft: false
tags: ["parcel"]
slug: "parceljs-and-robotstxt"
navigation: false
competence: "geek"
---

There are different ways to indicate to **ParcelJS** which files are static and should not go through the build transformation, but if there are only a few, you can activate the transformers plugin and then include them directly in the build script in the `package.json` file.

<!--more-->

```json
// package.json
{
  "scripts": {
    "build": "parcel build src/index.html src/robots.txt src/favicon.ico"
  }
}
```

This way, `robots.txt` and `favicon.ico` will not be processed by [ParcelJS](https://parceljs.org/) and will be directly transferred to the build directory.

## Transformers plugin

To make the above build script work properly, you need to add the following code to the `.parcelrc` file:

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{txt,ico}": ["@parcel/transformer-raw"]
  }
}
```

*ParcelJS* will not only not add hashes to the file names, but the linked objects in the processed files will not be changed.