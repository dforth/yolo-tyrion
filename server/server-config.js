module.exports = {
    default: {
        port: 5000,
        data_location: __dirname + '/../data/',
        rest_base_url: '/api/*',
        static_site_root: __dirname + '/../build',
        prerender_service_url: 'http://localhost:3000'
    },
    test: {
        port: 5000,
        data_location: __dirname + '/../data/',
        rest_base_url: '/api/*',
        static_site_root: __dirname + '/../build',
        prerender_service_url: 'http://localhost:3000'
    }
};
