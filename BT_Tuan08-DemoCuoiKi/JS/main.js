var index = 3;

function DatLich() {

    //Check ma benh nhan
    let maBenhNhan = document.getElementById('maBenhNhan').value
    let checkMaBenhNhan = maBenhNhan.match(/(BN-)\d{5}/g);
    if (!checkMaBenhNhan) {
        alert('Mã bệnh nhân không hợp lệ');
        return;
    }

    //Check mat khau
    let matKhau = document.getElementById('matKhau').value
    let checkMatKhau = matKhau.match(/.{6,}/g);
    if (!checkMatKhau) {
        alert('Mật khẩu không hợp lệ');
        return;
    }

    //Check ngay 
    let ngay = new Date(document.getElementById('ngayKham').value)
    if (ngay < new Date()) {
        alert('Ngày không hợp lệ');
        return;
    }
    var dinhDangNgay = ngay.getUTCDate() + "/" + (ngay.getUTCMonth() + 1) + "/" + ngay.getUTCFullYear();

    //Check loai dich vu
    let giaDichVu = 0;
    let l1 = document.getElementById('loaiDichVu1');
    if (l1.checked == true) {
        giaDichVu += 500000;
    }
    let l2 = document.getElementById('loaiDichVu2');
    if (l2.checked == true) {
        giaDichVu += 500000;
    }
    let l3 = document.getElementById('loaiDichVu3');
    if (l3.checked == true) {
        giaDichVu += 500000;
    }

    //Lay gia tri chuyen khoa
    let chuyenKhoa = $('#chuyenKhoa').find(":selected").text()

    //Add vao modal
    let table = document.getElementById("table_modal")
    let row = table.insertRow(index)
    let c1 = row.insertCell(0)
    let c2 = row.insertCell(1)
    let c3 = row.insertCell(2)
    let c4 = row.insertCell(3)
    let c5 = row.insertCell(4)
    let c6 = row.insertCell(5)

    //Hien thi cac gia tri vao cac o
    c1.innerHTML = index
    c2.innerHTML = maBenhNhan
    c3.innerHTML = matKhau
    c4.innerHTML = dinhDangNgay
    c5.innerHTML = giaDichVu
    c6.innerHTML = chuyenKhoa

    //Thong bao
    alert("Thêm thành công!");

    //Tang vi tri index len 1 sau khi them
    index++;
}