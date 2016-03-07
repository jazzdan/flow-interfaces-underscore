/* jshint ignore: start */
declare class _UnderscoreCallbacks_ {
   iterateeArray(element: any): void;
   iterateeArray(element: any, index: number): void;
   iterateeArray(element: any, index: number, list: Array<any>): void;
   iterateeObject(value: any): void;
   iterateeObject(value: any, key: string | number): void;
   iterateeObject(value: any, key: string | number, list: Object): void;
   iterateeReduceArray(memo: any, value: any): Array<any>;
   iterateeReduceArray(memo: any, value: any, index: number): Array<any>;
   iterateeReduceArray(memo: any, value: any, key: string | number): Array<any>;
   predicate(value: any): boolean;
}

declare var _cb_: _UnderscoreCallbacks_;

declare class _UnderscoreChain_ {
   chain(): _UnderscoreChain_;
   each(iteratee: _cb_.iterateeObject | _cb_.iterateeArray): _UnderscoreChain_;
   each(iteratee: _cb_.iterateeObject | _cb_.iterateeArray, context: Object): _UnderscoreChain_;
   filter(predicate: _cb_.predicate): _UnderscoreChain_;
   filter(predicate: _cb_.predicate, contect: Object): _UnderscoreChain_;
   findWhere<T>(properties: {}): _UnderscoreChain_;
   map(iteratee: _cb_.iterateeObject | _cb_.iterateeArray): _UnderscoreChain_;
   map(iteratee: _cb_.iterateeObject | _cb_.iterateeArray, context: Object): _UnderscoreChain_;
   omit(keys: string | Array<any> | Function): _UnderscoreChain_;
   reduce(iteratee: _cb_.iterateeReduceArray): _UnderscoreChain_;
   reduce(iteratee: _cb_.iterateeReduceArray, memo: Array<any>): _UnderscoreChain_;
   reduce(iteratee: _cb_.iterateeReduceArray, memo: Array<any>, context: Object): _UnderscoreChain_;
}

declare class _Underscore_ {
   chain(object: Object): _UnderscoreChain_;
   each(list: Array<any> | Object, iteratee: _cb_.iterateeObject | _cb_.iterateeArray): Array<any> | Object;
   each(list: Array<any> | Object, iteratee: _cb_.iterateeObject | _cb_.iterateeArray, context: Object): Array<any> | Object;
   filter(list: Array<any>, predicate: _cb_.predicate): Array<any>;
   filter(list: Array<any>, predicate: _cb_.predicate, contect: Object): Array<any>;
   findWhere<T>(list: Array<any>, properties: {}): T;
   intersection(...w: Array<any>): Array<any>;
   isArray(object: any): boolean;
   isEmpty(object: Object): boolean;
   isObject(object: any): boolean;
   map(list: Array<any> | Object, iteratee: _cb_.iterateeObject | _cb_.iterateeArray): Array<any> | Object;
   map(list: Array<any> | Object, iteratee: _cb_.iterateeObject | _cb_.iterateeArray, context: Object): Array<any> | Object;
   omit(object: Object, keys: string | Array<any> | Function): Object;
   reduce(list: Array<any>, iteratee: _cb_.iterateeReduceArray): string | number;
   reduce(list: Array<any>, iteratee: _cb_.iterateeReduceArray, memo: Array<any>): string | number;
   reduce(list: Array<any>, iteratee: _cb_.iterateeReduceArray, memo: Array<any>, context: Object): string | number;
}

declare var _: _Underscore_;
