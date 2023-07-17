;(function(){
    console.log(123);
})()

// Đây là 1 IIFE

const app = (function(){

    // Private
    const cars = [];
    return {
        get(index){
            return cars[index];
        },
        add(car){
            cars.push(car)
        },
        edit(index , car){
            cars[index] = car;
        },
        delete(index){
            cars.splice(index,1)
        }
    }
})()

app.add('BMW');
app.add('Mes');
app.add('Toyota');
console.log(app.get(1));



