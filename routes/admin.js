const express = require('express');
const router = express.Router();

// Admin Routes (example)
router.get('/', (req, res) => {
  res.render('admin/dashboard');
});

module.exports = router;  // ✅ Export the router
