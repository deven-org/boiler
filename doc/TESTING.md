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

### ... within the open-wc testing framework

All tests need to be located within the component folder inside a `test` folder. Otherwise the test-runner won't be able to locate the test. [open-wc/testing](https://open-wc.org/docs/testing/testing-package/) offers various tools for testing, such as snapshot testing or accessibility testing of the web-component.

### ... with pa11y-ci for accesibility testing

For standard testing, you just have to run `npm run test:a11y`.

Additionaly, if you want to write custom test cases, the file `src/components/pa11y-custom.config.js` exists. It allows you to add an array of additional `parameters` to the story you're going to test.

```js
{ story: 'BlrTextButton--blr-text-button', parameters: ['icon:boilerChevronDownGreen'] }
```

While `story` names the story to test, the `parameters` come from the story url in storybook and represent the chosen controls of the story.

## How to run tests

### ... with pa11y-ci for accesibility testing

1. **Run the `test:a11y`** command. This command consists of several tasks:

   1. `build-storybook` builds a static storybook folder `storybook-static` in the root directory.
   2. `sb extract` then extracts all available stories into a stories.json inside `storybook-static`.
   3. Now the new `pa11y.ci` file is beeing created. It transforms the stories from `stories.json` into a list of urls of all components that are going to be tested.

### ... within the open-wc testing framework
