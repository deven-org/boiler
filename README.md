# B01LER

![Boiler_Welcome](https://github.com/deven-org/B01LER-Kitchen/assets/122102805/f5aa5c3a-9d5b-4b98-a9df-29dd1b35b1ea)

## Content

- [B01LER](#b01ler)
  - [Content](#content)
- [Introduction](#introduction)
- [Quick Start](#quick-start)
  - [Requirements](#requirements)
  - [How to start](#how-to-start)
  - [How to test](#how-to-test)
- [License](#license)
- [How to continue](#how-to-continue)

## Introduction
B01LER is a fully customisable design system that enables you to easily create cohesive and consistent digital products 
across multiple platforms and brands.

B01LER provides pre-built components that exist in design in the form of a [component library in Figma](https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?type=design&node-id=701%3A1782&mode=design&t=7WxcpbbiNnZGlAF9-1), 
as well as in code in a repository (the one you have opened right now), which is also [displayed in the web using 
Storybook](https://b01ler.onrender.com/). Both the components in design and in code are connected via the token system.

Utilizing design tokens, which represent the visual properties of a design system, such as typography, color and spacing, 
B01LER is simultaneously consistent and flexible. By changing the tokens, you have the power to change the appearance of 
the whole design system, including all the components and all the digital products build with it. In design and in code.

Overall, B01LER is a powerful tool that helps you work smarter, not harder. By streamlining the design and development 
processes B01LER empowers you to create better products faster.

### Benefits of B01LER:
1. Increased efficiency in building design systems on brand, because semantic structure and architecture are pre-built
2. Increased efficiency, through automated processes. Documentation, DEV Handover, and more
3. Increased effectivity, because the time saved on building all the components can be used to build features right away
4. Increased acceptance of DS because components work right from the beginning of project phase
5. Immense cost savings, because the DS ramp-up phase is reduced from multiple months to days


## Resources
- Check out our Figma File (link TBD.)
- [Have a look at our components in Storybook](https://b01ler.onrender.com/)#

## Help & Feedback
### Slack
Slack is our main internal communications channel and will most likely be the place where you can reach us best. Join the 
[#boiler](https://song-asg.slack.com/archives/C062PQ9DJTD) channel and say hi 👋 (you need to be part of the Accenture Org to join).

### Teams
We are also on Microsoft Teams. Join the [B01LER](https://teams.microsoft.com/l/team/19%3ABvYMwUq382hbRn7dJyucR3DN4KORS1HjIZl3n5GqE9k1%40thread.tacv2/conversations?groupId=2d176fa2-6d3a-4c70-a986-d05b5977678f&tenantId=e0793d39-0939-496d-b129-198edd916feb) channel and say hi 👋 (you need to be part of the Accenture Org 
to join).

### Email
You can send us messages via [boiler@accenture.com](mailto:boiler@accenture.com), which the team will try to respond to 
as quickly as possible.

### B01LER Monthly
Join the B01LER Monthly Session and ask questions, if you have any. The session takes place on the last Thursday of 
each month from 4 PM to 4:30 PM (CET). You can add the session to your calendar by following the guide in the pinned 
post of our dedicated [Teams channel](https://teams.microsoft.com/l/channel/19%3Aca0a1284d8b34c62b80e983ca3af7934%40thread.tacv2/Monthly%20Session?groupId=2d176fa2-6d3a-4c70-a986-d05b5977678f&tenantId=e0793d39-0939-496d-b129-198edd916feb) for the session (you need to be part of the Accenture Org to join).

### Feedback
Link to Feedback-Form will be added with [issue #428](https://github.com/deven-org/B01LER-Kitchen/issues/428).


## Quick Start

This section is meant to enable people to start the project locally in the most quick and easy way possible without
needing to go through the whole Contribute Page. Consider using Code Snippets and Screenshots as well as a links to
different documentation chapters like the Contribute page to give access to further information. Also think about the
most common problems and provide solutions. Please add a short introduction here.

### Requirements

Please list all the requirements the user has to fullfill to be able to run your code. Consider adding links to other
tech documentations of possible dependencies to help users meet the requirements.We've added two examples of how you
could structure this section:

1. This setup is working for all operating system, testing on Windows 8, Windows 8.1, Windows 10, Mac and Linux. This
   project is a Node.js package. You need Node Version 4 or higher and npm Version 2 or higher, check your installed
   version with node -v and npm -v.

2. To run our code you have to meet the following requirements:

- Node.js v18 <br> (for more information check out the [Node.js Documentation](https://nodejs.org/en/docs/))

- yarn (any version, we will pick the right settings later)

- corepack (might need to be installed additionally)

### How to start

In this section you're supposed to provide the user with a step by step guide on how to install and use your project.
We've added an example below to give you an idea of how you could structure your guide.

1. First, create a folder and a package.json file

   ```sh
   $ mkdir my-app
   $ cd my-app
   $ npm init -y
   ```

2. now we enable corepack for yarn and chooose right version

   ```sh
   $ corepack enable
   $ yarn set version 4.x
   ```

3. Next, install the app

   ```sh
   $ yarn
   ```

4. Now start up your app

   ```sh
   $ yarn start
   ```

</details>
<br>

### How to test

Please provide a short explanation on how and where to run your tests. You can also add a link to the Testing page to
give further information. Also check out the following example to see one possibility to structure this section.

Example:

Local Setup

```sh
$ git clone project-name
$ cd project
$ npm install
```

The project test suite is run with

```sh
$ yarn test
```

## License

This project is licensed under the [MIT license](./LICENSE.md).

## How to continue

In this section you're free to provide the user with any kind of link or information you think is helpful to them when
they arrive at your project - just keep in mind to use neutral and unbiased language through out your documentation to
make everyone feel welcome at your project. If you need further tips and tricks on how to write documentation, check out
our Best Practices Page.
