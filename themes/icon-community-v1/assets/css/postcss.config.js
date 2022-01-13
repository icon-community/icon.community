const themeDir = 'themes/icon-community-v1/'
module.exports = {
    plugins: [
        require('postcss-import')({
            path: [themeDir],
        }),
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        }),
    ],
};