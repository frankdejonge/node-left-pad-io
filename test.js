var leftpad = require("./");
var test = require("tape");

test('left pad', function (assert) {
    assert.plan(4);

    leftpad('foo', 5).then(function (response) {
        assert.strictEqual(response, '  foo');
    });

    leftpad('foobar', 6).then(function (response) {
        assert.strictEqual(response, 'foobar');
    });

    leftpad(1, 2, 0).then(function (response) {
        assert.strictEqual(response, '01');
    });

    leftpad(1, 2, '-').then(function (response) {
        assert.strictEqual(response, '-1');
    });
});
