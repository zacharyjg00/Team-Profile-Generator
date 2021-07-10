const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getSchool", () => {
        const testEmployee = new Intern("Zach", 52, "zachIsTheBestCoder@YouAlreadyKnowIt.gov", "University of Minnesota");
        it("should return University of Minnesota when getSchool is called", () => {
            expect(testEmployee.getSchool()).toEqual("University of Minnesota");
        });
        it("should not return Texas A&M when getSchool is called", () => {
            expect(testEmployee.getSchool()).not.toEqual("Texas A&M");
        });
    });

    describe("getRole", () => {
        const testEmployee = new Intern("Abby", 9, "taterTot@clearlyApotato.net", "Local Highschool");
        it("should return Intern when getRole is called", () => {
            expect(testEmployee.getRole()).toEqual("Intern");
        });
        it("should not return Employee when getRole is called", () => {
            expect(testEmployee.getRole()).not.toEqual("Employee");
        });
    });
});