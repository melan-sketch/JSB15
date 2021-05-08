const idname = document.getElementById('idname')
const password = document.getElementById('password')
const form = document.getElementById('form')

function checkSignup() {
    if (password.value.length >= 6 && idname.value.length >= 6) {
        alert('signup complete')
        return true;
    }
    alert('try different pass or id')
    return false;
}
