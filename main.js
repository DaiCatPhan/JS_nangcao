// Ứng dụng closure logger()

function createLogger(namespace){

    function logger(message){
        console.log(`[${namespace}] ${message}`);
    }
    return logger
}

// ============== App ===============

// Ex Register.js

const infoLogger = createLogger('Info')

infoLogger('Bat dau gui mail')
infoLogger('Gui mail loi , gui lai !!!')
infoLogger('Gui mail thanh cong')

// ForgotPassword.js

const errorLogger = createLogger('Error');

errorLogger('Email khong ton tai trong DB')
errorLogger('Gui mai thanh cong')