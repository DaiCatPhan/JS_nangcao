this.firstName = 'Minh';
this.lastName = 'Thu';

const teacher = {
    firstName : 'Minh',
    lastName : 'Thao',
    getFullName (){
        return `${this.firstName} ${this.lastName}`;

    }

}



// Case 1 
console.log(teacher.getFullName()); // "Minh Thao"

// Case 2
const getTeacherName = teacher.getFullName;
console.log(getTeacherName());  // "Minh Thu"

// --> Case 2 : teacher.getFullName chưa gọi hàm nó chỉ truy cập vào hàm
// sau đó nó gán cái function này sang 1 biến khác 
// biến getTeacherName nhận 1 địa chỉ 
// Khi gọi 1 hàm k thông qua 1 đối tượng , k có dấu chấm ở trước thì nó chọc ra bên ngoài windown nên lấy biến ở global luôn


// Ứng dụng bind() 
const getTeacherName_bind = teacher.getFullName.bind(teacher);
console.log(getTeacherName_bind());  // "Minh Thao" 

// tức nghĩa là thằng bind(teacher) là hiểu là thằng this trong hàm là thằng student chứ
// k phải là thằng nào khác

// Bind có thể nhận nhiều tham số 
// THam số đầu tiên là object để this
// all tham số còn lại là tham số của hàm như thường
