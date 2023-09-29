function trekingMania(input) {
    let groupsCount = Number(input[0]);
    
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    let totalPeople = 0;

        for (let i = 1; i < input.length; i++) {
            let num = Number(input[i]);

            if(num <= 5) {
                count1 += num;
            } else if (num <= 12) {
                count2 += num;
            } else if (num <= 25) {
                count3 += num;
            } else if (num <= 40) {
                count4 += num;
            } else {
                count5 += num;
            }
            
            totalPeople = count1 + count2 + count3 + count4 + count5;
        }

     

      let p1 = (count1 / totalPeople) * 100;
      let p2 = (count2 / totalPeople) * 100;
      let p3 = (count3 / totalPeople) * 100;
      let p4 = (count4 / totalPeople) * 100;
      let p5 = (count5 / totalPeople) * 100;

      console.log(`${p1.toFixed(2)}%`);
      console.log(`${p2.toFixed(2)}%`);
      console.log(`${p3.toFixed(2)}%`);
      console.log(`${p4.toFixed(2)}%`);
      console.log(`${p5.toFixed(2)}%`);
      

}
trekingMania(["5",
"25",
"41",
"31",
"250",
"6"])