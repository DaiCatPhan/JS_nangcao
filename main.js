
function Animal(name , weight){
    this.name = name;
    this.weight = weight
}

function Parrot(){
    Animal.apply(this,arguments)
    this.speak = function(){
        console.log('Nha co khac');
    }
}

const conVet = new Parrot('Vet' , 300)

console.log(conVet);