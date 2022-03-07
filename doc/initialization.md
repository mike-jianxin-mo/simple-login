#### Source

Ref: https://soshace.com/react-user-login-authentication-using-usecontext-and-usereducer/

#### create project

npx create-react-app simple-login --template typescript

#### initiate the VSCode

#### install testing library

npm install eslint-plugin-testing-library eslint-plugin-jest-dom

#### add plugins for VSCode

ESLint
Prettier

#### configure testing library for ESLint

.eslintrc.json

```
{
    "plugins": [
        "testing-library",
        "jest-dom"
    ],
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ]
}
```

#### set up eslint for VSCode

.vscode/settings.json

```
{
    "eslint.validation": ["javascript", "javascriptreact"],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

Ref: https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code
Ref: https://www.udemy.com/course/react-testing-library/learn/lecture/30045082#notes

#### Prettier not working

https://stackoverflow.com/questions/52586965/why-does-prettier-not-format-code-in-vs-code

1. Select VS Code -> View -> Command Palette, and type: Format Document With
2. Then Configure Default Formatter... and then choose Prettier - Code formatter

3. Prettier could also format your files on save.
   However, installing and enabling does not result in working.

You have to check "format on Save" in VSCode: Setting >> User >> Text Editor >> Formatting
