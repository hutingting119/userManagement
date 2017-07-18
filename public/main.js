function addNewUser() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementById('sex').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var remark = document.getElementById('remark').value;
    $.ajax({
        type: 'post',
        url: '/insert',
        data: JSON.stringify({
            name: name,
            age: age,
            sex: sex,
            phone: phone,
            email: email,
            remark: remark
        }),

        contentType: "application/json; charset=utf-8",
        success: function (result) {
            alert(result)
        }
    })
}

function showAll() {
    $.ajax({
        type: 'post',
        url: '/showall',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                let name = result[i].name;
                let age = result[i].age;
                let sex = result[i].sex;
                let phone = result[i].phone;
                let email = result[i].email;
                let remark = result[i].remark;
                var addTr = document.createElement('tr');
                addTr.innerHTML = "<td>" + name + "</td>" + "<td>" + age + "</td>" + "<td>" + sex + "</td>" + "<td>" + phone
                    + "</td>" + "<td>" + email + "</td>" + "<td>" + remark + "</td>"
                    + "<td><span  onclick='del(this)'><img src='img/del.png'></span></td>";
                document.getElementById('tables').appendChild(addTr);
            }
        }
    })

}
