function oldLibraby(input) {
    let goalBook = input[0];
    let index = 1;
    let curBook = input[index];
    let bookIsFound = false;

    while (curBook !== "No More Books") {
        if(curBook === goalBook) {
            bookIsFound = true;break;
        }
        index++;
        curBook = input[index];
    }

    if(bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
oldLibraby(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])