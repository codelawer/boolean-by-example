{ console.log('   !:');
        
  const values = [true, false, -1, 0, 0.0, 1, Infinity, NaN, '', ' ', null, undefined];                     

  for (let value of values) {

    console.log({type: typeof value, value, classification: !!value+'y'});
    
    const not_not = !(!value);
    console.log({type: typeof not_not, not_not, classification: not_not+'y'});

    const to_boolean = Boolean(value);
    console.log({type: typeof to_boolean, to_boolean, classification: to_boolean+'y'});

    console.log('\n');
  };
}