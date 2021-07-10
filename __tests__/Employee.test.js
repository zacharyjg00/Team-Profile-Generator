const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        const testEmployee = new Employee("Bob", 1, "bob@yahoo.com")
        it("should return Bob when getName is called", () => {
            expect(testEmployee.getName()).toEqual("Bob");
        });
        it("should not equal Tom when getName is called", () => {
            expect(testEmployee.getName()).not.toEqual("Tom");
        });
    });

    describe("getId", () => {
        const testEmployee = new Employee("Becky", 2, "becky@umn.edu")
        it("should return 2 when getId is called", () => {
            expect(testEmployee.getId()).toEqual(2);
        });
        it("should not equal 1 when getId is called", () => {
            expect(testEmployee.getId()).not.toEqual(1);
        });
    });

    describe("getEmail", () => {
        const testEmployee = new Employee("Abigail", 3, "abby@gmail.com")
        it("should return abby@gmail.com when getEmail is called", () => {
            expect(testEmployee.getEmail()).toEqual("abby@gmail.com");
        });
        it("should not equal nutterbutter3000@gmail.com when getName is called", () => {
            expect(testEmployee.getEmail()).not.toEqual("nutterbutter3000@gmail.com");
        });
    });

    describe("getRole", () => {
        const testEmployee = new Employee("Andrew", 7647465, "bob@gov.gov")
        it("should return Employee when getRole is called", () => {
            expect(testEmployee.getRole()).toEqual("Employee");
        });
        it("should not equal Manager when getRole is called", () => {
            expect(testEmployee.getRole()).not.toEqual("Manager");
        });
    });
});