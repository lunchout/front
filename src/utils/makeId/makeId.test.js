import makeId from './index';

describe("makeId", () => {
    const length = 12;

    const id1 = makeId(length);
    const id2 = makeId(length);

    const idDefault1 = makeId();
    const idDefault2 = makeId();

    it("should generate different random ids", () => {
        expect(id1 === id2).toBeFalsy();
    });

    it(`should generate ids of length ${length}`, () => {
        expect(id1.length).toBe(length);
    });

    it("should generate different random ids with a default length", () => {
        expect(idDefault1 === idDefault2).toBeFalsy();
    });

    it("should generate ids of length 8 by default", () => {
        expect(idDefault1.length).toBe(8);
    });
});