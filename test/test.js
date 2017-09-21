const assert = require("assert");
const hbs = require("handlebars");
const pluralize = require("..");
hbs.registerHelper("pluralize", pluralize);

describe("pluralize", () => {
    const table = [
        {
            template: "Я вижу {{pluralize cats one='# кота' 1='одного кота' 2='двух котов' few='# котов' many='# котов'}}",
            data: { cats: 1 },
            expected: "Я вижу одного кота",
        },
        {
            template: "Я вижу {{pluralize cats one='одного кота' 2='двух котов' few='# котов' many='# котов'}}",
            data: { cats: 2 },
            expected: "Я вижу двух котов",
        },
        {
            template: "Я вижу {{pluralize cats one='# кота' 1='одного кота' 2='двух котов' few='# котов' many='# котов'}}",
            data: { cats: 2 },
            expected: "Я вижу двух котов",
        },
        {
            template: "Я вижу {{pluralize cats one='# кота' 1='одного кота' 2='двух котов' few='# котов' many='# котов'}}",
            data: { cats: 31 },
            expected: "Я вижу 31 кота",
        },
        {
            template: "Я вижу {{pluralize cats one='# кота' 1='одного кота' 2='двух котов' few='# котов' many='# котов'}}",
            data: { cats: 11 },
            expected: "Я вижу 11 котов",
        },
        {
            template: "На столе {{pluralize cats one='# тарелка' 1='одна тарелка' 2='две тарелки' few='# тарелки' many='# тарелок'}}",
            data: { cats: 1 },
            expected: "На столе одна тарелка",
        },
        {
            template: "На столе {{pluralize cats one='# тарелка' 1='одна тарелка' 2='две тарелки' few='# тарелки' many='# тарелок'}}",
            data: { cats: 2 },
            expected: "На столе две тарелки",
        },
        {
            template: "На столе {{pluralize cats one='# тарелка' 1='одна тарелка' 2='две тарелки' few='# тарелки' many='# тарелок'}}",
            data: { cats: 4 },
            expected: "На столе 4 тарелки",
        },
        {
            template: "На столе {{pluralize cats one='# тарелка' 1='одна тарелка' 2='две тарелки' few='# тарелки' many='# тарелок'}}",
            data: { cats: 14 },
            expected: "На столе 14 тарелок",
        },
        {
            template: "На столе {{pluralize cats one='# тарелка' 1='одна тарелка' 2='две тарелки' few='# тарелки' many='# тарелок'}}",
            data: { cats: 42 },
            expected: "На столе 42 тарелки",
        },
        {
            template: "На столе {{pluralize cats one='# тарелка' 1='одна тарелка' 2='две тарелки' few='# тарелки' many='# тарелок'}}",
            data: { cats: 41 },
            expected: "На столе 41 тарелка",
        },
        {
            template: "I see {{pluralize cats one='# cat'  few='# cats' many='# cats'}}",
            data: { cats: 11 },
            expected: "I see 11 cats",
        },
    ];

    for (let i = 0; i < table.length; i++) {
        const testItem = table[i];
        it(`should match result with expected #${i}`, () => {
            const compiled = hbs.compile(testItem.template);
            const result = compiled(testItem.data);
            assert.equal(result, testItem.expected);
        });
    }
});