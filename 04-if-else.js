{ console.log('   if/else: https://goo.gl/XhXvc1');
        
  const values = [true, false, -1, 0, 0.0, 1, Infinity, NaN, '', ' ', null, undefined];                     

  for (let value of values) {

    console.log({value, classification: Boolean(value)+'y'});

    if (value) {
      console.log({path: 'if'});
    } else {
      console.log({path: 'else'});
    };

    console.log('\n');
  };

  console.log('   if/else: https://goo.gl/XhXvc1');
};