"use strict";

const plurSelector = (value, one = "", few = "", many = "", hash) => {
    if (hash[value]) {
        return hash[value];
    }

    let n = Math.abs(value);
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

const numRgx = /#/;
const pluralize = (value, { hash }) => {
    const { one, few, many } = hash;
    const selected = plurSelector(value, one, few, many, hash);
    if (selected.match(numRgx)) {
        return selected.replace(numRgx, value);
    }

    return selected;
};

module.exports = pluralize;