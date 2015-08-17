
module.exports = {
  db: process.env.MONGODB || process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/communitymanager',

  sessionSecret: process.env.SESSION_SECRET || 'dedewd$7@9@9393(0|!ij',
};