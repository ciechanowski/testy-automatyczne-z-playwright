// your task:
// 1. Declare an interface with name UserData and fields:
// - id with type number
// - fullName with type string
// - pass with type string
// - optional field data with type string
// 2. Create two objects of type UserData:
// - fill them with You own data
// 3. Display on console both objects
// 4. Change value of id in both objects:
// - change id from first object with value from second object
// - change id from second object with value from first object
// 4. Display on console both objects

// to test your solution in terminal you can run following command:
// npm run ex2-1

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------
interface UserData {
    id: number;
    fullName: string;
    pass: string;
    data?: string;
}

const user1: UserData = {
    id: 1,
    fullName: 'John',
    pass: '1234',
    data: 'Some data'
};

const user2: UserData = {
    id: 2,
    fullName: 'Bob',
    pass: '4321'
};

console.log(user1);
console.log(user2);

const id1 = user1.id;
const id2 = user2.id;

console.log(user1);
console.log(user2);

// interface UserData {
//     id: number;
//     fullName: string;
//     pass: string;
//     data?: string;
// }

// const John: UserData = {
//     id: 1,
//     fullName: 'John',
//     pass: '1234',
//     data: 'Some data'
// };

// const Bob: UserData = {
//     id: 2,
//     fullName: 'Bob',
//     pass: '4321'
// };

// console.log(John);
// console.log(Bob);

// const changeJohn: UserData = {
//     id: Bob.id,
//     fullName: 'John',
//     pass: '1234',
//     data: 'Some data'
// };

// const changeBob: UserData = {
//     id: John.id,
//     fullName: 'Bob',
//     pass: '4321'
// };

// console.log(changeJohn);
// console.log(changeBob);

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see (sample output):
// { id: 1, fullName: 'John', pass: '1234', data: 'Some data' }
// { id: 2, fullName: 'Bob', pass: '4321' }

// after change of IDs:

// { id: 2, fullName: 'John', pass: '1234', data: 'Some data' }
// { id: 1, fullName: 'Bob', pass: '4321'
