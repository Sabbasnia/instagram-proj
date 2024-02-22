const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description: BCITstragram Lab Project
 *
 * Created Date: 
 * Author:
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile1.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");


// App Function
async function appFunction() {
    // unzip
    await IOhandler.unzip(zipFilePath, pathUnzipped);

    // find images
    let arrayOfImages = await IOhandler.readDir(pathUnzipped);

    // append filter to images
    for (let i = 0; i < arrayOfImages.length; i++) {
        await IOhandler.grayScale(arrayOfImages[i], pathProcessed + '/' + arrayOfImages[i]);
    }
}
appFunction();