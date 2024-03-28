# Architecture
The BO1LER, a fully customisable design system (DS), is developed using the [Lit](https://lit.dev/docs/) template and
Figma. The design system serves as a core unit for UI components, styles, and guidelines, ensuring consistency and
efficiency across our applications.

## Content
- [Architecture](#architecture)
  - [Content](#content)
  - [Overall Structure](#overall-structure)
    - [File Structure](#file-structure)
    - [Version Control](#version-control)
    - [Documentation and Testing](#documentation-and-testing)
    - [CI/CD](#ci-cd)
  - [Technical Decisions](#technical-decisions)
    - [Web Components](#web-components)
    - [Styles](#styles)
    - [Guidelines](#guidelines)
    - [Figma](#figma)
  - [Contributing](#contributing)

## Overall Structure
The entire code is developed in TypeScript, which facilitates type checking and offers additional functionalities for
detecting errors early in the development process. Besides configuration files, the 'Packages' directory holds essential
content. Within this directory are subfolders named according to their contents.

### File Structure
Our project has the following file structure:

    └── .github             // GitLab CI/CD pipeline
    └── .husky              // Git hooks configuration files and scripts
    └── .vscode             // VS code extensions and settings json
    └── .yarn               // Yarn releases folder
    └── docs                // Includes documentation about Contributing, Code of Conduct, etc.
    └── packages
        └── assets               // Collection of resources, such as images and other files utilized in B01LER
        └── eslint-config-boiler // Specific ESLint configuration for this project
        └── figma-design-tokens  // Design tokens configuration files and exported token json files
        └── icons                // Icon configuration files and a collection of icon files in svg format
        └── js-example-app       // Source code for js testing app for B01LER DS
        └── ui-library
            └── .storybook          // Configuration files for Storybook environment, assets, fonts and theme
            └── src
                └── components         // Collection of individual B01LER DS components
                └── foundation         // Collection of generated token files and component and semantic tokens
                └── globals            // Exports of constants and types
                └── util               // Collection of utility or helper functions
    └── LICENSE.md          // Software license that governs the use, distribution, and modification of B01LER
    └── README.md           // Introductory documentation for B01LER

We also provide example applications for [Vanilla JS](https://b01ler.onrender.com/js-example-app) located in
'js-example-app'.

The 'ui-library' directory encompasses all UI components, along with their corresponding test and index files for
Storybook. Storybook serves as a development environment tool, providing a sandbox for independent construction and
evaluation of components. Operating separately from the application, [Storybook](https://b01ler.onrender.com/) ensures
that component behavior remains consistent, irrespective of project dependencies.

Regarding Figma tokens, the 'figma-design-token' directory contains all design system components utilized in token
generation. Configuration for token generation can be found within the same folder. The generated tokens are stored and
utilized directly within the 'ui-library'.

### Version Control
The code base, hosted on GitHub and maintained by the Deven team, is publicly accessible, inviting interested users to
contribute to the ongoing development and maintenance efforts of the project. We encourage collaboration and welcome
feedback from the community to enhance the project's capabilities and ensure its continued evolution.

### Documentation and Testing
The project adheres to best practices for documentation, and testing. The codebase is thoroughly documented with live
preview capability and explicit guidelines on usage and contribution procedures. Additionally, comprehensive component
tests are integrated to verify that modifications uphold the project's integrity and functionality, preventing
regressions or defects from emerging.

### CI-CD
The changes made in project's code base adheres to a continuous integration and delivery (CI/CD) pipeline. This
guarantees that any alterations undergo rigorous testing and validation before being released to the production
environment.

## Technical Decisions
This section lists all technical decisions. It includes explanations of the frameworks, tools and languages that are
used in the project. It also includes the main reasons for these decisions.

### Web Components
Our design system includes a wide range of reusable UI components, each carefully designed and implemented using the [Lit](https://lit.dev/docs/) template. These web components cover various aspects of our application's user interface, including buttons, input fields, tab bars, divider, and more. The reason for using Lit was that it being a straightforward library designed for constructing rapid, lightweight web components. Furthermore, it provides the developers a component base class that eliminates boilerplate code, offering reactive state, scoped styles, and a declarative template system. This system is characterized by its compact size, swift performance, and expressive nature. In our project, every component utilizes LitElementCustom instead of the base LitElement. This custom variant offers tailored functionality and optimizations designed to meet our project's requirements precisely. As a result, it's imperative to consistently employ LitElementCustom for any new components added to the codebase. To enforce this standardization, we've implemented a linting rule, no-restricted-imports, ensuring adherence across the team.

### Styles
The design system provides a comprehensive set of styles, including typography, colors, spacing, and layout guidelines.
These styles are meticulously crafted to maintain visual coherence and enhance the overall user experience.

### Events
The various events, such as focus, blur, click, etc., have the 'blr' prefix appended, allowing them to be accessed as
'blrFocus,' 'blrBlur,' 'blrClick,' and so on. One example can be seen in
[Storybook documentation](https://b01ler.onrender.com/).

### Guidelines
In addition to components and styles, the design system includes detailed guidelines and best practices for design and
development. These guidelines cover topics such as accessibility, responsive design, interaction patterns, and naming
conventions, empowering our team to create consistent and high-quality user interfaces.

### Figma
Figma plays an essential role in our product development, as B01LER relies heavily on its functionalities. It serves as
the platform for our design assets, including the component designs. Moreover, we utilize the
[tokens studio plugin](https://www.figma.com/community/plugin/843461159747178978) within Figma to manage and update our
design tokens effectively. Figma allows our team to create, share, and collaborate on designs in real-time, streamlining
the design process and facilitating cross-functional collaboration.

## Contributing
Contributions to the design system are welcome! If you have suggestions for new components, styles, or guidelines,
please open an issue or submit a pull request. Your contributions help improve the consistency and quality of our user
interfaces. Before opening a
[bug report](https://github.com/deven-org/boiler/issues/new?assignees=&labels=%F0%9F%9A%A8+new%3A%3Abug&projects=deven-org%2F3&template=1_bug_report.yaml&title=%5BBug%5D%3A+)
or a
[feature request](https://github.com/deven-org/boiler/issues/new?assignees=&labels=%F0%9F%9A%A8+new%3A%3Aenhancement&projects=deven-org%2F3&template=2_feature_request.yaml&title=%5BFeature+Request%5D%3A+)
please check out our [contribution guide](CONTRIBUTING.md) and our [code of conduct](CODE_OF_CONDUCT.md). In case you
discover a security vulnerability please review our [security policy](SECURITY.md) for more details on how to report it.
