# windy-pug

<p align="center">
  <a href="https://www.windypug.com"><img src="https://i.imgur.com/jPxoOGC.png" alt="windy-pug" width="200"></a>
</p>


[WindyPug](https://www.windypug.com) is a boilerplate that provides a foundation for web development, combining the Express.js backend framework, Pug templating engine for dynamic content, and the power of the TailwindCSS CSS framework for responsive styling and the Daisy UI component library for quick and stylish UI development.

Also included is BrowserSync for live reloading and syncing across multiple devices.

---
# www.windypug.com

## Table of Contents

- [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)

## Screenshot
![windy-pug-screenshot.png](https://i.imgur.com/ceqVI4A.png)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/BerianL/windy-pug.git
    ```

2. Navigate to the project folder:

    ```bash
    cd windy-pug.git
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```


## Usage

1. Start the development server:

    ```bash
    npm run dev:sync
    ```
   This command will start the Express.js server, watch for changes and automatically refresh the browser.

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the application in action.


## Scripts

* `start`: Start the Express.js server.
* `build:css`: Build the TailwindCSS styles.
* `watch:css`: Watch for changes to TailwindCSS styles.
* `dev`: Start the development server and watch for CSS changes.
* `dev:sync`: Start the development server, watch for CSS changes, and sync with the browser.
* `sync`: Start BrowserSync to sync your changes across multiple devices.

