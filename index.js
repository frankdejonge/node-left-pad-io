var fetch = require('isomorphic-fetch');
var qs = require('qs');

module.exports = function (str, len, ch) {
    return fetch('https://api.left-pad.io/?' + qs.stringify({str: str, len: len, ch: ch}))
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.str;
        })
};
