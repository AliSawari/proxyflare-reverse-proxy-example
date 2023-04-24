const express = require("express");
const app = express();

app.use(express.static('./public'));

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`server is up on port ${port}`));