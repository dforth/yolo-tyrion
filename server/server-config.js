module.exports = {
    default: {
        port: 5000,
        data_location: __dirname + '/../data/',
        rest_base_url: '/api/*',
        static_site_root: __dirname + '/../build'
    },
    test: {
        port: 5000,
        data_location: __dirname + '/../data/',
        rest_base_url: '/api/*',
        static_site_root: __dirname + '/../build'
    }
};
