/**
     * Con trỏ this
     */
    // Đại diện cho một object(function cũng là một object)
    var person = {
        name: 'Wayne',
        surname: 'Rooney',
        showName: function() {
            console.log("Person's full name: " + this.name + ' ' + this.surname);
            //alert('123abc');
            return this.name + ' ' + this.surname;
        }
    }

    //person.showName();

    function account(username, password) {
        this.usename = username;
        this.password = password;
        console.log('this in account: ');
        console.log(this);
    }

    account('quanghai', '123abc');
    var ac2 = new account('tuananh', '111111');

    // console.log('username ac 1: ' + ac1.usename);
    // console.log('passwoed ac 2: ' + ac2.password);

    /* Các trường hợp gây nhầm lẫn của con trỏ this */

    //Call back funtion
    function login(username, password) {
        setTimeout(() => {
            if (username === 'quanghai' && password === '123abc') {
                console.log('username && password valid');
            }else {
                console.log('username && password invalid');
            }
        }, 3000)
        console.log('Login successfully');
        console.log('welcome ' + username);
    }

    function login(username, password, welcome) {
        setTimeout(() => {
            if (username === 'quanghai' && password === '123abc') {
                console.log('username && password valid');
            }else {
                console.log('username && password invalid');
            }
        }, 3000)
        console.log('Login successfully');
        console.log('welcome ' + username);
    }

    function welcome(username) {
        console.log('welcome ' + username);
    }

    function a(b) {
        b();
    }

    var x1 = 100;

    function b() {
        console.log('x = ' + this.x1);
        console.log(this)
    }
    b();

    function c(person) {
        let fullName = person.showName();
        console.log('full name form person: ' + fullName)
    }

    function d (callback) {
        callback();
    }

    var firstName = "Nhung",
        lastName = "Nguyễn Hồng";

    function showFullName () {
        // Lưu ý: Đây là 1 hàm được định nghĩa trong môi trường global, cùng môi trường với variables "firstName" và "lastName".
        // Do đó, "this" ở trong dây sẽ trỏ (và mang giá trị) của object "window"
        console.log (this.firstName + " " + this.lastName);
    }

    showFullName (); 

    // d(function() {
    //     alert('123abc');
    // })

    //a(b);

    //c(person);

    $('#btn_callback').click(person.showName.bind(person));

    // Closure
    var testclosure = {
        className: "Python04 Frontend",
        data: [1, 2, 3, 4 ],
         showTarget: function () {
            //Sử dụng con trỏ this ở đây thì OK, this đang mang giá trị tham chiếu tới đối tượng testclosure
            console.log('this on show target function: ');
            console.log(this);
            this.data.forEach (function (score) {
                //Tuy nhiên, trong closure này thì this không còn tham chiếu tới đối tượng testclosure nữa
                // Hàm inner function này không thể truy cập tới this của outer function
                console.log('this in closure');
                console.log(this);
                //alert (this.className + " is score " + score);
            })
         }
    }
    
    testclosure.showTarget();

    //Declare variable
    var x = 9;
    var module = {
        x: 81,
        getX: function () {
            return this.x;
        }
    };

    console.log('get x by modlue: ' + module.getX()); // 81

    var getX = module.getX;

    console.log('get x by window: ' + window.x);
    //getX(); // 9, bởi vì this ở đây tương ứng với biến global

    // create a new function with 'this' bound to module
    var boundGetX = getX.bind(module);
    boundGetX(); // 81

    //Borrowing function
    var person2 = {
        firstName:"John",
        lastName: "Doe",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }
    var myObject = {
        firstName:"Mary",
        lastName: "Doe",
    }

    console.log(person2.fullName.call(myObject));  // Will return "Mary Doe"
    console.log(person2.fullName.apply(myObject));  // Will return "Mary Doe"

    var obj = {
        firstName: "Ahihi",
        lastName : "Ihaha",
     
        mMethod: function(firstName, lastName) {
            var firstName = firstName || this.firstName
            var lastName = lastName || this.lastName
            console.log("Hello " + firstName + " " + lastName);
        },

        mMethod2: function (){
            console.log("Hello " + this.firstName + " " + this.lastName);
        }
    }
     
    var obj1 = {
        firstName: "xxx",
        lastName : "yyy"
    }
     
    //obj.mMethod() // Hello Ahihi Ihaha
     
    // obj.mMethod.call(obj1) // Hello xxx yyy
     
    // obj.mMethod.apply(obj1) // Hello xxx yyy
    obj1.mMethod = obj.mMethod2;
    obj1.mMethod();

    //obj.mMethod.call(obj1);
    obj.mMethod.call(obj1, "xxx123", "yyy123") // Hello xxx yyy
     
    //obj.mMethod.apply(obj1, ["xxx", "yyy"]) // Hello xxx yyy
    function print() {
        console.log('functin print: ' + this.mVal)
    }
       
    var obj3 = {
        mVal: "lalala",
    
        mMethod: function(callback) {
        // truyền đối tượng hiện tại cho hàm phản hồi callback
            callback();
        }
    }

           
    var obj4 = {
        mVal: "lalala",
    
        mMethod: function(callback) {
        // truyền đối tượng hiện tại cho hàm phản hồi callback

            //callback.bind(this)();

            callback.call(this);
        }
    }
    
    obj3.mMethod(print);
    obj4.mMethod(print) //sẽ in ra lalala

    var user = {
        name: 'XXX',
        showName: function (){
          console.log('My name is:' + this.name);
        }
    }
    //user.showName() // My name is XXX

    var oldShowName = user.showName.bind(user);

    user.showName = function(){  // ở đây ta thay đổi hàm showName bằng hàm mới
        console.log('before show name');

        oldShowName.call(this);  // giữ nguyên hàm cũ

        console.log('after show name');
    }

    user.showName();

    (function(name) {
        console.log(name);
    })("Nguyễn Văn Cường");

    (function(name) {
        console.log(name);
    }).call(this,"Nguyễn Cong Phuong");
