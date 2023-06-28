var N = 4;
var S = 1;
if (N < 0 && Number.isInteger(N) == false) {
  console.log(`Không tính giai thừa :v`);
} else if (N == 0 || N == 1) {
  S = 1;
} else {
  for (var i = 1; i <= N; i++) {
    S *= i;
  }
  console.log(`${N}\!=${S}`);
}
