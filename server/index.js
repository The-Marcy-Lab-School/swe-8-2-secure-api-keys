const path = require('path');
const express = require('express');
// TODO: Use the dotenv package to load environment variables

const app = express();

const pathToDistFolder = path.join(__dirname, '../frontend/dist');
const serveStatic = express.static(pathToDistFolder);

// Static Server Middleware
app.use(serveStatic);

// TODO: Add your GIPHY API endpoints and controllers here

// Listen for requests on port 8080
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 