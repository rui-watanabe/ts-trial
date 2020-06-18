export class User {
    public age: number;
    public familyName: string;
    public firstName: string;
    constructor (familyName: string, firstName: string, age: number)
    {
        this.age = age;
        this.familyName = familyName;
        this.firstName = firstName;
    }
}