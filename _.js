declare class Underscore {
   each(list: Array | Object, iteratee: iteratee.object | iteratee.array): Array | Object;
   each(list: Array | Object, iteratee: iteratee.object | iteratee.array, context: Object): Array | Object;
   filter(list: Array, predicate: Function): Array;
   filter(list: Array, predicate: Function, contect: Object): Array;
   findWhere<T>(list: Array<T>, properties: {}): T;
   isArray(object: any): boolean;
   isEmpty(object: Object): boolean;
   isObject(object: any): boolean;
   map(list: Array | Object, iteratee: iteratee.object | iteratee.array): Array | Object;
   map(list: Array | Object, iteratee: iteratee.object | iteratee.array, context: Object): Array | Object;
   omit(object: Object, keys: string | Array<string> | Function): Object;
}

declare var _: Underscore;
