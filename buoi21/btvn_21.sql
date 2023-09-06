create database database_04_quangminh;

USE database_04_quangminh;

CREATE TABLE khach_hang (
    ma_kh VARCHAR(10) NOT NULL PRIMARY KEY,
    ten_kh VARCHAR(25),
    dia_chi VARCHAR(100),
    so_dt VARCHAR(15) UNIQUE
);

CREATE TABLE phong (
    ma_phong VARCHAR(10) NOT NULL PRIMARY KEY,
    loai_phong VARCHAR(25) NOT NULL,
    so_khach_toi_da INT DEFAULT 15,
    gia_phong FLOAT NOT NULL,
    mo_ta TEXT
);

CREATE TABLE dat_phong (
    ma_dat_phong VARCHAR(10) NOT NULL PRIMARY KEY, 
    ma_phong VARCHAR(10) NOT NULL,
    ma_kh VARCHAR(10) NOT NULL,
    ngay_dat DATE NOT NULL,
    gio_bat_dau TIME NOT NULL,
    gio_ket_thuc TIME NOT NULL,
    tien_dat_coc FLOAT DEFAULT 0,
    ghi_chu VARCHAR(255),
    trang_thai_dat VARCHAR(15),
    FOREIGN KEY (ma_phong) REFERENCES phong(ma_phong),
    FOREIGN KEY (ma_kh) REFERENCES khach_hang(ma_kh)
);

CREATE TABLE dich_vu_di_kem (
    ma_dv VARCHAR(10) PRIMARY KEY, 
    ten_dv VARCHAR(255),
    don_vi_tinh VARCHAR(30) NOT NULL,
    don_gia FLOAT
);

CREATE TABLE chi_tiet_su_dung_dv (
    ma_dat_phong VARCHAR(10), 
    ma_dv VARCHAR(10), 
    so_luong INT,
    PRIMARY KEY (ma_dat_phong, ma_dv),
    FOREIGN KEY (ma_dat_phong) REFERENCES dat_phong(ma_dat_phong),
    FOREIGN KEY (ma_dv) REFERENCES dich_vu_di_kem(ma_dv)
); 
-- thêm dữ liệu 
INSERT INTO phong(ma_phong, loai_phong, so_khach_toi_da, gia_phong, mo_ta) 
VALUES 
    ('P0001', 'Loai 1', 8, 60000, 'Phong VIP'),
    ('P0002', 'Loai 1', 9, 80000, 'Phong Deluxe'),
    ('P0003', 'Loai 2', 15, 50000, 'Phong Standard'),
    ('P0004', 'Loai 3', 20, 50000, 'Phong Economy');

INSERT INTO khach_hang(ma_kh, ten_kh, dia_chi, so_dt)
VALUES
    ('KH0001', 'Nguyen Van A', 'Ha Noi', '0123456789'),
    ('KH0002', 'Tran Thi B', 'Ha Noi', '0987654321'),
    ('KH0003', 'Le Van C', 'Ha Noi', '0321654987'),
    ('KH0004', 'Pham Thi D', 'Ha Noi', '0123456089'),
    ('KH0005', 'Vu Van E', 'Ha Noi', '0987654327');



INSERT INTO dat_phong (ma_dat_phong, ma_phong, ma_kh, ngay_dat, gio_bat_dau, gio_ket_thuc, tien_dat_coc, ghi_chu, trang_thai_dat) 
VALUES 
    ('DP0001', 'P0001', 'KH0001', '2016-09-05', '10:00:00', '12:00:00', 50000, 'Phong dep', 'Da dat'),
    ('DP0002', 'P0002', 'KH0002', '2022-09-06', '14:00:00', '16:00:00', 60000, 'Phong rong', 'Da dat'),
    ('DP0003', 'P0001', 'KH0003', '2017-09-07', '16:00:00', '18:00:00', 70000, 'Phong thoai mai', 'Da huy'),
    ('DP0004', 'P0003', 'KH0004', '2023-09-08', '18:00:00', '20:00:00', 80000, 'Phong tieu chuan', 'Da dat'),
    ('DP0005', 'P0002', 'KH0005', '2023-09-09', '20:00:00', '22:00:00', 90000, 'Phong sang trong', 'Da dat');


INSERT INTO dich_vu_di_kem (ma_dv, ten_dv, don_vi_tinh, don_gia) 
VALUES 
    ('DV0001', 'Bia', 'lon', 10000),
    ('DV0002', 'Nuoc ngot', 'lon', 15000),
    ('DV0003', 'Trai cay', 'dia', 20000),
    ('DV0004', 'Khan uot', 'cai', 50000),
    ('DV0005', 'Ruou', 'chai', 80000);


