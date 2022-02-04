const express = require('express');
const router = express.Router();
const multer  = require('multer');

//=================================
//             Product
//=================================

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
const upload = multer({ storage: storage }).single("file")

router.post('/image', (req, res) => {

    // 가져온 이미지를 저장한다.
    upload(req, res, err => {
      if(err) {  // 실패 시 에러 전달
          return req.json({ success: false, err}) 
      }  // 성공 시 파일 경로와 파일 이름 전달
        return res.json({ success: true, filePath:res.req.file.path, fileName: res.req.file.filename }) 
    })


})







module.exports = router;
