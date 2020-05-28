export const fibonacci = (n) => {
    let f1 = 0,
      f2 = 1,
      f3 = 1

    for(let i = 2; i <= n; i++) {
        f3 = f1 + f2
        f1 = f2
        f2 = f3
    }
    return f3
}
