const express = require('express');
const bodyParser = require("body-parser");
const MahasiswaRoute = require('./src/routes/mahasiswaRoute');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/mahasiswa', MahasiswaRoute);
app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})