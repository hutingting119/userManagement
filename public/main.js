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
            location.replace(location);
            console.log(result);
        },
    });
}

function showAll() {
    $.ajax({
        type: 'post',
        url: '/showall',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            // console.log(200);
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
                addTr.name = result[i].name;
                addTr.age = result[i].age;
                addTr.sex = result[i].sex;
                addTr.phone = result[i].phone;
                addTr.email = result[i].email;
                addTr.remark = result[i].remark;
                addTr.innerHTML = "<td class='thStylr' id='num'>" + id + "</td>" + "<td class='thStylr'>" + name + "</td>" + "<td class='thStylr'>" + age + "</td>" +
                    "<td class='thStylr'>" + sex + "</td>" + "<td class='thStylr'>" + phone + "</td>" +
                    "<td class='thStylr'>" + email + "</td>" + "<td class='thStylr'>" + remark + "</td>"
                    + "<td class='thStylr'>" + "<span class='updateUser' data-toggle='modal' data-target='#updateModal' onclick='modelValue(this)'><img src='img/update.png'></span></td>"
                    + "<td class='thStylr'><span  onclick='delet(this)'><img src='img/del.png'></span></td>";
                document.getElementById('tables').appendChild(addTr);
            }
        }
    })
}
function modelValue(obj) {
    const node = obj.parentNode.parentNode;
    let id = node.id, name = node.name, age = node.age, sex = node.sex, phone = node.phone, email = node.email, remark = node.remark;
    document.getElementById("number").value = id;
    document.getElementById("updatename").value = name;
    document.getElementById('updateage').value = age;
    document.getElementById('updatesex').value = sex;
    document.getElementById('updatephone').value = phone;
    document.getElementById('updateemail').value = email;
    document.getElementById('updateremark').value = remark;

}
function updates() {
    var id = document.getElementById("number").value;
    var name = document.getElementById('updatename').value;
    var age = document.getElementById('updateage').value;
    var sex = document.getElementById('updatesex').value;
    var phone = document.getElementById('updatephone').value;
    var email = document.getElementById('updateemail').value;
    var remark = document.getElementById('updateremark').value;

    $.ajax({
        type: 'post',
        url: '/updates',
        data: JSON.stringify({
            id: id,
            name: name,
            age: age,
            sex: sex,
            phone: phone,
            email: email,
            remark: remark,
        }),
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            location.replace(location);
        }
    })
}

function delet(obj) {
    var trId = obj.parentNode.parentNode.id;
    var trObj = document.getElementById(trId);
    document.getElementById("tables").removeChild(trObj);
    $.ajax({
        type: "post",
        url: "/del",
        data: JSON.stringify({id: trId}),
        contentType: "application/json;charset=utf-8",
        success: function (result) {
            showAll();
            console.log(result);
        }
    })
}