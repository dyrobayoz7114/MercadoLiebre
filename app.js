const express = require('express');
const path = require ('path');
const app = express();
const directorioPublico =path.join(__dirname, 'public');
app.use(express.static(directorioPublico));
app.get('/',(req,res) =>{ res.sendFile(path.resolve(__dirname,'./views/index.html'))});
app.listen(3000, () => console.log('Esto fue exitoso'));