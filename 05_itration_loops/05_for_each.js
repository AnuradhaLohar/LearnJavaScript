///forEach loop

const pro = ["ironman","Thor","dr.strange","natasha","wanda","mr.america"]


pro.forEach( function (val) {
    //console.log(val);
} )

pro.forEach((val1) => {
        //console.log(val1);
})

function printme(val1){
    //console.log(val1);
}
pro.forEach(printme)


pro.forEach( (val1,index,pro) => {
    //console.log(index,val1,pro);
  }
)
 
const arr = [
    {
        username : "anu",
        userid : 1

    },
    {
        username : "ajyya",
        userid : 2

    },
    {
        username : "kk",
        userid : 3

    },
    {
        username : "saki",
        userid : 4

    }
]

arr.forEach(  (key) => {
    console.log(key.userid," : ",key.username);

}  )