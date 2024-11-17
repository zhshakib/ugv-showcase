const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const projectController = require('./projectController');

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.get('/projects', projectController.getProjects);
app.post('/projects', projectController.createProject);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});