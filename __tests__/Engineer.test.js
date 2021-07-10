const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getGithub", () => {
        const testEmployee = new Engineer("Martin", 7, "martin@yahoo.com", "xX_martinTheGamer_Xx");
        it("should return xX_martinTheGamer_Xx when getGithub is called", () => {
            expect(testEmployee.getGithub()).toEqual("xX_martinTheGamer_Xx");
        });
        it("should not return xX_TheGamer_Xx when getGithub is called", () => {
            expect(testEmployee.getGithub()).not.toEqual("xX_TheGamer_Xx");
        });
    });

    describe("getRole", () => {
        const testEmployee = new Engineer("Tyler", 1337, "tylerTheBest@umn.edu", "xX_TheGamer_Xx");
        it("should return Engineer when getRole is called", () => {
            expect(testEmployee.getRole()).toEqual("Engineer");
        });
        it("should not return Manager when getRole is called", () => {
            expect(testEmployee.getRole()).not.toEqual("Manager");
        });
    });
});