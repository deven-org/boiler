# Deployment

This chapter should provide the user with all needed information around the deployment of your project.

Currently, the B01LER project is getting deployed to [render.com](https://render.com) periodically. In the near future,
we intend on implementing a more formal deployment schedule so that the latest version of the project will be available
to view and interact with.

The project can be viewed [here](https://b01ler.onrender.com/). This link allows you to experiment with the project and
learn about how you can use components via Storybook.

We also deploy our JS Example app to [Render](https://b01ler.onrender.com/js-example-app). This application shows you
how our components look when implemented in a vanilla Javascript application.

## Content

- [Tooling](#tooling)
- [Release Please](#release-please)
- [Conventional Commit Messages](#conventional-commit-messages)
- [How to deploy](#how-to-deploy)
- [Versioning](#versioning)
- [Release Management](#release-management)
- [Deployment Schedule](#deployment-schedule)
- [Support](#support)

## Tooling

This project uses release-please and conventional commit messages for automated release creation and deploys the package
to the npm registry.

We use the [Git-Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model:

```mermaid
        gitGraph
       commit id: "a"
       commit id: "b"
       branch develop
       checkout develop
       checkout develop
       branch feature1
       checkout feature1
       commit id: "c"
       checkout develop
       merge feature1
       branch feature2
       checkout feature2
       commit id: "d"
       checkout develop
       merge feature2
       checkout main
       merge develop
       branch "release"
       checkout release
       commit id: "1.0.0" tag: "release"
       checkout main
       merge release
       checkout develop
       merge main
```

## Release Please

Release Please automates CHANGELOG generation, the creation of GitHub releases, and version bumps for your projects.
Release Please does so by parsing the git history, looking for Conventional Commit messages, and creating release PRs.

The tool runs on every update on the `main` branch and creates a release PR which needs to be manually be merged to
create the release.

The updated `main` branch then needs to be merged back, please use rebase, into the `develop` branch.

## Conventional Commit Messages

The commits must be compliant with with the
[Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/). The commit header should not
exceed a maximum character count of 140. The scope is allowed to be one of the following options: 'all', 'ui-library',
'icons', 'figma-design-tokens', 'tokens', or 'storybook'.

## How to deploy

One needs to create a new PR from `develop` to `main`. Once the PR is approved and merged the GitHub workflow `release`
will be started.

The `release` workflow will first run the tests and after they were successful a new release branch is created together
with a PR from the release branch into `main`.

The newly created release PR needs to be manually merged into main to finish the package creation and release
publishing.

After the release PR is merged the `develop` branch also needs to be updated by rebasing it onto the `main` branch.

## Versioning

Please see [conventional commit messages](#conventional-commit-messages)

## Deployment Schedule

There is no deployment schedule. A new release is created whenever we have multiple new small features or a new big
feature that we want to release.

## Support

If support is needed while deploying BO1LER, please refer to our
[README feedback section](/README.md#tipping_hand_person-help--feedback) where we list the many ways that we can be
reached to support you.
