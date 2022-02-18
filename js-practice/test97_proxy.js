// example 1: basic
(function () {
  const p = new Proxy(
    {},
    {
      get(obj, prop) {
        return obj[prop] ?? 37;
      },
    }
  );

  p.a = 1;
  p.b = undefined;

  console.log(p.a);
  console.log(p.b);
  console.log(p.c);
});

// example 2: validation
(function () {
  const validator = {
    set(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
      }

      obj[prop] = value;

      // return true; // indicate success
    },
  };

  const person = new Proxy({}, validator);

  console.log((person.age = 1.2));
});

// example 3: extending constructor
(function () {
  function extend(sup, base) {
    base.prototype = Object.create(sup.prototype);
    base.prototype.constructor = new Proxy(base, {
      construct(target, args) {
        const obj = Object.create(base.prototype);
        this.apply(target, obj, args);
        return obj;
      },
      apply(_, that, args) {
        sup.apply(that, args);
        base.apply(that, args);
      },
    });

    return base.prototype.constructor;
  }

  const Person = function () {
    this.isPerson = true;
  };

  const Boy = extend(Person, function () {
    this.isBoy = true;
  });

  console.log(new Boy().isPerson, new Boy().isPerson);
});

// example 4: extra property
(function () {
  const products = new Proxy(
    {
      browsers: ['IE', 'Netscape'],
    },
    {
      get(obj, prop) {
        if (prop === 'latestBrowser') {
          return obj.browsers[obj.browsers.length - 1];
        }

        return obj[prop];
      },
      set(obj, prop, value) {
        if (prop === 'latestBrowser') {
          obj.browsers.push(value);
          return true;
        }

        obj[prop] = value;
        return true;
      },
    }
  );

  console.log(products.latestBrowser);
  products.latestBrowser = 'Chrome';
  console.log(products.latestBrowser);
})();
