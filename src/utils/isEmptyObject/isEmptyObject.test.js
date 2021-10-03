import isEmptyObject from './index'

describe("isEmptyObject", () => {
    const testCases = [
        {
            obj: {},
            expected: true,
        },
        {
            obj: {a: "b"},
            expected: false,
        }
    ];

    testCases.forEach(testCase => {
        it(
            `should correctly return ${
                testCase.expected.toString()
            } for the object "${
                JSON.stringify(testCase.obj)
            }""`,
            () => {
                expect(isEmptyObject(testCase.obj)).toEqual(testCase.expected);
            }
        );
    });
});
