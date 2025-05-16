const express = require('express');
const mongoose = require('mongoose');
const AddProject = require('./models/project');
const cors = require('cors');
const path = require('path');


const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb+srv://athiraks:athira@cluster0.9zdtpjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// GET route - Get all projects
app.get('/api/services', async (req, res) => {
  try {
    const projects = await AddProject.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

// POST route - Add a new project
app.post('/api/services', async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description required' });
  }

  const prjDetails = new AddProject({ id: Date.now(), name, description });

  try {
    await prjDetails.save();
    res.status(200).json({ message: 'Project added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving project' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});



// Additional connection
const contactsDb = mongoose.createConnection('mongodb://localhost:27017/Fullstack/contacts');
contactsDb.on('connected', () => console.log('Connected to contacts database'));


app.use(cors());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// GET route - Get all projects
app.get('/api/services', async (req, res) => {
  try {
    const projects = await AddProject.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching details' });
  }
});

// POST route - Add a new project
app.post('/api/services', async (req, res) => {
  const { name, mobile, email, message } = req.body;

  if (!name || !mobile || !email || !message) {
    return res.status(400).json({ error: 'Data required' });
  }

  const prjDetails = new AddProject({ id: Date.now(), name, mobile, email, message });

  try {
    await prjDetails.save();
    res.status(200).json({ message: 'Message sent!' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending message' });
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


/*const express = require('express');
const mongoose = require('mongoose');
const AddProject = require('./models/project');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Fullstack", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// GET route - Get all projects
app.get('/api/services', async (req, res) => {
  try {
    const projects = await AddProject.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

// POST route - Add a new project or handle contact form submission
app.post('/api/services', async (req, res) => {
  const { name, description, mobile, email, message } = req.body;

  if (description) {
    // Handle project data
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    const prjDetails = new AddProject({ name, description });
    try {
      await prjDetails.save();
      res.status(200).json({ message: 'Project added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving project' });
    }
  } else if (mobile && email && message) {
    // Handle contact form submission
    if (!name || !mobile || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const contactDetails = new AddProject({ name, mobile, email, message });
    try {
      await contactDetails.save();
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving message' });
    }
  } else {
    res.status(400).json({ error: 'Invalid data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
*/