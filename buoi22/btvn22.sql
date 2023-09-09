create database database_05_quangminh;

USE database_05_quangminh;

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
INSERT INTO phong(ma_phong, loai_phong, so_khach_toi_da, gia_phong) 
VALUES 
    ('P0001', 'Loai 1', 20, 60000),
    ('P0002', 'Loai 1', 25, 80000),
    ('P0003', 'Loai 2', 15, 50000),
    ('P0004', 'Loai 3', 20, 50000);

INSERT INTO khach_hang(ma_kh, ten_kh, dia_chi, so_dt)
VALUES
    ('KH0001', 'Nguyen Van A', 'Hoa xuan', '1111111111'),
    ('KH0002', 'Nguyen Van B', 'Hoa hai', '1111111112'),
    ('KH0003', 'Phan Van A', 'Cam le', '1111111113'),
    ('KH0004', 'Pham Van B', 'Hoa xuan', '1111111114');

INSERT INTO dat_phong (ma_dat_phong, ma_phong, ma_kh, ngay_dat, gio_bat_dau, gio_ket_thuc, tien_dat_coc, trang_thai_dat) 
VALUES 
    ('DP0001', 'P0001', 'KH0002', '2018-03-26', '10:00:00', '13:30:00', 100000, 'Da dat'),
    ('DP0002', 'P0001', 'KH0003', '2018-03-27', '17:15:00', '19:15:00', 50000, 'Da dat'),
    ('DP0003', 'P0002', 'KH0002', '2018-03-26', '20:30:00', '22:15:00', 100000, 'Da huy'),
    ('DP0004', 'P0003', 'KH0001', '2018-04-01', '19:30:00', '22:15:00', 200000, 'Da dat');
    

INSERT INTO dich_vu_di_kem (ma_dv, ten_dv, don_vi_tinh, don_gia) 
VALUES 
    ('DV001', 'Bia', 'lon', 10000),
    ('DV002', 'Nuoc ngot', 'lon', 8000),
    ('DV003', 'Trai cay', 'dia', 35000),
    ('DV004', 'Khan uot', 'cai', 2000);


INSERT INTO chi_tiet_su_dung_dv (ma_dat_phong, ma_dv, so_luong) 
VALUES 
    ('DP0001', 'DV001', 20),
    ('DP0001', 'DV003', 3),
    ('DP0001', 'DV002', 10),
    ('DP0002', 'DV002', 10),
    ('DP0002', 'DV003', 1),
    ('DP0003', 'DV003', 2),
    ('DP0003', 'DV004', 10);
-- 	câu 1: Hiển thị MaDatPhong, MaPhong, LoaiPhong, GiaPhong, TenKH, NgayDat, TongTienHat, TongTienSuDungDichVu, TongTienThanhToan tương ứng với từng mã đặt phòng có trong bảng DAT_PHONG. 
-- Những đơn đặt phòng nào không sử dụng dịch vụ đi kèm thì cũng liệt kê thông tin của đơn đặt phòng đó ra
SELECT dat_phong.ma_dat_phong, dat_phong.ma_phong, phong.loai_phong, phong.gia_phong, khach_hang.ten_kh, dat_phong.ngay_dat,
 (phong.gia_phong * TIME_TO_SEC(TIMEDIFF(dat_phong.gio_ket_thuc, dat_phong.gio_bat_dau)) / 3600) AS TongTienHat,
	IFNULL(SUM(dich_vu_di_kem.don_gia * chi_tiet_su_dung_dv.so_luong), 0) AS TongTienSuDungDichVu,
   (phong.gia_phong * TIME_TO_SEC(TIMEDIFF(dat_phong.gio_ket_thuc, dat_phong.gio_bat_dau)) / 3600) + IFNULL(SUM(dich_vu_di_kem.don_gia * chi_tiet_su_dung_dv.so_luong), 0) - dat_phong.tien_dat_coc AS TongTienThanhToan
 FROM dat_phong
INNER JOIN phong ON dat_phong.ma_phong = phong.ma_phong
INNER JOIN khach_hang ON dat_phong.ma_kh = khach_hang.ma_kh
LEFT JOIN
    chi_tiet_su_dung_dv ON dat_phong.ma_dat_phong = chi_tiet_su_dung_dv.ma_dat_phong
LEFT JOIN
    dich_vu_di_kem ON chi_tiet_su_dung_dv.ma_dv = dich_vu_di_kem.ma_dv
GROUP BY
    dat_phong.ma_dat_phong, phong.ma_phong, khach_hang.ten_kh, dat_phong.ngay_dat
ORDER BY
    dat_phong.ma_dat_phong;
    
-- câu 2:
SELECT kh.ma_kh, kh.ten_kh, kh.dia_chi, kh.so_dt
FROM khach_hang kh
INNER JOIN dat_phong dp ON kh.ma_kh = dp.ma_kh
WHERE dp.trang_thai_dat = 'Đã đặt' AND kh.dia_chi = 'Hoa Xuan';
-- câu 3
SELECT p.ma_phong AS MaPhong,
       p.loai_phong AS LoaiPhong,
       p.so_khach_toi_da AS SoKhachToiDa,
       p.gia_phong AS GiaPhong,
       COUNT(dp.ma_dat_phong) AS SoLanDat
FROM phong p
INNER JOIN dat_phong dp ON p.ma_phong = dp.ma_phong
WHERE dp.trang_thai_dat = 'Da dat'
GROUP BY p.ma_phong, p.loai_phong, p.so_khach_toi_da, p.gia_phong
HAVING COUNT(dp.ma_dat_phong) > 1;
 