var objInfo= [
    { idname: "10/10", password: "jk...unless"},
    { idname: "asdasd", password: "12345678"}
]

function checkPassword() {
    var idname = document.getElementById("idname").value
    var password = document.getElementById("password").value

    for (i = 0; i < objInfo.length; i++) {
        if (idname == objInfo[i].idname && password == objInfo[i].password) {
            alert('right password!');
            return true;
        }
    }

    alert('WRONG password or username!');
    return false;
}
