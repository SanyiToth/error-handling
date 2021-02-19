//1
function upperCase(string) {
    if (typeof string === "string") {
        let capital = ""
        Array.from(string).forEach((char) => {
            capital += char.toUpperCase()
        })
        return capital
    } else {
        throw TypeError(`${string} is not a string!`);
    }
}

console.log(upperCase("próba"))
console.log(upperCase(33))

//2
