function empty(o) {
    o = null;
}
var x = [];
empty(x);
console.log(x); // ??

  //output x=[] bởi vì hàm empty chỉ thay đổi mảng copy của mang x

