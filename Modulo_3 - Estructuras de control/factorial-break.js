let num = 1;
let i = 0;

while (i < 15) {
  i++;
  num = num * i;
  console.log(num);
  if (i == 10) {
    break;
  }
}
