function tackLongTimie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('long_time_value'), 3000)
  })
}

async function test() {
  const v = await tackLongTimie()
  console.log(v)
}
test()