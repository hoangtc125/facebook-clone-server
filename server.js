require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const multer = require('multer');
const {responseError, callRes} = require('./api/response/error');

const app = express()

// use express.json as middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// connect to MongoDB
const url = process.env.mongoURI;
mongoose.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(`errors: ${err}`)
    );

// use Routes
app.use('/it4788/auth', require('./api/routes/auth'));
app.use('/it4788/friend', require('./api/routes/friend'));
app.use('/it4788/post', require('./api/routes/posts'));
app.use('/it4788/search', require('./api/routes/search'));
app.use('/it4788/comment', require('./api/routes/comments'));
app.use('/it4788/like', require('./api/routes/likes'));
app.use('/it4788/friend', require('./api/routes/friend'));
app.use('/it4788/setting', require('./api/routes/settings'));
app.use('/it4788/user', require('./api/routes/user'));
app.use('/it4788/chat', require('./api/routes/chat'));
app.use(function (err, req, res, next) {
    if(err instanceof multer.MulterError) {
        if(err.code === 'LIMIT_UNEXPECTED_FILE') {
            return callRes(res, responseError.EXCEPTION_ERROR, "'" + err.field + "'" + " không đúng với mong đợi. Xem lại trường ảnh hoặc video gửi lên trong yêu cầu cho đúng");
        }
    }
    console.log(err);
    return callRes(res, responseError.UNKNOWN_ERROR, "Lỗi chưa xác định");
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))
