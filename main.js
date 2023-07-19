const teacher = {
    firstName: 'Minh ',
    lastName: 'Thu',
}

const me = {
    firstName: 'Son',
    lastName: 'Dang',
    showFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

me.showFullName.call(teacher)

// Kỉ thuật mượn hàm showFullName cho teacher 



// bind chỉ bind this rồi trả ra cái hàm mới, this mới
// call là by this rồi gọi luôn cái hàm đó