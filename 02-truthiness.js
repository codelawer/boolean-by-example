{ console.log('   truthiness: https://goo.gl/VxwSw9');
        
  const values = [true, false, -1, 0, 0.0, 1, Infinity, NaN, '', ' ', null, undefined];                     

  for (let value of values) {

    console.log({type: typeof value, value});
    
    const cast_to_boolean = Boolean(value);
    console.log({type: typeof cast_to_boolean, cast_to_boolean});

    console.log({classification: cast_to_boolean+'y'});

    console.log('\n');
  };

  console.log('   truthiness: https://goo.gl/VxwSw9');
}