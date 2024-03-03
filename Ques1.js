let input = "Hello, world!";

setTimeout(() => {
    let reversedString = input.split("").reverse().join("");
    console.log(reversedString);
}, 2000);