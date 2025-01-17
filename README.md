# Catppuccin Theme
> We used the hype theme as the basis to build this on top.
> [This is the original](https://github.com/Eugeny/tabby-theme-hype)
#### For the Tabby terminal

# Installing

## Hacking

Tabby layout is based on Bootstrap 4, so the easiest way is to base the theme on Bootstrap as well.

The styles are located in the [theme.scss](https://github.com/Eugeny/tabby-theme-hype/blob/master/src/theme.scss) file. It starts with a few Bootstrap variable overrides, then Bootstrap itself is included, and then there are some more direct style overrides.

Adjust the theme name and terminal background color in [index.ts](https://github.com/Eugeny/terminus-theme-hype/blob/master/src/index.ts)

Clone this repository and run:

```
npm install
```

Start Webpack in the watch mode:

```
npm run watch
```

and your changes to the styles will be rebuilt automatically.

Meanwhile, start Tabby with this plugin included:

```
TABBY_PLUGINS=$(pwd) tabby --debug
```

While Tabby is running, you can reload the plugins by pressing `Ctrl-R` (`Cmd-R` on macOS).

When done, publish your theme to NPM!
