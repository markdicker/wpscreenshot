const PImage = require( "pureimage" );
const fs = require( "fs" );

async function generateFromPNG( config = null ) {

    if ( config == null )
        return false;

    return new Promise((resolve, reject) => {

        var fnt = PImage.registerFont(
            config.fontPath,
            config.font
        );
        fnt.loadSync();
    
        // console.log( fnt );

        // make image
        PImage.decodePNGFromStream(fs.createReadStream( config.src )).then((img) => {
            
            const img1 = PImage.make( config.width, config.height );
            // get canvas context
            
            const ctx = img1.getContext("2d");

            // fill with red
            // ctx.fillStyle = config.bgColor;
            // ctx.fillRect(0, 0, config.width, config.height );

            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height, // source dimensions
                0,
                0,
                config.width,
                config.height
              );

            ctx.strokeStyle = config.fgColor ;
            ctx.fillStyle = config.fgColor;
            ctx.font = config.fontSize+" '"+config.font+"'";            
            ctx.fillText(config.text, config.x, config.y);

            //write to 'out.png'
            PImage.encodePNGToStream(img1, fs.createWriteStream( config.filename ))
            .then(() => {
                // console.log("wrote out the png file to out.png");
                resolve( true );
            })
            .catch((e) => {
                // console.log("there was an error writing",e);
                resolve ( false );
            });

        });
    })
    .catch((e) => {
        // console.log("there was an error reading src image",e);
        resolve ( false );
    });

}


exports.generate = generateFromPNG;