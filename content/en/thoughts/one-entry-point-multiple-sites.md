---
title: "One entry point for multiple sites"
date: "2024-02-20T14:21:19Z"
draft: true
tags: ["Vue"]
slug: "one-entry-point-multiple-sites"
navigation: false
competence: "Pro"
---

We have an application that represents a microsite, and when you load it, you see a login page. Our clients provide it to their users. After a user logs in, documents related to both the client they belong to and the permissions assigned by our client are loaded.

<!--more-->

Everything was fine until one day clients started requesting the microsite to work on their own domain. To carry their brand and add "rich" content to the otherwise "plain" login screen.

And then the microsite stopped being micro.
