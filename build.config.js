module.exports = {

    build_dir: 'build',
    compile_dir: 'bin',

    app_files: {
        // source, but NO specs
        js: [ 'src/**/*.js', '!src/**/*.spec.js' ],
        jsunit: [ 'src/**/*.spec.js' ],
        // our partial templates
        atpl: [ 'src/app/**/*.tpl.html' ],
        ctpl: [ 'src/common/**/*.tpl.html' ],
        // the index.html
        html: [ 'src/index.html' ],
        less: ['src/less/main.less', 'src/app/**/*.less'],
        other: ['src/sitemap.xml', 'src/robots.txt']
    },

    test_files: {
        js: [
            'vendor/jquery/jquery.js',
            'vendor/angular-mocks/angular-mocks.js',
            'vendor/jasmine-jquery/lib/jasmine-jquery.js'
        ]
    },

    vendor_files: {
        js: [
            'vendor/lodash/dist/lodash.underscore.js',
            'vendor/angular/angular.js',
            'vendor/angular-cookies/angular-cookies.js',
            'vendor/angular-ui-router/release/angular-ui-router.js',
            'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
            'vendor/moment/moment.js'
        ],
        css: [
            'vendor/bootstrap/dist/css/bootstrap.css'
        ],
        assets: [
        ]
    }
};