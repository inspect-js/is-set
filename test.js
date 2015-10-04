import test from 'ava';
import isSet from './';

test(t => {
	t.true(isSet(new Set()));
	t.false(isSet({}));
	t.false(isSet([]));

	t.end();
});
