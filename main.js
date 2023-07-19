function Animal(name , weight){
    this.name = name;
    this.weight = weight;
}

function Chicken(name , weight , legs){
    Animal.call(this,name , weight)
    this.legs = legs;
}


const SonDang = new Chicken('Son Dang' , '60' ,'2');
console.log(SonDang);
//--> Chicken {name: 'Son Dang', weight: '60', legs: '2'}

// Tinh ke thua
