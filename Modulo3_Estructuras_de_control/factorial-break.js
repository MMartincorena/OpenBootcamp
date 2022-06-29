var num = 1;
var i = 0;

while (i < 15) {
  i++;
  num = num * i;
  console.log(num);
  if (i == 10) {
    break;
  }
}
