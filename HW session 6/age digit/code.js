var JSB15 = [{
    firstName: "Son",
    Age: 13
}, {
    firstName: "Minh Dang",
    Age: 16
}, {
    firstName: "Hoang Phung",
    Age: 17
}, {
    firstName: "Ngoc Nam",
    Age: 16
}, {
    firstName: "Trongkhoi",
    Age: 17
}, {
    firstName: "Nam Anh",
    Age: 15
}, {
    firstName: "Xuan Huy",
    Age: 16
}, {
    firstName: "Trung",
    Age: 16
}, {
    firstName: "Dung",
    Age: 16
}, {
    firstName: "Viet Khoa",
    Age: 13
}, {
    firstName: "Lan",
    Age: 14
}, {
    firstName: "Vinh Le",
    Age: 16
}]
let total = 0;
for (let i = 0; i < JSB15.length; i++) {
    total += JSB15[i].Age
}
console.log(total)