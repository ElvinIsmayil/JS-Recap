// Task 1
function isPrime(num) 
{
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 100; i++) 
{
    if (isPrime(i)) {
        console.log(i);
    }
}


// Task 2
let sampleText = `As software developers, the natural tendency is to start developing applications based on your own hands on experience and knowledge right away. 
However, overtime issues in the application arise, adaptations to changes,
and new features happen.`;

let spaceCount = sampleText.split(" ").length - 1;

console.log(spaceCount);


// Task 3
const fruits = ["apple", "banana", "watermelon", " orange  ", "pineapple", "pomegranate"];

function findLongestWord(arr) 
{
    return arr
        .map(word => word.trim())
        .reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

const longestWord = findLongestWord(fruits);
console.log(longestWord);

// Task 4
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 


// Task 5
function reverseWordOrder(sentence) 
{
    return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWordOrder("learning js is interesting"));

// Task 6
const users = [
    { id: 1, name: "Orkhan Mammadov", age: 28, gender: "Male", city: "Baku", email: "orxan.m@mail.com" },
    { id: 2, name: "Leyla Aliyeva", age: 24, gender: "Female", city: "Ganja", email: "leyla.a@mail.com" },
    { id: 3, name: "Rashad Guliyev", age: 30, gender: "Male", city: "Sumqayit", email: "reshad.q@mail.com" },
    { id: 4, name: "Aytan Hasanova", age: 26, gender: "Female", city: "Shaki", email: "ayten.h@mail.com" },
    { id: 5, name: "Elvin Karimov", age: 32, gender: "Male", city: "Lankaran", email: "elvin.k@mail.com" },
    { id: 6, name: "Nigar Rahimli", age: 27, gender: "Female", city: "Mingachevir", email: "nigar.r@mail.com" },
    { id: 7, name: "Tural Abbasov", age: 29, gender: "Male", city: "Barda", email: "tural.a@mail.com" },
    { id: 8, name: "Aysel Mammadova", age: 23, gender: "Female", city: "Khachmaz", email: "aysel.m@mail.com" },
    { id: 9, name: "Murad Aliyev", age: 31, gender: "Male", city: "Shamakhi", email: "murad.a@mail.com" },
    { id: 10, name: "Gulnar Gasimova", age: 25, gender: "Female", city: "Zagatala", email: "gulnar.q@mail.com" }
];

const youngUserCount = users.filter(user => user.age < 30).length;
console.log("Users younger than 30:", youngUserCount);

const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log("Average age:", averageAge);

const emails = users.map(user => user.email);
console.log("Emails:", emails);

const femaleUsers = users.filter(user => user.gender === "Female");
console.log("Female users:", femaleUsers);

const maleUsers = users.filter(user => user.gender === "Male");
console.log("Male users:", maleUsers);
