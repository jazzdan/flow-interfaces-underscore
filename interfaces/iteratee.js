declare class Iteratee {
   array(element: any): void;
   array(element: any, index: number): void;
   array(element: any, index: number, list: Array): void;
   object(value: any): void;
   object(value: any, key: string | number): void;
   object(value: any, key: string | number, list: Object): void;
}

declare var iteratee: Iteratee;
