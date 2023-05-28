module.exports.Config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3331,
    GCP_PROJECT_ID: process.env.DB_HOST || 'localhost'
};