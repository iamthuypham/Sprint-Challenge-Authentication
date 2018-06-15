const { server } = require('./server');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

const config = require('./config.js');
const { dbuser, dbpassword, dbname } = config;
const db = `mongodb://${dbuser}:${encodeURIComponent(dbpassword)}@ds016718.mlab.com:16718/${dbname}`

mongoose.connect(db, {
    useMongoClient: true
  })
  .then(() => {
    console.log('\n... API Connected to Database ...\n');
    server.listen(5500, () =>
      console.log('\n=== API running on port 5000 ===\n')
    );
  })
  .catch(err => {
    console.log('\n*** ERROR Connecting to MongoDB, is it running? ***\n', err);
  });

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
