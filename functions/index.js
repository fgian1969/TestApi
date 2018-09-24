const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');
const config = {
    dev: false,
    buildDir: '.nuxt',
};
const nuxt = new Nuxt(config);
exports.firebaseTestApi = functions.https.onRequest((req, res) => nuxt.render(req, res));
