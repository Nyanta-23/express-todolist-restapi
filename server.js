const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const allRoutes = require('./src/routes');

app.use(allRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
  // console.log(`Run on http://localhost:${PORT}`);
});