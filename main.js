function createApp(){
    const cars = [];

    return {
        add(car){
            cars.push(car);
        },

        show(){
            console.log(cars);
        }
    }
}

const app = createApp();
/* Khi khởi tạo biến app = createApp() thì createApp() sẽ
 trả về khúc return cho thằng app sài 
 Thằng app chỉ sài đc 2 hàm trong return thôi
 
 app.cars sẽ k đc vì cars k có trong return 
 */
app.add('BMW')
// Khi app thêm BMW vào cars được vì hàm add sử dụng được biến ở ngoài chứ thằng 
// chứ thằng app k bao giờ truy cập đến mảnh cars đc

app.show()