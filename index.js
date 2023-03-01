function DiemTrungBinh(n){
    if (n>=0&&n<=70){
        console.log("D Grade");
    }
    else if (n>70&&n<=80){
        console.log("C Grade");
    }
    else if (n>80&&n<=90){
        console.log("B Grade");
    }
    else if (n>90&&n<=100){
        console.log("A Grade");
    }
    else {
        console.log("Khong xac dinh");
    }
}

console.log("Diem trung binh: 85");
DiemTrungBinh(85);