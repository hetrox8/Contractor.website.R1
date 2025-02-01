const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Contact = require('../models/Contact');

// Home Page
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort('-createdAt').limit(3);
    res.render('pages/home', { projects });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// Services Page
router.get('/services', (req, res) => {
  res.render('pages/services');
});

// Projects Page
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort('-createdAt');
    res.render('pages/projects', { projects });
  } catch (err) {
    console.error(err);
    res.redirect('/');
  }
});

// Contact Page
router.get('/contact', (req, res) => {
  res.render('pages/contact');
});

router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.redirect('/contact?success=true');
  } catch (err) {
    console.error(err);
    res.redirect('/contact?error=true');
  }
});

module.exports = router;  // ✅ Export the router
