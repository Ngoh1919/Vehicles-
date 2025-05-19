import { Router } from 'express';
import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});


const upload = multer({ storage });

const img = Router();

img.post('/api/upload', upload.single('file'), (req, res) => {
    res.json(req.file);
});


export default img;