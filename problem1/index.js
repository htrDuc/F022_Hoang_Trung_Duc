const sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const sum_to_n_b = function (n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  return arr.reduce((prev, cur) => prev + cur, 0);
};

const sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

const sum_to_n_d = function (n) {
  if (n === 0) return 0;

  return sum_to_n_d(n - 1) + n;
};