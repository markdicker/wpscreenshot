# wpscreenshot
## Creates a WP theme screenshot

This generates a WP theme screenshot (the image displayed in Apperance.)

    npm i wpscreenshot

You have to pass a config object to the generate function.

    config = {
            width:800,
            height:600,
            filename: 'screenshot.png',
            bgColor: "#ffffff",
            font:'Arial',
            fontPath: "./assets/fonts/arial.ttf",
            fgColor: "#0000ff",
            src: "screenshot-master.png",
            text: "Some Text",
            x:10,
            y:70,
            fontSize:'50px'
        }

Currently you have to supply the path to the font file as well as a name for the font.

The src image will be stretched to fit the width and height, so probably best to use an image thats the same ratio.

I use this with my themeVersion package to generate a screenshot file that has a visible version number.  You can install that with

    npm i themeversion

You can then include that in the text field

    .
    .
    text: "Version: "+version,
    .
    .

### I would consider this an early Beta version so use at your own risk.