INSERT INTO chi_tiet_su_dung_dv (ma_dat_phong, ma_dv, so_luong) 
VALUES 
    ('DP0001', 'DV0002', 2),
    ('DP0002', 'DV0002', 1),
    ('DP0003', 'DV0001', 5),
    ('DP0001', 'DV0003', 2),
    ('DP0003', 'DV0004', 7),
    ('DP0004', 'DV0001', 4),
    ('DP0004', 'DV0002', 1),
    ('DP0005', 'DV0003', 8),
    ('DP0005', 'DV0004', 2),
    ('DP0005', 'DV0005', 15);
    
    -- Câu 1: Liệt kê MaDatPhong, MaDV, SoLuong của tất cả các dịch vụ có số lượng lớn hơn 3 và nhỏ hơn 10
SELECT * FROM chi_tiet_su_dung_dv WHERE so_luong > 3 AND so_luong < 10;
-- Câu 2: Cập nhật dữ liệu trên trường GiaPhong thuộc bảng PHONG tăng lên 10,000 VNĐ so với giá phòng hiện tại, chỉ cập nhật giá phòng của những phòng có số khách tối đa lớn hơn 10
UPDATE phong SET gia_phong = gia_phong + 10000 WHERE so_khach_toi_da > 10;
SELECT * FROM phong;
-- Câu 3: Xóa tất cả những đơn đặt phòng (từ bảng DAT_PHONG) có trạng thái đặt (TrangThaiDat) là “Da huy”
 DELETE FROM dat_phong WHERE trang_thai_dat = 'Da huy';
 SELECT * FROM dat_phong;
 -- Câu 4: Hiển thị TenKH của những khách hàng có tên bắt đầu là một trong các ký tự “H”, “N”, “M” và có độ dài tối đa là 20 ký tự
 SELECT ten_kh FROM khach_hang WHERE (ten_kh LIKE 'H%' OR ten_kh LIKE 'N%' OR ten_kh LIKE 'M%') AND LENGTH(ten_kh)<20
 -- Câu 5: Hiển thị TenKH của tất cả các khách hàng có trong hệ thống, TenKH nào trùng nhau thì chỉ hiển thị một lần
 SELECT DISTINCT ten_kh FROM khach_hang;
 -- Câu 6: Hiển thị MaDV, TenDV, DonViTinh, DonGia của những dịch vụ đi kèm có DonViTinh là “lon” và có DonGia lớn hơn 10,000 VNĐ hoặc 
 -- những dịch vụ đi kèm có DonViTinh là “Cai” và có DonGia nhỏ hơn 5,000 VNĐ
 SELECT ma_dv, ten_dv, don_vi_tinh, don_gia FROM dich_vu_di_kem 
 WHERE (don_vi_tinh = 'lon' AND don_gia > 10000) 
 OR (don_vi_tinh = 'cái' AND don_gia < 5000);
 -- Câu 7: Hiển thị MaDatPhong, MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, MaKH, TenKH, SoDT, NgayDat, GioBatDau, GioKetThuc, MaDichVu, SoLuong, DonGia 
 -- của những đơn đặt phòng có năm đặt phòng là “2016”, “2017” và đặt những phòng có giá phòng > 50,000 VNĐ/ 1 giờ
SELECT dat_phong.ma_dat_phong,phong.ma_phong,phong.loai_phong,phong.so_khach_toi_da,phong.gia_phong,dat_phong.ma_kh,khach_hang.ten_kh,khach_hang.so_dt,dat_phong.ngay_dat,dat_phong.gio_bat_dau,dat_phong.gio_ket_thuc,
    chi_tiet_su_dung_dv.ma_dv AS ma_dich_vu,
    chi_tiet_su_dung_dv.so_luong,
    dich_vu_di_kem.don_gia
FROM dat_phong
INNER JOIN phong ON dat_phong.ma_phong = phong.ma_phong
INNER JOIN khach_hang ON dat_phong.ma_kh = khach_hang.ma_kh
INNER JOIN chi_tiet_su_dung_dv ON dat_phong.ma_dat_phong = chi_tiet_su_dung_dv.ma_dat_phong
INNER JOIN dich_vu_di_kem ON chi_tiet_su_dung_dv.ma_dv = dich_vu_di_kem.ma_dv
WHERE 
    YEAR(dat_phong.ngay_dat) IN (2016, 2017)
    AND phong.gia_phong > 50000
ORDER BY dat_phong.ma_dat_phong;

 