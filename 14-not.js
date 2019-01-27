{ console.log('   !:');
        
  const values = [true, false, -1, 0, 0.0, 1, Infinity, NaN, '', ' ', null, undefined];                     

  for (let value of values) {

    console.log({type: typeof value, value, classification: Boolean(value)+'y'});
    
    const not_value = !value;
    console.log({type: typeof not_value, not_value, classification: not_value+'y'});

    console.log('\n');
  };
}