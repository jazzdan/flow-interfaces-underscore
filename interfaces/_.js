/* jshint ignore: start */
declare class _UnderscoreCallbacks_ {
   iterateeArray(element: any): void;
   iterateeArray(element: any, index: number): void;
   iterateeArray(element: any, index: number, list: Array): void;
   iterateeObject(value: any): void;
   iterateeObject(value: any, key: string | number): void;
   iterateeObject(value: any, key: string | number, list: Object): void;
   iterateeReduceArray(memo: any, value: any, index: number): Array;
   iterateeReduceArray(memo: any, value: any, key: string | number): Array;
   predicate(value: any): boolean;
}

declare var _cb_: _UnderscoreCallbacks_;

declare class _UnderscoreChain_ {
   each(iteratee: _cb_.iterateeObject | _cb_.iterateeArray): Array | Object;
   each(iteratee: _cb_.iterateeObject | _cb_.iterateeArray, context: Object): Array | Object;
   filter(predicate: _cb_.predicate): Array;
   filter(predicate: _cb_.predicate, contect: Object): Array;
   findWhere<T>(properties: {}): T;
   isArray(): boolean;
   isEmpty(): boolean;
   isObject(): boolean;
   map(iteratee: _cb_.iterateeObject | _cb_.iterateeArray): Array | Object;
   map(iteratee: _cb_.iterateeObject | _cb_.iterateeArray, context: Object): Array | Object;
   omit(keys: string | Array<string> | Function): Object;
   chain(): _UnderscoreChain_;
   reduce(iteratee: _cb_.iterateeReduceArray): string | number;
   reduce(iteratee: _cb_.iterateeReduceArray, memo: Array): string | number;
   reduce(iteratee: _cb_.iterateeReduceArray, memo: Array, context: Object): string | number;
}

declare class _Underscore_ {
   each(list: Array | Object, iteratee: _cb_.iterateeObject | _cb_.iterateeArray): Array | Object;
   each(list: Array | Object, iteratee: _cb_.iterateeObject | _cb_.iterateeArray, context: Object): Array | Object;
   filter(list: Array, predicate: _cb_.predicate): Array;
   filter(list: Array, predicate: _cb_.predicate, contect: Object): Array;
   findWhere<T>(list: Array<T>, properties: {}): T;
   isArray(object: any): boolean;
   isEmpty(object: Object): boolean;
   isObject(object: any): boolean;
   map(list: Array | Object, iteratee: _cb_.iterateeObject | _cb_.iterateeArray): Array | Object;
   map(list: Array | Object, iteratee: _cb_.iterateeObject | _cb_.iterateeArray, context: Object): Array | Object;
   omit(object: Object, keys: string | Array<string> | Function): Object;
   chain(object: Object): _UnderscoreChain_;
   reduce(list: Array, iteratee: _cb_.iterateeReduceArray): string | number;
   reduce(list: Array, iteratee: _cb_.iterateeReduceArray, memo: Array): string | number;
   reduce(list: Array, iteratee: _cb_.iterateeReduceArray, memo: Array, context: Object): string | number;
}

declare var _: _Underscore_;
