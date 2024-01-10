# B01LER

![Boiler_Welcome](https://github.com/deven-org/B01LER-Kitchen/assets/122102805/f5aa5c3a-9d5b-4b98-a9df-29dd1b35b1ea)

## :page_with_curl: Content

- [B01LER](#b01ler)
  - [:page_with_curl: Content](#page_with_curl-content)
  - [:star: Introduction](#star-introduction)
    - [Benefits of B01LER](#benefits-of-b01ler)
    - [Common misconceptions](#common-misconceptions)
      - [1. Web Components are not accessible](#1-web-components-are-not-accessible)
  - [:art: Resources](#art-resources)
  - [:tipping_hand_person: Help & Feedback](#tipping_hand_person-help--feedback)
    - [Discussion Board](#github-discussion-board)
    - [Slack](#slack)
    - [Teams](#teams)
    - [Email](#email)
    - [B01LER Monthly](#b01ler-monthly)
    - [Feedback](#feedback)
  - [:gear: Requirements](#gear-requirements)
  - [:rocket: How to start](#rocket-how-to-start)
    - [Installation](#installation)
    - [Setup](#setup)
    - [Usage](#usage)
  - [:white\_check\_mark: How to test](#white_check_mark-how-to-test)
  - [:v: Contribute](#v-contribute)
  - [:bug: Bugs and Issues](#bug-bugs-and-issues)
  - [:page\_facing\_up: License](#page_facing_up-license)
  - [:green\_heart: Code of conduct](#green_heart-code-of-conduct)


## :star: Introduction
B01LER is a fully customisable design system (DS) that enables you to easily create cohesive and consistent digital products across multiple platforms and brands.

B01LER provides pre-built components that exist in design in the form of a [component library in Figma](https://www.figma.com/file/zPHgVJFeLAhdM4MdOymhPb/B01LER--%5Bv0.1---alpha-release%5D?type=design&node-id=8941%3A1818&mode=design&t=owVepZzAwdrehnmL-1) (the link to the Figma file above is exclusively for members of the Accenture organization, while those outside the organization can download the file [here](https://boilerds.com/B01LER%20%20%5Bv0.1%20-%20alpha%20release%5D.fig)), as well as in code in a repository (the one you have opened right now), which is also [displayed in the web using Storybook](https://boilerds.com/storybook). Both the components in design and in code are connected via a token system.

A token system is a collection of values which represent the visual properties of a design system, such as typography, color and spacing.

Utilizing tokens, B01LER is simultaneously consistent and flexible. By changing the tokens, you have the power to change the appearance of the whole design, including all the components and all the digital products build with it. In Figma and in code.

Overall, B01LER is a powerful tool that helps you work smarter, not harder. By streamlining the design and development processes B01LER empowers you to create better products faster.

### Benefits of B01LER
1. Increased efficiency in building design systems on brand, because semantic structure and architecture are pre-built
2. Increased efficiency, through automated processes. Documentation, DEV Handover, and more
3. Increased effectivity, because the time saved on building all the components can be used to build features right away
4. Increased acceptance of DS because components work right from the beginning of project phase
5. Immense cost savings, because the DS ramp-up phase is reduced from multiple months to days

### Common misconceptions
#### 1. Web Components are not accessible
Some articles claim, that Web Components are not accessible or that they are not complying with standard accessibility guidelines. The argument says that assistive technologies like screenreaders can not access the shadow DOM and for example are not able to "see" aria or role attributes that are needed to make components accessible. This is wrong. Modern screenreaders are not "looking" at the DOM. Instead they are accessing the accessibility tree, which is provided by the browser and also contains information from the shadow DOM.


## :art: Resources
- [Check out our Figma File](https://www.figma.com/file/zPHgVJFeLAhdM4MdOymhPb/B01LER--%5Bv0.1---alpha-release%5D?type=design&node-id=8941%3A1818&mode=design&t=owVepZzAwdrehnmL-1) (the link to the Figma file above is exclusively for members of the Accenture organization, while those outside the organization can download the file [here](https://boilerds.com/B01LER%20%20%5Bv0.1%20-%20alpha%20release%5D.fig))
- [Have a look at our components in Storybook](https://b01ler.onrender.com/)


## :tipping_hand_person: Help & Feedback
### Github Discussion Board
Please have a look at our [Github discussion board](https://github.com/deven-org/telemetry-functions/discussions) to raise questions or start a discussion about a future feature.

### Slack
Slack is our main internal communications channel and will most likely be the place where you can reach us best. Join the 
[#boiler](https://song-asg.slack.com/archives/C062PQ9DJTD) channel and say hi 👋 (you need to be part of the Accenture 
Org to join).

### Teams
We are also on Microsoft Teams. Join the [B01LER](https://teams.microsoft.com/l/team/19%3ABvYMwUq382hbRn7dJyucR3DN4KORS1HjIZl3n5GqE9k1%40thread.tacv2/conversations?groupId=2d176fa2-6d3a-4c70-a986-d05b5977678f&tenantId=e0793d39-0939-496d-b129-198edd916feb) channel and say hi 👋 (you need to be part of the Accenture 
Org to join).

### Email
You can send us messages via [hello@boilerds.com](mailto:hello@boilerds.com), which the team will try to respond 
to as quickly as possible.

### B01LER Monthly
Join the B01LER Monthly Session and ask questions, if you have any. The session takes place on the last Thursday of 
each month from 4 PM to 4:30 PM (CET). You can add the session to your calendar by following the guide in the pinned 
post of our dedicated [Teams channel](https://teams.microsoft.com/l/channel/19%3Aca0a1284d8b34c62b80e983ca3af7934%40thread.tacv2/Monthly%20Session?groupId=2d176fa2-6d3a-4c70-a986-d05b5977678f&tenantId=e0793d39-0939-496d-b129-198edd916feb) for the session (you need to be part of the Accenture Org to join).

### Feedback
Link to Feedback-Form will be added with [issue #428](https://github.com/deven-org/B01LER-Kitchen/issues/428).


## :gear: Requirements
1. First you need to install Git. Git is needed to clone the project to your local machine. If you don't have it installed yet you can follow this [installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. This project is a Node.js package. You need Node Version 18 or higher in order to run it. Check your installed version with node -v. For more information check out the [Node.js Documentation](https://nodejs.org/en/docs/).

3. If you don't have Yarn installed, please install it (any version, we will pick the right settings later). For more information check out the [Yarn Documentation](https://classic.yarnpkg.com/en/docs). 

In addition, you might need to install Corepack. For more information checkout [Corepack Documentation](https://nodejs.org/api/corepack.html).


## :rocket: How to start

### Installation
> Note: You need to run terminal as administrator on Windows machines.

1. First, open a terminal and navigate to the folder you want to fork or clone this project

   ```sh
   $ cd git_projects
   ```

2. If you want to use B01LER as a starting point for your own design system, the first step is to fork the repository. You can do this via the GitHub web interface and just follow the instructions or read the documentation [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo). This step is only required for the initial setup of you repository.

   In case you want to contribute to this repository, the first step is to clone the repository:

   ```sh
   $ git clone https://github.com/deven-org/B01LER-Kitchen.git
   ```

3. now we enable corepack for yarn and chooose right version

   ```sh
   $ corepack enable
   $ yarn set version 4.0.2
   ```

4. Next, install the app

   ```sh
   $ yarn
   ```

5. Now start up your app

   ```sh
   $ yarn start
   ```

### Setup
Note: This is not filled out yet!
...

### Usage
Note: This is not filled out yet!
...


## :white_check_mark: How to test
Note: This is not filled out yet!
...


## :v: Contribute
For a detailed documentation on how to contribute to the B01LER project, have a look at our [contribution guide](./doc/CONTRIBUTE.md).


## :bug: Bugs and Issues
If you would like to open an issue, you can gladly use [this page](https://github.com/deven-org/B01LER-Kitchen/issues).
But please, have a look at the [Contribute](./doc/CONTRIBUTE.md) page before filing a bug.


## :page_facing_up: License
This project is licensed under the [MIT license](./LICENSE.md).


## :green_heart: Code of conduct
The B01LER is using the Contributor Covenant Code of Conduct. You can read the whole code of conduct [here](./doc/CODE_OF_CONDUCT.md).

