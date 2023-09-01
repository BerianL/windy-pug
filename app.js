const PORT = 3030;
const express = require('express');
const indexRouter = require('./routes/index');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use("/", indexRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
