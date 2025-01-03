'use strict';

var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Set) {
	/** @type {import('.')} */
	// @ts-expect-error
	exported = function isSet(x) { // eslint-disable-line no-unused-vars
		// `Set` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) {
	/** @type {import('.')} */
	// @ts-expect-error
	exported = function isSet(x) { // eslint-disable-line no-unused-vars
		// `Set` does not have a `has` method
		return false;
	};
}

/** @type {import('.')} */
module.exports = exported || function isSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		if ($setHas) {
			$setHas.call(x, 0);
			if ($mapHas) {
				try {
					$mapHas.call(x, 0);
				} catch (e) {
					return true;
				}
			}
			// @ts-expect-error TS can't figure out that $Set is always truthy here
			return x instanceof $Set; // core-js workaround, pre-v2.5.0
		}
	} catch (e) {}
	return false;
};
