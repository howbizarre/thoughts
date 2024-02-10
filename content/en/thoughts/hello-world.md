---
title: "Hello World"
date: "2024-02-06T12:01:53.293Z"
draft: false
tags: ["Thought"]
thumbnail: "/images/thoughtful/articles/hello-from-unsplash.webp"
slug: "hello-world"
navigation: false
---

A long time ago, I stopped maintaining a blog. Currently, I write various articles for repositories on [GitHub](https://github.com/howbizarre), but they are not intended for the end users. They are more for people who quickly pass by for information, and I don't put much effort into them because they are targeted towards tech-savvy individuals, for whom I write.

<!--more-->

I am starting this blog to share my experience with a wonderful stack of technologies that can achieve anything, well... almost anything. You may have noticed the logos I've attached at the top of this site. Those will be the main topics of the blog. It seems to me that the community around these technologies in **Bulgaria** is small, and I hope to contribute to its development over time.

## Vue

If we exclude **jQuery** - Somewhere around 2012, I started using "reactive" JavaScript libraries. One of the first ones was [Knockout](https://knockoutjs.com/). Great one. Everyone starting with the Observable model, and in general, everyone starting with "reactive" JavaScript libraries should go through it. Then many others followed - including **Angular** and **React**. I even briefly wrote my own library based on jQuery and **Mustache**. Eventually, I came across **Vue**.

Back in the day, I used to write a lot of **CSS** and used **ASP.NET** and **Razor** for front-end development. I also used various CSS frameworks like **960.gs**, **Bootstrap**, **Foundation**, and others. Vue naturally entered my daily routine with its component-based approach, resembling the file organization model I was familiar with. In other words, **Vue + Vue Router + Pinia (previously Vuex) = MVC** in the front-end. I will explain in more detail how I build MVC (Model View Controller) with them.

Well, I mentioned Vue Router and Pinia. When I talk about Vue, it means I'm also talking about them. They may have separate names, but for me, they are inseparable technologies.

## Nuxt

**Nuxt** is the natural evolution of Vue. It is the tool that removed .NET & C# from my field of view.

In **PHP**, it is somewhat natural and very easy to create web applications with both front-end and back-end using a single environment, language, and development system. In .NET, it is not as simple and requires much more knowledge and effort. You have Razor & Blazor (and before them ASP.NET forms) for the front-end and separate .NET & C# for building the back-end. The situation is similar with Node and JavaScript. Knowledge and significant effort are required to create web content with both front-end and back-end. Vue provides a solution for the front-end, and Nuxt with Nitro adds the back-end as well.

## TailwindCSS

After the Just-in-Time Mode, **TailwindCSS** completely replaced Bootstrap and more. I no longer use massive CSS libraries with included UI components. I separate them. Even the component libraries are built with TailwindCSS. Lately, I have relied more on **Nuxt UI**, mainly to support the ecosystem.

## TypeScript

**JavaScript** provides immense freedom for writing, declaring, invoking, binding, parallelism, asynchrony, and more. It has well-known patterns for various aspects of programming models. You can use it for both back-end and front-end development. There are many large organizations and a huge community that contribute to its development.

But this freedom also has its drawbacks. There is no compiler to protect you. There is no unified debugging model. There is no correct way to write production code. ***TypeScript*** softens many of JavaScript's problems. It is not a panacea. It is not easy to configure, but it provides a much more structured approach to the development and maintenance of code.

## The others

**Vite**, **Node**, **Express**, **MongoDB**, **Firebase**, and a few more you will encounter around.

Vite is my personal choice for development. And not just for Vue projects. Sometimes I use **Parcel**, but for specific solutions.

Firebase is my BaaS (Backend as a Service). Authentication, authorization, document driven data (I don't like SQL, but I love JSON), hosting, etc.
