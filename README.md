# Introduction

[![Join the chat at https://gitter.im/ramanujamrs/angular2-seed](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ramanujamrs/angular-bootstrap-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://david-dm.org/ramanujamrs/angular-bootstrap-starter.svg)](https://david-dm.org/mgechev/angular-seed)
[![devDependency Status](https://david-dm.org/ramanujamrs/angular-bootstrap-starter/dev-status.svg)](https://david-dm.org/mgechev/angular-seed#info=devDependencies)

Objective is to have a fast and easy way for Angular 2 starter kit with Bootstrap for the development of prototypes or projects.
Simply Angular here refers to v2 and v4 as per Angular team naming guidelines.

Collaborators are welcome to contribute to the ambition of `angular-starter-with-bootstrap4` project which is to combine the following features in this starter kit:
- Quick way to start angular project with structured folders
- Supports multiple authentication methods including google, FB logins or simple email/pwd authentication
- User profile systems as a service with Admin functionality with bulk upload, activation, deactivation
- Production and development builds
- Sample unit tests with Jasmine and Karma 
- Code coverage with Sonar if possible
- Support for future Angular Mobile
- Beautified bootstrap dashboard  
- Access controlled and dynamic sidebar, header and footer
- Email integration and configuration capability with mailchimp or free email service providers
- Google chart integration
- D3 visualization for dashboard

# How to start
**Note** This starter project requires node v4.x.x or higher and npm 2.14.7 
@angular/cli: 1.0.3
node: 7.10.0
npm: 4.2.0
boostrap: 3.3.7

All of the above are global dependencies (installed globally on your instance) except bootstrap which was a local save in the directory.
Project dependencies(node_modules) are not part of the package. Please install manually as detailed below.
To get started, after installing the above,

```bash
$ git clone --depth 1 https://github.com/ramanujamrs/angular-bootstrap-starter
$ cd angular-bootstrap-starter

# install the project's dependencies
$ npm install

# To run in dev mode
$ ng serve --host <xx.xx.xx.xx>
```
# AngularStarterWithBootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
_Relies on global dependencies._

# Table of Contents

- [Introduction](#introduction)
- [Directory Structure](#directory-structure)
- [Contributors](#contributors)
- [Change Log](#change-log)
- [License](#license)

# Directory Structure

```
.
├── a.txt
├── e2e
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── README.md
├── README.txt
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── header
│   │   │   ├── header.component.css
│   │   │   ├── header.component.html
│   │   │   ├── header.component.spec.ts
│   │   │   └── header.component.ts
│   │   └── sidebar
│   │       ├── sidebar.component.css
│   │       ├── sidebar.component.html
│   │       ├── sidebar.component.spec.ts
│   │       └── sidebar.component.ts
│   ├── assets
│   │   └── dashboard.css
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json
```

# Contributors
Contributors credit will be displayed here

# Change Log

Change log will be updated here

# License

MIT



