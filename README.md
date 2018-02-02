# DTS Project #

A DTS project template for developing front end applications.

## Setup ##

_Step 1._ Clone the dts-project git repo.

```
git clone https://github.com/JamesNgo-CoT/dts-project.git
```

_Step 1.1._ (Optional) Update the dts-project git repo.
```
git update
```

_Step 2._ Copy the _dist_ folder and use it as the root folder of your new project. Rename it accordingly.

_Step 3._ Inside the new project folder, Initialize your project with NPM.

```
npm init
```

_Step 4._ Install dependencies with NPM.

```
npm install
```

_Step 5._ (Optional) Test out GulpJS to generate a _dist_ folder.

```
gulp
```

## Configuration ##

### Editor Config ###

Customize _.editorconfig_ file to match your coding preference.

Editor Config is used by supporting editors to keep coding style consistent between different files.

Visit http://EditorConfig.org for more information on Editor Config.

### Babel ###

### ESLint ##

## Development ##

All development should be done inside the _src_ folder. Using GulpJS, this folder is compiled/built into the _dist_ folder.

This template is designed to work with ECMAScript 6 and SASS.

## Build ##

Use GulpJS to build your web application.

```
gulp
```
