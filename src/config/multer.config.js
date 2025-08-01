import multer from "multer";
import fs from "fs";
import path from "path";

const tmpDir = path.resolve("./tmp");
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./tmp");
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const originalName = file.originalname;

    cb(null, `${timestamp}-${originalName}`);
  },
});

export default storage;
