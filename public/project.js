/*const express = require('express');
const app = express();
const port  = 3000;
const projects = [{
    id: 1, title:"Project A",
    description : "A project"
}, {id: 2,title:"Project B",
    description: "Another project"
}];

app.use(express.static('public'));
app.use(express.json());
app.length('/api/projects',(req,res) => {
    res.json(projects);
});
app.listen(port, () => {console.log(`Server running on ${port}`);});
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// POST endpoint to add a new project
app.post('/add-project', (req, res) => {
  const newProject = req.body;

  const filePath = path.join(__dirname, 'data', 'projects.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read data' });

    const projects = JSON.parse(data);
    projects.push(newProject);

    fs.writeFile(filePath, JSON.stringify(projects, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to save project' });

      res.json({ message: 'Project added successfully!' });
    });
  });
});*/

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// POST endpoint to add a new project
app.post('/add-project', (req, res) => {
  const newProject = req.body;

  const filePath = path.join(__dirname, 'data', 'projects.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to read data file' });
    }

    const projects = JSON.parse(data);
    projects.push(newProject);

    fs.writeFile(filePath, JSON.stringify(projects, null, 2), err => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to save the project' });
      }

      res.json({ success: true, message: 'Project added successfully!' });
    });
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

