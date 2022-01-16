// Bài 1: Xuất 3 số theo thứ tự tăng dần
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào 3 số nguyên dương

- Khối 2: 
- 	Bước 1: Tạo biến so1, so2, so3, so3Chu
-	Bước 2: Gán biến cho so1, so2, so3
-	Bước 3: Dùng hàm if else
-	Bước 4: Dùng toán tử so sánh
-	Bước 5: Gán biến so3Chu = phép cộng chuỗi
- 
- Khối 3:
- In kết quả số có 3 chữ số
*/
const so1 = 7;
const so2 = 2;
const so3 = 4;
let so3Chu;

if (so1 <= so2 && so2 <= so3) {
    so3Chu = so1 + "" + so2 + "" + so3;    
} else if (so1 <= so3 && so3 <= so2) {
    so3Chu = so1 + "" + so3 + "" + so2;
} else if (so2 <= so1 && so1 <= so3) {
    so3Chu = so2 + "" + so1 + "" + so3;
} else if (so2 <= so3 && so3 <= so1) {
    so3Chu = so2 + "" + so3 + "" + so1;
} else if (so3 <= so1 && so1 <= so2) {
    so3Chu = so3 + "" + so1 + "" + so2;
} else {
    so3Chu = so3 + "" + so2 + "" + so1;
}

console.group("BT1: Xuất 3 số theo thứ tự tăng dần:");
console.log("num 1:", so1, "num 2:", so2, "num 3:", so3);
console.log("Số có 3 chữ số:", so3Chu);
console.groupEnd();

// Bài 2: Viết chương trình “Chào hỏi”
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào 1 ký tự 

- Khối 2: 
- 	Bước 1: Tạo biến user, chaoHoi
-	Bước 2: Dùng hàm if else
-	Bước 3: Dùng toán tử so sánh bằng cho biến user,
-	Bước 4: Gán biến cho chaoHoi = 1 chuỗi
-	 
- Khối 3:
- In kết quả số chương trình "chào hỏi"
*/
let user;
let chaoHoi;

if (user === "B") {
    chaoHoi = "Xin chào Bố";
} else if (user === "M") {
    chaoHoi = "Xin chào Mẹ";
} else if (user === "A") {
    chaoHoi = "Xin chào anh Trai";
} else if (user === "E"){
    chaoHoi = "Xin chào em Gái";
} else {
    chaoHoi = "Xin chào";
}

console.group("BT2: Viết chương trình “Chào hỏi”");
console.log("user:", user);
console.log("Máy trả lời:", chaoHoi);
console.groupEnd();

// Bài 3: Đếm số chẵn, lẻ
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào 3 số nguên dương

- Khối 2: 
- 	Bước 1: Tạo biến a1, a2, a3, demSo
-	Bước 2: Dùng hàm if else
-	Bước 3: Dùng toán tử chia lấy dư và phép so sánh cho các trường hợp: "cả 3 đều chẵn", "1 chẵn, 2 lẻ", "1 lẻ, 2 chẵn","cả 3 đều lẻ".
-	Bước 4: Gán biến cho demSo = 1 chuỗi
-	 
- Khối 3:
- In kết quả chương trình "Đếm số chẵn, lẻ"
*/
const a1 = 3;
const a2 = 5;
const a3 = 7;
let demSo;

if (a1%2 === 0 && a2%2 === 0 && a3%2 === 0) {
    demSo = "cả 3 đều chẵn";    
} else if (a1%2 === 0 && a2%2 !== 0 && a3%2 !== 0) {
    demSo = "1 chẵn, 2 lẻ";
} else if (a1%2 !== 0 && a2%2 === 0 && a3%2 !== 0) {
    demSo = "1 chẵn, 2 lẻ";
} else if (a1%2 !== 0 && a2%2 !== 0 && a3%2 === 0) {
    demSo = "1 chẵn, 2 lẻ";
} else if (a1%2 !== 0 && a2%2 === 0 && a3%2 === 0) {
    demSo = "1 lẻ, 2 chẵn";
} else if (a1%2 === 0 && a2%2 !== 0 && a3%2 === 0) {
    demSo = "1 lẻ, 2 chẵn";
} else if (a1%2 === 0 && a2%2 === 0 && a3%2 !== 0) {
    demSo = "1 lẻ, 2 chẵn";
} else {
    demSo = "cả 3 đều lẻ";
}

console.group("BT3: Đếm số chẵn, lẻ:");
console.log("num 1:", a1, "num 2:", a2, "num 3:", a3);
console.log("Đếm số chẵn, lẻ:", demSo);
console.groupEnd();

// Bài 4: Viết chương trình nhận dạng Tam giác
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào 3 số nguyên dương 

- Khối 2: 
- 	Bước 1: Tạo biến a, b, c, d, e, f, tamGiac
-	Bước 2: Gán biến cho a, b, c
-	Bước 3: Dùng định lý Pytago để tính cạnh huyền d, e, f
-   Bước 2: Dùng hàm if else
-	Bước 3: Dùng toán tử so sánh để sét trường hợp cho các dạng tam giác: "Tam giác đều", "Tam giác cân", "Tam giác vuông"
-	Bước 4: Gán biến cho tamGiac = 1 chuỗi

-	 
- Khối 3:
- In kết quả số chương trình nhận dạng tam giác
*/
const a = 4;
const b = 5;
const c = 6;
const d = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
const e = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
const f = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2));
let tamGiac;

if (a === b && b === c) {
    tamGiac = "Tam giác đều";    
} else if (a === b && b !== c) {
    tamGiac = "Tam giác cân";
} else if (a !== b && b === c) {
    tamGiac = "Tam giác cân";
} else if (c === d) {
    tamGiac = "Tam giác vuông";
} else if (a === e) {
    tamGiac = "Tam giác vuông";
} else if (b === f) {
    tamGiac = "Tam giác vuông";
} else {
    tamGiac = "Tam giác thường";
}

console.group("BT4: Viết chương trình nhận dạng Tam giác:");
console.log("a:", a, "b:", b, "c:", c);
console.log("Đây là:", tamGiac);
console.groupEnd();



