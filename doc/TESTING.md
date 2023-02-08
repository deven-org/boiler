# Testing

This chapter should provide the user with all needed information around testing within your project.

## Content

- [Different kind of tests](#different-kind-of-tests)
- [Tooling](#tooling)
- [How to write tests](#how-to-write-tests)
- [How to run tests](#how-to-run-tests)

## Different kind of tests

This section should display all the different kinds of tests that you write in your project. Explain what each kind of test is for and why you use them in your project. You can also give an outlook on new tests that should be added in the future of your project. If you have a QA in place, also mention what kind of tests they perform and add contact persons.

## Tooling

We're using [web-test-runner](https://modern-web.dev/docs/test-runner/overview/) to run our tests. It enables us to use a brought variety of testing tools provided by [open-wc/testing](https://open-wc.org/docs/testing/testing-package/).

## How to write tests

### ... for Components

All tests need to be located within the component folder inside a `test` folder. Otherwise the test-runner won't be able to locate the test. [open-wc/testing](https://open-wc.org/docs/testing/testing-package/) offers various tools for testing, such as snapshot testing or accessibility testing of the web-component.

## How to run tests

Here you should provide a guide on how to run the different tests you use. Write down the exact commands to use and where to execute them. You could also use the structure of your set up step-by-step guide from your Contribute page.
