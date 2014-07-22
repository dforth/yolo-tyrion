module.exports = {
    default: {
        port: 80,
        data_location: __dirname + '/../data/',
        rest_base_url: '/api/*',
        static_site_root: __dirname + '/../build'
    },
    test: {
        port: 8080,
        data_location: __dirname + '/../data/',
        rest_base_url: '/api/*',
        static_site_root: __dirname + '/../build'
    }
};
