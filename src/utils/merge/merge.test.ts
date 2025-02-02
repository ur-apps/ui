import { merge } from './merge';

describe('merge function', () => {
  it('should return target object', () => {
    const obj = { a: 1 };

    expect(merge(obj)).toEqual(obj);
  });

  it('should return an empty object when both inputs are empty', () => {
    expect(merge({}, {})).toEqual({});
  });

  it('should handle empty objects', () => {
    const obj1 = {};
    const obj2 = { a: 1 };

    expect(merge(obj1, obj2)).toEqual({ a: 1 });
  });

  it('should override target key', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 2 };

    expect(merge(obj1, obj2)).toEqual({ a: 2 });
  });

  it('should not modify the source objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const obj3 = { c: 3 };

    merge(obj1, obj2, obj3);

    expect(obj2).toEqual({ b: 2 });
    expect(obj3).toEqual({ c: 3 });
  });

  it('should merge arrays, and override items', () => {
    const obj1 = { a: [1, 2, 3] };
    const obj2 = { a: [4, 5] };

    expect(merge(obj1, obj2)).toEqual({ a: [4, 5, 3] });
  });

  it('should override values with null', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: null };

    expect(merge(obj1, obj2)).toEqual({ a: null, b: 2 });
  });

  it('should handle date objects correctly', () => {
    const date1 = new Date(2020, 0, 1);
    const date2 = new Date(2020, 0, 2);
    const date3 = new Date(2020, 0, 3);
    const obj1 = { a: date1, c: date2 };
    const obj2 = { b: 2, c: date3 };

    expect(merge(obj1, obj2)).toEqual({ a: date1, b: 2, c: date3 });
  });

  it('should handle regular expressions correctly', () => {
    const regex = /test/gi;
    const obj1 = { a: regex };
    const obj2 = { b: 2 };

    expect(merge(obj1, obj2)).toEqual({ a: regex, b: 2 });
  });

  it('should handle functions correctly', () => {
    const func = () => {
      console.info('this is a function');
    };
    const obj1 = { a: func, c: func };
    const obj2 = {
      b: 2,
      c: () => {
        console.info('this is a function');
      },
    };

    expect(merge(obj1, obj2)).toEqual({ a: func, b: 2, c: obj2.c });
  });

  it('should handle complex nested structures', () => {
    const obj1 = { a: { b: { c: 1 } } };
    const obj2 = { a: { b: { d: 2 }, e: 3 } };

    expect(merge(obj1, obj2)).toEqual({ a: { b: { c: 1, d: 2 }, e: 3 } });
  });

  it('should handle a mix of arrays, objects, and primitives', () => {
    const obj1 = { a: [1, 2], b: { c: 3 }, c: [4, 5] };
    const obj2 = { a: 'string', b: { d: 4 }, c: [5, 5, 6] };

    expect(merge(obj1, obj2)).toEqual({ a: 'string', b: { c: 3, d: 4 }, c: [5, 5, 6] });
  });
});
