# Introduction

Welcome to our B01LER Contribution Page!  We truly appreciate your interest in contributing to our project! 🎨✨ 

Dive into the heart of our project by contributing to its foundational elements: Explore this page to discover ways you can contribute — your involvement is greatly appreciated!

### Who can contribute?

Curious about who can contribute to our project? The answer is simple: everyone is welcome! Whether you're a developer, designer, manager, or administrator of any kind, your contributions are highly valued. We believe in fostering a diverse community where individuals with various skill sets can collaborate to enhance our project. 

It's worth noting that we are currently in the alpha stage, and while we enthusiastically welcome contributions, please understand that, at this moment, we may not have the capacity to manage a large influx of them. Your contributions are greatly appreciated as we continue to grow and develop our project!


## Table of contents
- [New contributor guide](#new-contributor-guide)
- [Contribution process overview](#contribution-process-overview)
- [Getting started](#getting-started)
  - [:file_folder: File Structure](#file_folder-file-structure)
- [Issues](#issues)
  - [Create a new issue](#create-a-new-issue)
  - [Solve an existing issue](#solve-an-existing-issue)
  - [Tipps to find issues](#tipps-to-find-issues)
- [Branch](#branch)
  - [Branch naming convention](#branch-naming-convention)
- [Commits](#commits)
- [Testing / Validating](#testing-and-validating)
- [Pull Request](#pull-request)
- [B01LER Monthly](#b01ler-monthly)


## New contributor guide

> **NOTE**
> 
> This documentation is focused towards contributions from developers, if you are looking for a guide for design contributions, please read the [contribute documentation in Figma](https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?type=design&node-id=9020%3A1058&mode=design&t=7cANsYeeqQcDmGpq-1).
> Apart from code and design contributions, everyone is always invited to contribute by engaging with the community for example by commenting and giving input on issues or by starting and taking part in discussions in GitHub. Another way to contribute is by getting more eyes on the project. Just add a star to our repository! Or, if you are on Figma, add a heart to our Figma community page or leave a comment if you like the project.


To get an overview of the project and how to set it up, read the [README](https://github.com/deven-org/B01LER-Kitchen/blob/develop/README.md). For more details about our Code of Conduct see [CODE_OF_CONDUCT](https://github.com/deven-org/B01LER-Kitchen/blob/develop/CODE_OF_CONDUCT.md). Here are some resources to help you get started with open source contributions:
- [How to install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [How to handle repositories](https://docs.gitlab.com/ee/user/project/repository/)
- [Creating an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)
- [Creating merge requests](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)

> **Contribution etiquette:**
> - While working on your contribution, please do not copy code from other frameworks or libraries
> - Make small and frequent commits
> - The default language for all written and spoken communication is english
> - Every GitHub issue should have a corresponding branch, and vice versa - every bugfix or code change should already have an issue created for it
> - No code should be merged or pushed to the develop branch without a pull request 
> - A merge request can only be merged if it has successful test results and at least two approvals


## Contribution process overview
1. Getting Started (Understand the projects file structure)
2. Create new issue / select an existing issue
3. Create new branch
4. Commit your changes
5. Validate / Run tests
6. Create new pull request
7. Code Review


## Getting started
Here you can find a quick overview of the whole contribution process, as well as in-depth explanations of each step.  

### :file_folder: File Structure
Our project has the following file structure:
 
    └── .github             // GitLab CI/CD pipeline
    └── .husky              // Git hooks configuration files and scripts
    └── .vscode             // VS code extensions and settings json
    └── .yarn               // Yarn releases folder
    └── doc                 // The documentation skeleton   
    └── packages  
        └── assets               // Collection of resources, such as images and other files utilized in B01LER
        └── eslint-config-boiler // Specific ESLint configuration for this project  
        └── figma-design-tokens  // Design tokens configuration files and exported token json files
        └── icons                // Icon configuration files and a collection of icon files in svg format
        └── js-example-app       // Source code for js testing app for B01LER DS
        └── react-example-app    // Source code for react testing app for B01LER DS
        └── storybook            // Configuration files and compiling tools for Storybook
        └── ui-library         
            └── .storybook          // Configuration files for Storybook environment, assets, fonts and theme
            └── src          
                └── components         // Collection of individual B01LER DS components 
                └── foundation         // Collection of generated token files and component and semantic tokens
                └── globals            // Exports of constants and types
                └── util               // Collection of utility or helper functions
    └── CODE_OF_CONDUCT.md  // Our Code of conduct
    └── CONTRIBUTING.md     // The file you have open right now
    └── LICENCE.md          // Software license that governs the use, distribution, and modification of B01LER
    └── README.md           // Introductory documentation for B01LER


## Issues
Before being able to contribute to B01LER, you need to get yourself assigned to an issue. For this you could either apply to solve an existing issue or create a new issue. 

### Solve an existing issue
Browse our [existing issues](https://github.com/deven-org/B01LER-Kitchen/issues) to find one that interests you. If you would like to work on an issue, leave a comment stating your intent and assign yourself to the issue. If the issue already has an assignee, someone else is likely already working on it. The core team will check your issue to ensures that it is still relevant and give you approval to start working. Waiting for approval makes it less likely to get a rejected pull request. We will do our best to reply to you within a week.


### Create a new issue
Before creating a new issue, please [check if your issue already exists](https://github.com/deven-org/B01LER-Kitchen/issues). If a related issue doesn't exist, you can open a new issue using the same page. We currently have two issue templates. One is for bugs and the other one for everything else, like new features or also improvements of existing features.

<details>
<summary>How to write a useful issue?</summary>
<br />
<ul>
<li>Use the existing issue templates.</li>
<li>It should be <i>specific</i>. It's important that it addresses one specific topic.</li>
<li>If it is a bug it should be <i>reproducible</i>. It should contain all the instructions needed to reproduce the same outcome.</li>
<li>If the issue is about a component, please add the component name to the beginning of issue title, followed by a dash and a more in detail description of the issue. For example: <code>Text Button - add new variant</code></li>
</ul>
</details>
 After creating an issue, don’t forget to assign it to yourself. The core team will then check your issue to ensures that your idea fits the scope of the project and leave an approval comment. Waiting for approval makes it less likely to get a rejected pull request.  We will do our best to reply to new issues within a week.

### Tipps to find issues
- For a first contribution, go to labels / filter by labels and see if there are issues tagged with the `good first issue` label
- Search for the component name of the component you want to work on
- Filter by the `💚 contributor issue` label
- Filter by the `🚨 new::bug`, `⌨️ dev issue`, `📋 task::backlog` and/or `📋 task::ready` labels
- Avoid tasks labeld with `⭕️ core team issue`, `🚫 blocker`, `🎨 design issue`, `📋 task::planned`, `📋 task::inProgress`, `📋 task::inReview`, `🦹 needs:contact`, `🦹 needs:documentation`, `🦹 needs:help` and/or `🦹 needs:specs` 


## Branch
For contributions we are using [Gitflow as branching strategy](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices). [Here](https://danielkummer.github.io/git-flow-cheatsheet/) you can also find a short cheatsheet about Gitflow.

### Branch Naming Convention
The branch name should not exceed a maximum character count of 140. Each branch should follow the following structure:
`<branchType>/<issueNumber>_<summary>`

- **branchType:** As defined in the Gitflow branching strategy, there are different types of branches. Besides the existing `main` and `develop` branches, the allowed types for newly created branches are: `release`, `hotfix`, `feature` and `fix`. The branch type `fix` is not defined in Gitflow, but is used exactly like a `feature` branch. It was added to be more granular in our naming convention and to differentiate between branches that implement something new (`feature`) and those that change something that already exists (`fix`).
- **issueNumber:** The issue number of your task. For example: `421` 
- **summary:** A few words describing the issue. When there are multiple words, you can use a hyphen to link the words. For example: `text-area-storybook-documentation`  


## Commits
The commits must be compliant with with the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).
The commit header should not exceed a maximum character count of 140. The scope is allowed to be one of the following options: 'all', 'ui-library', 'icons', 'figma-design-tokens', 'tokens', or 'storybook'. 


## Testing and validating
Please, before submitting any contribution, be sure that your branch is passing all the tests.

```bash
yarn test
yarn compile
```

## Pull Request
Once your contribution is ready, it is time to create a pull request. Once your contribution is ready, it is time to create a pull request.  
Please create pull requests for the `develop` branch and not for `main`.  
Please also make sure that pull requests are linked to the related issue using the `Development` field in either the pull request or the issue.


## Code Review
After you created a pull request, your code will be reviewed by the B01LER core team. Once the PR has two approvals, your code will be merged to develop and will be part of a future release.  
In case we find things we would like you to change we will leave comments. We kindly ask you to update your pull request in regards of the requested changes. Once all comments have been solved the pull request will be merged.  
We will try our best to respond within a week to new pull requests. Contributors are also invited to review other contributors pull requests, but in the end at least one member of the core team needs to approve it, before it can be merged.


## B01LER Monthly
Join the B01LER Monthly Session and ask questions, if you have any. The session takes place on the last Thursday of each month from 4 PM to 4:30 PM (CET). You can add the session to your calendar by following the guide in the pinned post of our [Teams channel](https://teams.microsoft.com/l/channel/19%3Aca0a1284d8b34c62b80e983ca3af7934%40thread.tacv2/Monthly%20Session?groupId=2d176fa2-6d3a-4c70-a986-d05b5977678f&tenantId=e0793d39-0939-496d-b129-198edd916feb).


> **NOTE**
> 
> You need to be part of the Accenture Org to be able to join the session.
