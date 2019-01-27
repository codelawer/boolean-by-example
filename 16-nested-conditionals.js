{ console.log('   nested conditionals:');

  const values = [[0,1], [1,0], [0,false], [1,12], ['',' '], [' ','']];
  console.log(values);

  for (let value of values) {
    const a = value[0];
      console.log({a, classification: Boolean(a)+'y'});

    const b = value[1];
      console.log({b, classification: Boolean(b)+'y'});

    if (a) {
      if (b) {
        console.log({path: 'if if', boolean_statement: 'a && b'});
      } else {
        console.log({path: 'if else', boolean_statement: 'a && !b'});
      };
    } else {
      if (b) {
        console.log({path: 'else if', boolean_statement: '!a && b'});
      } else {
        console.log({path: 'else else', boolean_statement: '!a && !b'});
      };
    };

    console.log('\n');
  };
}