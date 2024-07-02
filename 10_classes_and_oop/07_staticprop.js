class user{
   constructor(username){
    this.username=username
   }

   logMe(){
    console.log(`username is ${this.username}`);
   }
   createId(){
    return`1234`
   }

}

const hitesh= new user("hitesh")
console.log(hitesh.createId());




class client extends user{
   constructor(username,email){
      super(username)
      this.email=email
   }
}

const iphone= new client("iphone", "iphone@gmail.com")
iphone.logMe()
console.log(iphone.createId());


