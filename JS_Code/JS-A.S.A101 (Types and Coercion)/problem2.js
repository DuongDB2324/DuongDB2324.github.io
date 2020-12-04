function swap(a, b) {
    var tmp = a;
    a = b;
    b = tmp;
}

var x = 1;
var y = 2;
swap(x, y);
console.log(x);

  // x = 1 bởi vì hàm swap thay đổi giá trị copy của 2 biến x và y
