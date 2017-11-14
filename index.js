"use strict";

function plurSelector(value, one, few, many, hash) {
    one = one || "";
    few = few || "";
    many = many || "";
    if (hash[value]) {
        return hash[value];
    }

    var n = Math.abs(value);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return many;
    }

    n %= 10;
    if (n === 1) {
        return one;
    }

    if (n >= 2 && n <= 4) {
        return few;
    }

    return many;
};

var numRgx = /#/;
function pluralize(value, data) {
    var hash = data.hash;
    var selected = plurSelector(value, hash.one, hash.few, hash.many, hash);
    if (selected.match(numRgx)) {
        return selected.replace(numRgx, value);
    }

    return selected;
};

module.exports = pluralize;