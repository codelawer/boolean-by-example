{ console.log('   if, else if, else: https://goo.gl/9mPCLF');

  const values = [[0,1], [1,0], [0,false], [1,12], ['',' '], [' ','']];
  console.log(values);

  for (let value of values) {
    const a = value[0];
      console.log({a, classification: Boolean(a)+'y'});

    const b = value[1];
      console.log({b, classification: Boolean(b)+'y'});

    if (a) {
      console.log({path: 'if'});
    } else if (b) {
      console.log({path: 'else if'});
    } else {
      console.log({path: 'else'});
    };

    console.log('\n');
  };

  console.log('   if, else if, else: https://goo.gl/9mPCLF');
}