
//Hien thi ket qua
function display(value){
    document.getElementById("result").value += value;
}
//Xoa trang
function clearr(){
    document.getElementById("result").value = "";
}
//
const numbers = document.getElementsByClassName('btn');
for(let number of numbers){
    number.addEventListener('click', function () {
        result.innerHTML += this.value;
    });
}
// Tinh toan
function TinhToan() {
    let x = document.getElementById('result').value
    let y = eval(x)
    document.getElementById("result").value = y
}

