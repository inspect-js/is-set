'use strict';
var test = require('ava');
var isSet = require('./');

test(function (t) {
	t.true(isSet(new Set()));
	t.false(isSet({}));
	t.false(isSet([]));

	t.end();
});
