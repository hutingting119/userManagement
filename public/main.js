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
            remark: remark,
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
                let id = result[i].id;
                let name = result[i].name;
                let age = result[i].age;
                let sex = result[i].sex;
                let phone = result[i].phone;
                let email = result[i].email;
                let remark = result[i].remark;
                var addTr = document.createElement('tr');
                addTr.id = result[i].id;
                addTr.innerHTML = "<td class='thStylr' id='num'>" + id + "</td>" + "<td class='thStylr'>" + name + "</td>" + "<td class='thStylr'>" + age + "</td>" +
                    "<td class='thStylr'>" + sex + "</td>" + "<td class='thStylr'>" + phone + "</td>" +
                    "<td class='thStylr'>" + email + "</td>" + "<td class='thStylr'>" + remark + "</td>"
                    + "<td class='thStylr'><span  onclick='delet(this)'><img src='img/del.png'></span></td>";
                document.getElementById('tables').appendChild(addTr);
            }
        }
    })
}

function delet(obj) {
    var trId = obj.parentNode.parentNode.id;
    var trObj = document.getElementById(trId);
    document.getElementById("tables").removeChild(trObj);
    $.ajax({
        type:"post",
        url:"/del",
        data:JSON.stringify({id:trId}),
        contentType:"application/json;charset=utf-8",
        success:function () {
            showAll();
        }
    })
}