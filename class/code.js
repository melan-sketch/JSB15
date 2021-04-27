var objInfo = {
    idname: "10/10",
    password: "jk...unless"
}

function getInfo() {
    var idname = document.getElementById("idname").value
    var password = document.getElementById("password").value

    for (i = 0; i < objInfo.length; i++) {
        if (idname == objInfo[i].idname && password == objInfo[i].password) {
            alert('wrong password')
            return
        }
        console.log('boohoo wrong password')
    }
}
