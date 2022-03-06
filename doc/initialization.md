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