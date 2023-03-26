const multer = require("multer");
const path = require("path");
const ddd = require('../sharp')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        const name = Date.now() + file.originalname.replace(" ", "")
        req.body.image = `${req.protocol}://${req.get('host')}/images/500/${name}`
        req.filename = name
        cb(null, name);
    },
});

const upload = multer({ storage: storage });

module.exports = upload