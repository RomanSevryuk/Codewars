//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
        return "Hello, World!"
    } else {
        let nameLowerCase = name.toLowerCase();
        let firstCharacter = name[0];
        let outputName = firstCharacter.toUpperCase() + nameLowerCase.slice(1);
        return "Hello, " + outputName + "!";
        
    }    
}
  
console.log(hello("roMAN"))