const express = require('express');
const app = express();

const db = require('./models');

app.use(express.json());

// Routes
const postsRouter = require('./routes/Posts');
app.use('/posts', postsRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server started on port 3001');
  });
});
