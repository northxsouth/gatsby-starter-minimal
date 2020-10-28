# gatsby-starter-minimal

[Demo](https://gatsby-starter-minimal.netlify.app/)

# What's in the box

* tailwind
* sass
* tailwind -> sass vars
* gatsby / react
* eslint
* prettier
* jest
* sane defaults

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

The starter is already set up for Google Fonts. We use [gatsby-plugin-webfonts](https://github.com/hupe1980/gatsby-plugin-webfonts), which has additional options for CDN, base64, and self-hosted webfonts; update those options in [gatsby-config.js](gatsby-config.js).

Make sure to add your new font to the `fontFamily` section of [tailwind.config.js](tailwind.config.js)!
