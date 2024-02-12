---
title: "Hello World"
date: "2024-02-06T12:01:53.293Z"
draft: false
tags: ["Thought"]
# thumbnail: "/images/thoughtful/articles/hello-from-unsplash.webp"
slug: "hello-world"
navigation: false
competence: None
---

A long time ago, I stopped maintaining a blog. Currently, I write various articles for repositories on [GitHub](https://github.com/howbizarre), but they are not intended for the end users. They are more for people who quickly pass by for information, and I don't put much effort into them because they are targeted towards tech-savvy individuals, for whom I write.

<!--more-->

I am starting this blog to share my experience with a wonderful stack of technologies that can achieve anything, well... almost anything. You may have noticed the logos I've attached at the top of this site. Those will be the main topics of the blog. It seems to me that the community around these technologies in **Bulgaria** is small, and I hope to contribute to its development over time.

## Vue

If we exclude **jQuery** - Somewhere around 2012, I started using "reactive" JavaScript libraries. One of the first ones was [Knockout](https://knockoutjs.com/). Great one. Everyone starting with the Observable model, and in general, everyone starting with "reactive" JavaScript libraries should go through it. Then many others followed - including **Angular** and **React**. I even briefly wrote my own library based on jQuery and **Mustache**. Eventually, I came across **Vue**.

Back in the day, I used to write a lot of **CSS** and used **ASP.NET** and **Razor** for front-end development. I also used various CSS frameworks like **960.gs**, **Bootstrap**, **Foundation**, and others. Vue naturally entered my daily routine with its component-based approach, resembling the file organization model I was familiar with.

When you add **Vue Router** and **Pinia** (formerly Vuex) to the mix, the image becomes even better. **Vue + Vue Router + Pinia = MVC** in front-end. I will explain in more detail how I build MVC (Model View Controller) with them.

## Nuxt

**Nuxt** is based on Vue. In addition to the many conveniences it provides, such as automatic imports, automatic routing, plugins, modules, etc. - it also adds a back-end server (**Nitro**) and allows you to work as one system, without the need to create a separate server application or have extensive knowledge of Node & Express. This is the tool that removed .NET & C# from my field of view. With Nitro, you can build server middleware, API endpoints, connect to databases - everything you need from the back-end.

## TailwindCSS

After the Just-in-Time Mode, **TailwindCSS** completely replaced Bootstrap and more. I no longer use massive CSS libraries with included UI components. I separate them. Even the component libraries are built with TailwindCSS. Lately, I have relied more on **Nuxt UI**, mainly to support the ecosystem.

## TypeScript

**JavaScript** provides immense freedom for writing, declaring, invoking, binding, parallelism, asynchrony, and more. It has well-known patterns for various aspects of programming models. You can use it for both back-end and front-end development. There are many large organizations and a huge community that contribute to its development.

But this freedom also has its drawbacks. There is no compiler to protect you. There is no unified debugging model. There is no correct way to generate the final/production code. **TypeScript** helps alleviate some of the problems of JavaScript. It is not a panacea and sometimes it is not easy to configure, especially when working with shared data models between front-end and back-end, but it provides a much more structured approach to the development, maintenance, and delivery of code.

## The others

**Vite**, **Node**, **Express**, **MongoDB**, **NPM**, **Firebase** complement my current technology stack.

Vite is my personal choice for development. And not just for Vue projects. Sometimes I use **Parcel**, but for specific solutions.

I also work with other "metro" technologies like **Nest**, **ElectronJS** & **React Native**, **bun**, etc., but most of them are for small or personal projects.
