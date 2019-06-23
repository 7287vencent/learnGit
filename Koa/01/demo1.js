async function testAsync() {
  return 'hello Async'
}

function getSomething() {
  return 'someing'
}

async function test() {
  const v1 = await getSomething()
  const v2 = await testAsync()
  console.log(v1, v2)
}

test()
// const result = testAsync()
//Promise { 'hello Async' }
// console.log(result) 