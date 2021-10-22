# Linaria PostCSS

Initially this NPM package was supposed to provide a helper to use PostCSS as the loader for Linaria. However, PostCSS requires you to use their asynchronous API (you can use their sync API, but that makes a lot of plugins incompatible), which isn't possible since you can only provide a sync function to the `preprocessor` option in the Linaria config.

This led to me realise a much better approach would be to separate the concerns of linaria and the preprocessor. You could set the `preprocessor` option to `none` in Linaria and use whichever preprocessor you like through your bundler. For example, in Webpack you could use the `postcss-loader` to use PostCSS.

If you've tried using Linaria with Nextjs, which uses PostCSS to process all CSS, PostCSS should work out of the box. Although I suggest you set the `preprocessor` option to `none` in the Linaria config to avoid any conflicts because otherwise you'd be using both Stylis (default preprocessor used by Linaria) and PostCSS.
