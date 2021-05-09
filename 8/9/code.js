
function calculateBMI() {
    let a = document.getElementById('height').value
    let b = document.getElementById('weight').value
    let total = (b / a * a);

    if (total <= 18.5) {
        document.getElementById('text').innerHTML= ('BMI is underweight: ' + total)
        return true
    }
    else if (total <= 24.9 && total > 18.5) {
        document.getElementById('text').innerHTML= ('BMI is normal: ' + total)
        return true
    }
    else {
        document.getElementById('text').innerHTML= ('BMI is overweight' + total)
        return true
    }
}
