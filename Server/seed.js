const db = require('./db');

// Delete the all the data from the database
db.serialize(() => {
    db.run(`DELETE FROM projects`, (err) => {
        if (err) {
            console.log(err);
        }
    });
})
console.log("Deleted all the data from the database");

// lets have some dummy data
const projects = [
    {
        title: "Awesome Next Js Ecommerce",
        author: "zhshakib",
        url: "https://github.com/zhshakib/awesome-next-js-ecommerce",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, provident. ",
        tech: "Next.js, Tailwind CSS, TypeScript, React, Stripe, Firebase, Framer Motion"
    }
];


db.serialize(() => {
    projects.forEach(project => {
        db.run(`INSERT INTO projects (title, author, url, description, tech) VALUES (?, ?, ?, ?, ?)`, [project.title, project.author, project.url, project.description, project.tech], (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
});

db.all('SELECT * FROM projects', (err, rows) => {
    console.log(rows);
});