### So sánh bind() , call() , apply()


Giống nhau :

    - Cú pháp truy cập

    function fn() {}

    // bind
    fn.bind()

    //call
    fn.call()

    // apply
    fn.apply()

    - Là các methods được thừa kế từ  Function protoype

Khác nhau :

    - Các đối số và cách hoạt động 

    + Bind method
        . Trả ra hàm mới với 'this' tham chiếu tới 'thisArg'
        . Không thực hiện gọi hàm
        . Nếu được bind kèm 'arg1 , arg2 , ... thì các đối số này sẽ được ưu tiên hơn
    
    + Call method
        . Thực hiện bind 'this' với 'thisArg' và thực hiện gọi hàm
        . Nhân các đối số cho hàm gốc từ 'arg1 , arg2 , ...'

    + Apply method 
        . Thực hiện bind 'this' với 'thisArg' và thực hiện gọi hàm
        . Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng '[arg1 , arg2 , ..]

        