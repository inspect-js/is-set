'use strict';
var test = require('ava');
var isSet = require('./');

test(function (t) {
	t.assert(isSet(new Set()));
	t.assert(!isSet({}));
	t.assert(!isSet([]));
});
