let MYname = "Anu   "
let friendname="Ajya     "

// console.log(MYname.trim().length);

let myHeros=["Dad","Brother"]

let herosPower={
    Dad:"ATM",
    Brother:"GPay",
  


    
    getbrotherpower:function(){                             
        console.log(`bro power is : ${Brother}`);
    }  

}

// this prototype is accrssed by all object,array and strings

Object.prototype.Ajya = function(){                     
    console.log(`ajya present in all object`);
}


// this prototype is accrssed by all array 
Array.prototype.hiajya = function(){
    console.log(`hello ajya....`);
}

// herosPower.Ajya()
// myHeros.Ajya()
// myHeros.hiajya()
// herosPower.hiajya()



//***********************Inheritance******************************* */


const demo={
    username:"rupanzal",
    email:"rupanzal@gmail.com"
}

const teacher={
    makevedio:true
}


const teachingsupport=function(){
    isAvaliable : false
}

const teachersupport = {
    makeAssignment :"javascript Assignment",
    fullTime: true,
    __proto__ : teachingsupport
}

teacher.__proto__ = demo

Object.setPrototypeOf(teachingsupport,teacher)

let anotherusername = "chaiaurcode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is :${this.trim().length}`);
}

anotherusername.trueLength()