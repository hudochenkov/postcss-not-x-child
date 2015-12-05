var postcss = require('postcss');

module.exports = postcss.plugin('postcss-not-x-child', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkRules(function (rule) {
            var selector = rule.selector;

            if (selector.indexOf(':not-first-child') !== -1) {
                selector = selector.replace(':not-first-child', ':not(:first-child)');
            }

            if (selector.indexOf(':not-last-child') !== -1) {
                selector = selector.replace(':not-last-child', ':not(:last-child)');
            }

            rule.selector = selector;
        });
    };
});
