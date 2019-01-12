const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use( "/", require('./routes/index.js'));
app.use(expressLayouts);
app.set('view engine' , 'ejs');


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server start port ${PORT}`));


module.exports = app;
