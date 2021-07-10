const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getOffice", () => {
        const testEmployee = new Manager("Josh", 1, "theEldestElder@gmail.com", 15);
        it("should return 15 when getOffice is called", () => {
            expect(testEmployee.getOffice()).toEqual(15);
        });
        it("should not return 20 when getOffice is called", () => {
            expect(testEmployee.getOffice()).not.toEqual(20);
        });
    });

    describe("getRole", () => {
        const testEmployee = new Manager("Melissa", 48, "frownyMinnesotan@msnbc.org", 506);
        it("should return Manager when getRole is called", () => {
            expect(testEmployee.getRole()).toEqual("Manager");
        });
        it("should not return Engineer when getRole is called", () => {
            expect(testEmployee.getRole()).not.toEqual("Engineer");
        });
    });
});