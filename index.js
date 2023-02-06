const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
const path=require("path");

app.use(express.static('client/build'));
 app.get('*', (req, res) => {
    res.sendFile(path.resolve('client','build','index.html'));
 });