const db = require('./db')

const getProjects = async (req, res) => {
    db.all('SELECT * FROM projects', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Database Error" });
        } else {
            rows.forEach(row => {
                row.tech = row.tech.split(',');
            });
            res.status(200).send(rows);
        }
    });
}

const createProject = async (req, res) => {
    const { title, author, url, description, tech } = req.body;
    db.run(`INSERT INTO projects (title, author, url, description, tech) VALUES (?, ?, ?, ?, ?)`, [title, author, url, description, tech], (err) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Database Error" });
        } else {
            res.status(200).send({ message: "Project Created" });
        }
    });
}

module.exports = {
    getProjects,
    createProject
}