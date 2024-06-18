/// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
//     
// }

//*********************************************************************** */

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10 ; j++) {
        const element = j;
        
        if (i==2 || i==5) {
             
        // console.log(`${i} * ${j} = ${i*j}`);
        // console.log(`${i} * ${j} =` +  i*j); //another method
        //  console.log(i + " * " + j + " =" + i*j); //another method
        }
       
    }
}

//************************************************************************** */

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if (i==5) {
//         console.log(`5 is best`);
        
//     }
// }


//************************************************************************** */

const arr = ["anu","ajya"]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    
}


//**************************************************************************

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==7) {
        // console.log(`loop continue at.....${i}`); //break statement
        break
        
    }
    // console.log(element);
    
}


//**************************************************************************


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==7) {
        console.log(`loop continue at.....${i}`); // continue statement 
        continue
        
    }
    console.log(element);
}