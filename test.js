import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.same(result.css, output);
            t.same(result.warnings().length, 0);
        });
}

test('transform :not-first-child', t => {
    return run(t, 'div:not-first-child {}', 'div:not(:first-child) {}', { });
});

test('transform :not-last-child', t => {
    return run(t, 'div:not-last-child {}', 'div:not(:last-child) {}', { });
});

test('transform :not-first-child', t => {
    return run(t, 'div:not-first-child:before {}', 'div:not(:first-child):before {}', { });
});

test('transform :not-first-child and :not-last-child', t => {
    return run(t, 'div:not-last-child:not-first-child {}', 'div:not(:last-child):not(:first-child) {}', { });
});

test('transform :not-first-child and :not-last-child', t => {
    return run(t, 'div:not-first-child:nth-child(odd):not-last-child {}', 'div:not(:first-child):nth-child(odd):not(:last-child) {}', { });
});

test('do nothing', t => {
    return run(t, 'div:not(:first-child) {}', 'div:not(:first-child) {}', { });
});

test('do nothing', t => {
    return run(t, 'div:not(:last-child) {}', 'div:not(:last-child) {}', { });
});

test('do nothing', t => {
    return run(t, 'div {}', 'div {}', { });
});
