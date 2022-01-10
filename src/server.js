const Express = require('express');
const connectDB = require('./config/db');

require('dotenv').config({ path: './.env' });

const app = Express();

// Body Parser
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

const start = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`REST API on http://localhost:${process.env.PORT}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
start();
