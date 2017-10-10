const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  //uri: 'mongodb://localhost:27017/mean-angular-2', // Databse URI and database name
  uri: 'mongodb://admin:admin@ds121014.mlab.com:21014/movie-rating-mean', // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: 'movie-rating-mean' // Database name
}
