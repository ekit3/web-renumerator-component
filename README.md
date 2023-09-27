# Renumerator

## Developing

First make a git clone : `git clone https://github.com/ekit3/web-renumerator-component.git` and `cd web-renumerator-component`

after that, run `npm i` to install the npm dependencies.

## Run in dev mode

```bash
    npm run dev
```

## Building

To create a production version of your app:

```bash
    npm run build
```

## preview mode

You can preview the production build with `npm run preview`.

## Building in production

```bash
    npm run build-prod
```

The Build Prod create 2 differents files :

`renumerator-component.es.js` && `renumerator-component.umd.js`

## How to use ?

After runing a build prod, copy the file `renumerator-component.umd.js` and use in html files like that for exemple :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <link rel="stylesheet" href="/smui.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Localhost 8080</title>
  </head>

  <body>
    <renumerator-component company="EKITE"></renumerator-component>

    <script type="module" src="renumerator-component.umd.js"></script>
  </body>
</html>
```

You need to add the external thrid party css : `<link rel="stylesheet" href="/smui.css" />` from the static file folder and call the component like that : <renumerator-component company="EKITE"></renumerator-component>

## for first init of project (no needs in dev mode)

install SMUI theme :

```shell
    npx smui-theme template src/theme
    npm run prepare
```
