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
        data:JSON.stringify({
            name:name,
            age:age,
            sex:sex,
            phone:phone,
            email:email,
            remark:remark
        }),

        contentType: "application/json; charset=utf-8",
        success: function (result) {
            alert(result)
        }
    })

}
