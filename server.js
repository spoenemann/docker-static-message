const express = require('express');
const path = require('path');

const app = express();

const staticPath = path.join(__dirname, 'static');
app.use(express.static(staticPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

const port = 8080;
app.listen(port, () => console.log(`Static page running on port ${port}...`));
