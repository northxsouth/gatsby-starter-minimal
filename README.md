# gatsby-starter-minimal

[Demo](https://gatsby-starter-minimal.netlify.app/)

# What's in the box

- [Yarn 2.x (berry)](https://github.com/yarnpkg/berry)
- Typescript! Graphql!
- Tailwind
- SASS/SCSS
- Tailwind -> SASS vars
- Gatsby / React
- Linting! w/ ESLint & Prettier
- Jest
- Sane Defaults

## Running

`yarn install`

`yarn dev`

## How do I...

### ...change the social image?

Replace [src/assets/images/social-image.jpg](src/assets/images/social-image.jpg)

If you change the name or format, update [useSocialImageQuery](src/hooks/useSocialImageQuery.ts) in `src/hooks`

### ...configure STANDARDWEBSITEVARIABLES

Use [config/SiteConfig.js](config/SiteConfig.js) and/or [.env](.env)/ENV vars

### ...generate all the color values?

Tailwind doesn't like the existing tools and fine-tunes each value. If you'd still like to use a builder, we recommend [Material Design Color Generator by @mbitson](http://mcg.mbitson.com/) ([view on GitHub](https://github.com/mbitson/mcg) for the finer details).

1. Select a color
2. Click the clipboard icon towards the top-right of the color card
3. Select "Material UI Next (React)"
4. Copy lines 3-12 (and optionally, 13-17) into the "colors" section of [tailwind.config.js](tailwind.config.js)
5. Restart Gatsby and enjoy your new hue!

### ...change the webfonts?

Update the `googleFonts` section in [config/SiteConfig.js](config/SiteConfig.js).

The starter is already set up for Google Fonts. We use [gatsby-plugin-google-fonts-v2](https://github.com/pocorschi/gatsby-plugin-google-fonts-v2), which has support for variable fonts.

Make sure to add your new font to the `fontFamily` section of [tailwind.config.js](tailwind.config.js)!

### ...change the favicon?

Replace [favicon.svg](src/assets/images/favicon.svg) with your own SVG data, or update the `icon` path in the `manifestOptions` of [config/SiteConfig.js](config/SiteConfig.js)
