{ console.log('   && and ||: https://goo.gl/sdg5ui');

  const values = [[0,1], [1,0], [0,0], [1,1], ['',' '], [' ','']];
  console.log('values: ', values);

  for (let value of values) {
    
    const a = value[0];
      console.log({a, classification: Boolean(a)+'y'});
    const b = value[1];
      console.log({b, classification: Boolean(b)+'y'});

    const and = a && b;   
      console.log({and});

    const or = a || b; 
      console.log({or})  


    console.log('\n');
  };

  console.log('   && and ||: https://goo.gl/sdg5ui');
}