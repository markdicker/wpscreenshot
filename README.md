# wpscreenshot
## Creates a WP theme screenshot

This generates a WP theme screenshot (the image displayed in Apperance.)

    npm i wpscreenshot --save-dev

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

    npm i themeversion --save-dev

You can then include that in the text field

    .
    .
    text: "Version: "+version,
    .
    .

To use this in gulp

    async function generateScreenshot() {
        try {
            const version = await tv.getVersion( 'style.css' );

            const result = await wps.generate( config = {
                width:800,
                height:600,
                filename: 'screenshot.png',
                bgColor: "#ffffff",
                font:'Arial',
                fontPath: "./assets/fonts/arial.ttf",
                fgColor: "#ff0000",
                src: "screenshot-master.png",
                text: "Version: "+version,
                x:10,
                y:70,
                fontSize:'50px'
            });

        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Register the Gulp task
    gulp.task( 'screenshot', generateScreenshot );


#### I would consider this an early Beta version so use at your own risk.

### Thanks

This makes use of the npm package PureImage.  You can find out more about that package here

[https://www.npmjs.com/package/pureimage](https://www.npmjs.com/package/pureimage)

