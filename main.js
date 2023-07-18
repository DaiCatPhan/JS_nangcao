const iPhone7 = {
    // Thuoc tinh  - Property
    name: 'iPhone7',
    color: 'Pink',
    weight: 300,

    // Phuong thuc - Methods
    takePhoto(){
        console.log(this);
    }
}

console.log(iPhone7.takePhoto());

// từ khóa this trong takePhoto() nó sẽ là iPhone7