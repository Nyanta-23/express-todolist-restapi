const express = require('express');
const router = express.Router();

const userLogin = require('./user.login');

router.get('/', (req, res) => {
  res.json({
    message: "Welcome to todolist feature"
  });
});

router.get('/api/v1/login');
router.get('/api/v1/register'); 
router.get('/api/v1/user');
router.get('/api/v1/todolists/:id');





module.exports = router;