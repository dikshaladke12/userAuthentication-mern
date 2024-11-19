import multer, { diskStorage } from "multer";
import { extname } from "path";

const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./UserImages");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + extname(file.originalname));
    }
})

const filefilter = (req, file, cb) => {
    const filetype = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!filetype.includes(file.mimetype)) {
        return cb(new Error("this file type is not allowed"));
    }
    cb(null, true);
}

export const helperUpload = multer({
    storage: storage,
    fileFilter: filefilter,
    limit: { filesize: 50 * 1024 * 1024 }
}).single("UserImages");
