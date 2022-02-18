const prompt = require("prompt-sync")();


/*Your task is to write a series of functions that execute the following tasks:

xify - returns the same string, but with every character replaced by an 'x'
Examples:
xify('hello') -> 'xxxxx'
xify('hi there') -> 'xxxxxxxx'*/

/*#1
console.log(xify("hellow"));
function xify(str) {
let strX = "";
    for (let index = 0; index < str.length; index++) {
        strX += 'x';
    
}
    return strX;
 
}*/
/*
yellingChars - returns the given string with an exclamation point after each character
Examples:
yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'*/



//#2

/*console.log(New("hello"));
function New(Str) {
  let newString = "";
    let x = "!";
for (let i = 0; i < Str.length; i++) { 
    newString+=Str[i]
    newString += "!";
    
}
    return newString;
}*/

//question 3

/*We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
indexedChars - adds the index of each character before that character in the given string
Examples:
indexedChars('hello') -> '0h1e2l3l4o'
indexedChars('bye') -> '0b1y2e'*/

/*
{console.log(Bracket("hello"));}

function Bracket(string) {
    let str = "";
    let number = 0;
    for (let i = 0; i < string.length; i++) {
    
                    // newString = "'"+(str.length-5+"h")+(str.length-4+"e")+(str.length-3+"l")+(str.length-2+"l")+(str.length-1+"o"+"'");
      
  str  = str + number++ + string[i];                                 

}
return "'" + str + "'"  */
//}
/*
- adds the number of each character before that character in the given string
Examples:
numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
numberedChars('bye') -> '(1)b(2)y(3)e'*/

/*function Num(string) {

    let str = "";
    let number = 1;
    for (let i = 0; i < string.length; i++) {
        str = str + number++ + string[i];

    }
return str;
}

console.log(Num("hello world"));*/
/*
exclaim - returns the given sentence with every question mark or period changed to an exclamation point
Examples:
exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
exclaim('This is fine.') -> 'This is fine!' */
/*
function change(string){
let str = "";
let a = "!";
let b = "?";
for (let i = 0; i < string.length; i++) {
    if (string[i]==="?"||string[i]===".") {
        str=str + "!"

    }else {
        str = str + string[i]
    }
    
}
return str;
}
console.log(change("hello.goodbye?"))*/

/*
repeatIt - returns the given string repeated n times, where n is the second parameter
Examples:
repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'*/

/*
function repeat(input,num){

let str = "";

for (let i = 0; i < num; i++) {
   console.log("this is what str = before ex "+str)
    str = str + input;
   console.log("this is what str is after "+str)
}   
return str;
}
console.log(repeat("hello",3));
 */


/*
truncate - shortens a long string to 15 characters plus an ellipsis (...)
Examples:
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."*/
//run loop 15 times//



                                        //i need this function to cut off the series of char in strings to 15
                                        //i also need to add brackets to the begining and the end (<=====>)
                                        //console.log("any")<=====this will be put in before and after my program in my for loop
  /* function trunk(string){
let str = "";
let a = "(...)"
//let num = 15
for (let i = 0; i < 15; i++) {
    str = str + string[i]
    
}

return str+a;
    }
    console.log(trunk("hello mt name is dan and i love carots" ));*/

                                                            /*ciEmailify - creates an email from a two-part name
                                                             ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
                                                            ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'*/

/*
function email(first,last) {
let first1 = ""    
let last2 = ""
let email = "@codeimmersives.com"
let period = "."
for (let i = 0; i < last[i]; i++) {
    //i need to add a "." at the end of first
    first1 = first1 + first[i]
    last2 = last2 +last[i]
    result = first1+period+last2+email

}
return first+period+last+email;


}
console.log(email("john","Rothwell"));*/

                                                                /*reverse - reverses the given string
                                                                Examples:
                                                                reverse('colin') -> 'niloc'
                                                                reverse('mesuara') -> 'arausem'*/

   /* function reverse(string) {
        let str = ""
    
        for (let i = string.length -1; i >=0; i--) {
       str += string[i]
        
    }
    return str;
    
    }
    console.log(reverse("hello"));
    */                                                          /*
                                                                returns only the vowels from a word
                                                                Examples:
                                                                onlyVowels('Colin Jaffe') -> 'oiae'
                                                                onlyVowels('quickly') -> 'ui'
                                                                onlyVowels('Anthony DeRosa') -> 'Aoeoa'*/
      

    function vowles(string) {
    let v1  = ["a","e","y","i","o","u"];        
 
    let str = "";
    for (let i = 0; i < string.length; i++) {

    if (string[i]==="a"|| string[i] === "e"||string[i]==="y"||string[i]==="i"||string[i]==="o"||string[i]==="u") {
           
      str = str += string[i]

    }

    
    

}                                        
   return str                                                           
    }

    console.log(vowles("hello my name is dan"));