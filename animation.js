move('#block1')
.to(500, 200)
.rotate(180)
.scale(.5)
.set('background-color', '#888')
.set('border-color', 'black')
.duration('4s')
  // .skew(50, -10)
.then()
  .to(200, 300)
  //   .set('opacity', 0)
  .duration('1s')
  //   .scale(0.1)
  //   .pop()
  .end();

move('#block2')
.to(500, 200)
.rotate(180)
.scale(.5)
.set('background-color', '#888')
.set('border-color', 'black')
.duration('4s')
  // .skew(50, -10)
.then()
  .to(200, 300)
  //   .set('opacity', 0)
  .duration('1s')
  //   .scale(0.1)
  //   .pop()
  .end()




