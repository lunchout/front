import isEmptyStr from './index'

describe("isEmptyStr", () => {
    const testCases = [
        {
            str: "",
            expected: true,
        },
        {
            str: " ",
            expected: true,
        },
        {
            str: "test",
            expected: false,
        }
    ];

    testCases.forEach(testCase => {
        it(
            `should correctly return ${
                testCase.expected.toString()
            } for the string "${
                testCase.str
            }""`,
            () => {
                expect(isEmptyStr(testCase.str)).toEqual(testCase.expected);
            }
        );
    });
});
