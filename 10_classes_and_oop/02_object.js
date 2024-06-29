function multipleBy5(num){
    return num*5

}
multipleBy5.power = 4
// console.log(multipleBy5(6));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function usercreate(userName,score){
        this.userName=userName
        this.score=score
    
    }
    usercreate.prototype.increment = function(){
        this.score++
    }
    
    usercreate.prototype.printMe = function(){
        console.log(`Name is: ${this.userName}`);
        console.log(`Value is: ${this.score}`);
    }


    const code = new usercreate("anu",100)
    
 
code.printMe()
