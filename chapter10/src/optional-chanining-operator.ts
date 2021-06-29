export interface IPerson {
    name: string
    age?: number
}
let person: IPerson
// console.log(person.name); //런타임 오류 발생
console.log(person?.name);