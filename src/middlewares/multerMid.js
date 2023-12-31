import multer from 'multer';
import path from 'path';

// Можно раскомментировать storage для того, чтобы сам multer
// занимался сохранением файлов на жёсткий диск

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, './public/img');
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
//     );
//   },
// });

const upload = multer({
  storage: multer.memoryStorage(), // так multer будет хранить файл в req.file в формате Buffer
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

export default upload;
