// ⦁	Пилешко меню –  10.35 лв. 
// ⦁	Меню с риба – 12.40 лв. 
// ⦁	Вегетарианско меню  – 8.15 лв. 

function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegyMenus = Number(input[2]);

    let chickenMenusSum = chickenMenus * 10.35;
    let fishMenusSum = fishMenus * 12.40;
    let vegyMenusSum = vegyMenus * 8.15;

    let menusSum = chickenMenusSum + fishMenusSum + vegyMenusSum;
    let desert = 20/100 * menusSum;
    let totalSum = menusSum + desert + 2.50;
        console.log(totalSum);
}
foodDelivery(["2","4","3"]);