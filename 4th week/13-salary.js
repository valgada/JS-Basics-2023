function salary(input) {
    let browsersOpen = Number(input[0]);
    let salary = Number(input[1]);


    for (i = 2; i < input.length; i++) {
        let curBrowser = input[i];

        if (curBrowser === "Facebook") {
            salary -= 150;
        } else if (curBrowser === "Instagram") {
            salary -= 100;
        } else if (curBrowser === "Reddit") {
            salary -= 50;
        }


        if (salary <= 0) {
            break;
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }


}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])