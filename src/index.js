const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require("path")

const authUserRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const postRouter = require('./routes/post')
const categoryRouter = require('./routes/category')

require('dotenv').config()
require('./db/mongoose')

const app = express()
app.use(cors())

const port = process.env.PORT
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name)
    },
  })

const upload = multer({ storage: storage })

  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
  })

app.use('/api/auth-user', authUserRouter)
app.use('/api/user', userRouter)
app.use('/api/post', postRouter)
app.use('/api/categories', categoryRouter)

app.listen(port, () => {

    console.log('Server started on port ' + port)

})