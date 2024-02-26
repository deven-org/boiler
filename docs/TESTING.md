# Testing
This chapter provides the user with all needed information around testing within this project.

## Content
- [Testing](#testing)
  - [Content](#content)
  - [Different kind of tests](#different-kind-of-tests)
  - [Testing strategy](#testing-strategy)
  - [Tooling](#tooling)
    - [open-wc-testing](#open-wc-testing)
  - [How to write tests](#how-to-write-tests)
    - [Directory structure](#directory-structure)
    - [Examples](#examples)
  - [How to run tests](#how-to-run-tests)
  - [Contributing](#contributing)

## Different kind of tests
Component test - It ensures that each component render correctly and respond to user interactions as expected in isolation.

In future other testing types like Integration Testing, Performance Testing can be added in the Continuous Integration process.

## Testing strategy
The tests are crafted to validate the functionality of the software, ensuring it operates as designed and identifying bugs and errors before they are deployed to production. Testing serves as a proactive measure to identify issues early in the development phase. Our objective is to create component test for each individual component within the codebase, guaranteeing their intended functionality and preventing regressions from new changes.

## Tooling
### open-wc-testing
This repository contains tests written using the `@open-wc/testing` library. `@open-wc/testing` provides a suite of tools and utilities for testing web components, following modern best practices and standards.

[Read more here](https://open-wc.org/docs/testing/testing-package/).

## How to write tests
To write tests using `@open-wc/testing`, follow these steps:
1. Import the necessary functions and utilities from `@open-wc/testing`.
2. Write your test cases using the provided utilities such as `fixture`, `html`, `litFixture`, etc.

### Directory structure
- `src/components/`: Contains the source code of the components and respective test for it.

### Examples
```sh
import { fixture, html, expect } from '@open-wc/testing';
import './my-component.js';

describe('MyComponent', () => {
  it('renders the component', async () => {
    const el = await fixture(html`<my-component></my-component>`);
    expect(el).to.exist;
  });

  it('displays the correct title', async () => {
    const el = await fixture(html`<my-component title="Hello"></my-component>`);
    expect(el.title).to.equal('Hello');
  });
});
```

## How to run tests
Local Setup:
```sh
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running `yarn`.
4. Run the tests using the command `yarn test`.
```

The project test suite is run with
```sh
$ yarn run test
```

## Contributing
Contributions are welcome! Before opening a [bug report](https://github.com/deven-org/boiler/issues/new?assignees=&labels=%F0%9F%9A%A8+new%3A%3Abug&projects=deven-org%2F3&template=1_bug_report.yaml&title=%5BBug%5D%3A+) or a [feature request](https://github.com/deven-org/boiler/issues/new?assignees=&labels=%F0%9F%9A%A8+new%3A%3Aenhancement&projects=deven-org%2F3&template=2_feature_request.yaml&title=%5BFeature+Request%5D%3A+) please check out our [contribution guide](CONTRIBUTING.md) and our [code of conduct](CODE_OF_CONDUCT.md). In case you discover a security vulnerability please review our [security policy](SECURITY.md) for more details on how to report it.
