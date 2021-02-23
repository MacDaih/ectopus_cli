# ECTOPUS_CLI
Front End client app for Ectopus service : https://github.com/MacDaih/ectopus

### Report

Here's a json example of what a e2e report looks like :

```{
  "name": "your_project",
  "start_at": "2021-02-03T20:03:54.883Z",
  "end_at": "2021-02-11T20:03:57.654Z",
  "duration": 1931,
  "suites": 2,
  "total_tests": 2,
  "failed": 0,
  "passed": 2,
  "runs": [
    {
      "tests": [
        {
          "title": [
            "My First Test",
            "Does not do much!"
          ],
          "state": "failed",
          "body": "function () {\n    expect((0, _display.upperTitle)(\"test\")).to.equal(\"TEST\");\n    expect(1).to.equal(2);\n  }",
          "attempts": [
            {
              "state": "failed",
              "videoTimestamp": null,
              "duration": 53,
              "started_at": "2021-02-11T20:03:54.887Z"
            }
          ],
          "display_error": "AssertionError: expected 1 to equal 2\n    at Context.eval (http://localhost:51898/__cypress/tests?p=cypress/integration     /base.spec.js:303:18)"
        },
        {
          "title": [
            "My First Test",
            "Second Test !"
          ],
          "state": "passed",
          "body": "function () {\n    expect(1).to.equal(1);\n  }",
          "displayError": null,
          "attempts": [
            {
              "state": "passed",
              "videoTimestamp": null,
              "duration": 129,
              "started_at": "2021-02-11T20:03:54.999Z"
            }
          ]
        }
      ],
      "spec": {
        "name": "base.spec.js",
        "relative": "cypress/integration/base.spec.js",
        "absolute": "your_projectcypress/integration/base.spec.js",
        "spec_type": "integration"
      },
      "reporter_stats": {
        "suites": 1,
        "tests": 2,
        "passes": 1,
        "pending": 0,
        "failures": 1,
        "start": "2021-02-11T20:03:54.886Z",
        "end": "2021-02-11T20:03:55.134Z",
        "duration": 248
      }
    },
    {
      "tests": [
        {
          "title": [
            "LANDING PAGE",
            "Should Land"
          ],
          "state": "passed",
          "body": "function () {\n    cy.visit('http://localhost:3000');\n  }",
          "displayError": null,
          "attempts": [
            {
              "state": "passed",
              "videoTimestamp": null,
              "duration": 904,
              "started_at": "2021-02-11T20:03:56.748Z"
            }
          ]
        }
      ],
      "spec": {
        "name": "home.spec.js",
        "relative": "cypress/integration/home.spec.js",
        "absolute": "your_project/cypress/integration/home.spec.js",
        "spec_type": "integration"
      },
      "reporter_stats": {
        "suites": 1,
        "tests": 1,
        "passes": 1,
        "pending": 0,
        "failures": 0,
        "start": "2021-02-08T20:03:55.971Z",
        "end": "2021-02-11T20:03:57.663Z",
        "duration": 1692
      }
    }
  ]
}```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

