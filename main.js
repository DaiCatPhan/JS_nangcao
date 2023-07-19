 firstName = 'Son'
 lastName ="Dang"

const me ={
    firstName: 'PDC',
    lastName: 'DNV'
}


function showFullName(){
    console.log(`${this.firstName} ${this.lastName}`);
}


showFullName.call(this) // Son Dang
// call mà gọi this thì nó trỏ ra windown

showFullName.call(me) // PDC DNV

