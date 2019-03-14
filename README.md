## Boolean By Example

You can study these examples either by inspecting the page and copy-pasting the snippets into the console, by following the links to PythonTutor, or (for the full developer experience) by [inspecting them in the developer tools](https://janke-learning.github.io/boolean-by-example).


### Index:
* [truthiness](#truthiness)
* [if else](#if-else)
* [&& and || operators](#and-or-operators)
* [replicate &&](#replicate-and)
* [replicate ||](#replicate-or)
* [if else if else](#if-else-if-else)
* [!](#not)
* [nested conditionals](#nested-conditionals)
* [!!](#not-not)
* ([live in devtools](https://janke-learning.github.io/boolean-by-example))


---

## Truthiness

[on pytut](https://goo.gl/LFa2JC)

```js
{ console.log('%c   truthiness', 'font-weight:bold');
        
  const values = [true, false, -1, 0, 0.0, 1, Infinity, NaN, '', ' ', null, undefined];                     

  for (let value of values) {

    console.log({type: typeof value, value});
    
    const cast_to_boolean = Boolean(value);
    console.log({type: typeof cast_to_boolean, cast_to_boolean});

    console.log({classification: cast_to_boolean+'y'});

    console.log('\n');
  };
};
```

[TOP](#boolean-by-example)

---

## If Else

[on pytut](https://goo.gl/XhXvc1)

```js
{ console.log('%c   if/else', 'font-weight:bold');
        
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
};
```

[TOP](#boolean-by-example)

---

## and or operators

[on pytut](https://goo.gl/sdg5ui)

```js
{ console.log('%c   && and ||', 'font-weight:bold');

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
};
```

[TOP](#boolean-by-example)

---

## Replicate And

[on pytut](https://goo.gl/dTYiva)

```js
{ console.log('%c   replicate and', 'font-weight:bold');

  const values = [[0,1], [1,0], [0,false], [1,12], ['',' '], [' ','']];
  console.log('values: ', values);

  for (let value of values) {
    const a = value[0];
      console.log({a, classification: Boolean(a)+'y'});
    const b = value[1];
      console.log({b, classification: Boolean(b)+'y'});

    const or = a && b;
      console.log({or});

    let replication; 
    if (a) {
      replication = b;
    } else {
      replication = a;
    };
      console.log({replication});


    console.log('\n');
  };
};
```

[TOP](#boolean-by-example)

---

## Replicate or

[on pytut](https://goo.gl/Cuabaw)

```js
{ console.log('%c   replicate or', 'font-weigh:bold');

  const values = [[0,1], [1,0], [0,false], [1,12], ['',' '], [' ','']];
  console.log('values: ', values);

  for (let value of values) {
    const a = value[0];
      console.log({a, classification: Boolean(a)+'y'});
    const b = value[1];
      console.log({b, classification: Boolean(b)+'y'});

    const or = a || b;
      console.log({or});

    let replication; 
    if (a) {
      replication = a;
    } else {
      replication = b;
    };
      console.log({replication});


    console.log('\n');
  };
};
```

[TOP](#boolean-by-example)

---

## If Else If Else

[on pytut](https://goo.gl/9mPCLF)

```js
{ console.log('%c   if, else if, else', 'font-weight:bold');

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
};
```

[TOP](#boolean-by-example)

---

## Not

[on pytut](https://goo.gl/2YuXM5)

```js
{ console.log('%c   !', 'font-weigh:bold');
        
  const values = [true, false, -1, 0, 0.0, 1, Infinity, NaN, '', ' ', null, undefined];                     

  for (let value of values) {

    console.log({type: typeof value, value, classification: Boolean(value)+'y'});
    
    const not_value = !value;
    console.log({type: typeof not_value, not_value, classification: not_value+'y'});

    console.log('\n');
  };
};
```

[TOP](#boolean-by-example)

---

## Nested Conditionals

[on pytut](https://goo.gl/sDBKSQ)

```js
{ console.log('   nested conditionals', 'font-weight:bold');

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
};
```

[TOP](#boolean-by-example)

---

## Not Not

[on pytut](https://goo.gl/iDvXEp)

```js
{ console.log('%c   !', 'font-weigh:bold');
        
  const values = [true, false, -1, 0, 0.0, 1, Infinity, NaN, '', ' ', null, undefined];                     

  for (let value of values) {

    console.log({type: typeof value, value, classification: !!value+'y'});
    
    const not_not = !(!value);
    console.log({type: typeof not_not, not_not, classification: not_not+'y'});

    const to_boolean = Boolean(value);
    console.log({type: typeof to_boolean, to_boolean, classification: to_boolean+'y'});

    console.log('\n');
  };
};
```

[TOP](#boolean-by-example)


___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
