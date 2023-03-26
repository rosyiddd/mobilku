const sharp = require("sharp");
const convertTograyscale = (size, file) => {
    sharp(`./public/images/${file}`)
        .rotate()
        .resize(size)
        .jpeg({ mozjpeg: true })
        .toFile(`./public/images/${size}/${file}`, (err, info) => {
            console.log('File has successfully resized.')
        })
}

module.exports = convertTograyscale