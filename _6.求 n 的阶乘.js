function j(n) {
  if (n === 1) {
    return 1
  }
  return n * j(n - 1)
}

// console.log(j(100))

function fib(n) {
  let a = 0
  let b = 1
  for (let i = 2; i <= n; i++) {
    a = a + b
    b = b + a
  }
  return a
}

console.log(fib(1000))