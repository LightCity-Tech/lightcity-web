# Contribution Guidelines

## Introduction

Good day, Brethren.

This is file contains the guidelines for contributing to this project, and directives for using the components.

The idea is to have completed the basic building in 2-3 weeks and have everything ready by month's end. After which we would begin testing and seek to add the admin dashboard.

We would not have daily standups, instead we would be expected to drop updates on our progress every three days on our Whatsapp group and if we have any blocker or bug, we can always share this as soon as we can.

## Technologies

For this project, we would be making use of Next JS + Typescript along with Tailwind CSS for styling.

Check out the links below to get familiar with them;

- [Next Documentation](https://nextjs.org/docs)
- [Typescript](https://react.dev/learn/typescript)
- [Tailwind CSS Official Docs](https://tailwindcss.com/docs/installation)
- [Tailwind Cheatsheet](https://tailwindcomponents.com/cheatsheet/)

## Components

### Typography Component
This component is for reusing the texts across the project. The ```<Typography></Typography>``` tag is used for this. This tag takes in certain props and a child element; the child element is of type `React.ReactNode` and so can be a string too.

Other props it takes in are;
1. color: to assign the colour for the text
2. align: to assign text-alignment
3. fontWeight: to assign a font weight
4. variant: to assign the HTML element of the text
5. font: to assign the font-family of the text
6. customClassName: This allows you to pass any extra class name into the text.

And for all of them, you have to pass in particular strings for the typography tag to be properly rendered.
See the [typography types](./src/ui/elements/typography/index.types.ts) for the values to pass in to the props.

### Button Component
This componen is for reusing the button across the project. The ```<Button/>``` tag is used for this. This tag takes in certain props. These props are;
1. color: This sets what the color of the text.
2. variant: This sets the type of button.
3. leftIcon or rightIcon: This sets where to position the icon, if any.
4. label: This sets what text the button displays
5. customClassName: This allows you to pass any extra class name into the button.

### Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. After opening on the local host, you can navigate to [http://localhost:3000/components](http://localhost:3000/components) to view the use cases of the components.

#### Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Pushing to GitHub
We would all be working on different parts of the website and on different branches. 

When you are done working on your deliverables to make a PR, please take the following steps;
1. Stage your commits by using the `git add` command.
2. After staging, you commit them with the `git commit` command.
3. After committinng, switch to the `develop` branch and pull any chnages made to it via the `git pull` command and accept any incoming change.
4. After that step, `git checkout` to your own branch that you were previously working on and perform a `git rebase develop`.
5. After this, you can push your branch to GitHub and make a PR.


N.B. You can always reach out to anyone, if you have any issues regarding any of these steps or you need any guidance.