// config/upload.js
import multer, { diskStorage } from 'multer';
import { extname } from 'path';

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const ext = extname(file.originalname);
        if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
            cb(null, true);
        } else {
            cb(new Error('Formato de arquivo não suportado'));
        }
    }
});

export default upload;
