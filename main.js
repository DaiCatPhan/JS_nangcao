function makeCounter(){
    let count = 0;

    function increase(){
        return ++ count;
    }

    return increase();

}

const increase1 = makeCounter();
console.log( increase1);
