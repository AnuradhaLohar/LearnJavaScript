function setUser(username){
    this.username=username
    console.log("called");
}

function createUser(username , email,password){
     setUser.call(this,username)
   
    this.email=email
   this.password=password
}

const ironman = new createUser("radha","radha@goooglr.com","12345")
console.log(ironman);