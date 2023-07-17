// Ứng dụng lưu dữ liệu vào storage

function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key)) ?? {}
    // console.log(store);
    const save = () => {
        localStorage.setItem(key ,JSON.stringify(store) )
    }

    const storage = {
        get(key){
            return store[key];
        },
        set(key , value){
            store[key] = value;
            save()
        },
        remove(key){
            delete store[key] 
            save()
        }
    }
    return storage;
}

const ProfilesSetting = createStorage('profile_setting')

ProfilesSetting.set('fullname' , "Phan Dai Cat")
ProfilesSetting.set('age' , 18)

const a = ProfilesSetting.get('fullname')
console.log(a);





// ?? là nếu ở trước ?? có giá trị undefine hoặc null thì nó sẽ lấy kết quả sau ?? để làm giá trị