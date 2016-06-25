import test from 'ava';
import fn from './';

test(async t => {
	const curver = await fn('packstat');

	t.is(curver.version, '1.0.4');
});
