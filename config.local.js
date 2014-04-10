module.exports = {
    host_url: "http://localhost:6284",      // mounted on this url
    base: "/",                              // add a base url path. e.g: "/auth"
    base_api: "/api",                       // api base path
    port: 6284,
    bind: "0.0.0.0",                        // bind to an ip

    debug: false,                           // add stack trace & infos in errors

    /* uncomment to use ssl
    ssl: {
        key: '/path/to/key',
        certificate: '/path/to/crt',
        ca: '/path/to/ca'
    },
    */

    staticsalt: 'xIH1u6E3SZ79WG44g8cW6y4nlvdMN1AY',
    publicsalt: 'IGMja6AmuLs8Ea3qrbGgovJmgBYqFd4B',

    redis: {
        port: 6379,
        host: process.env['REDIS_PORT_6379_TCP_ADDR'],
        // password: '...my redis password...',
        // database: ...0~15...
        // options: {...other options...}
    },

    plugins: [
        'server.statistics',
        'server.admin.auth',
        'server.request',
        'server.admin'
    ]
}
if (require('fs').existsSync(__dirname + '/config.local.js')) {
    var override = require('./config.local.js');
    for (var i in override)
        module.exports[i] = override[i];
}
