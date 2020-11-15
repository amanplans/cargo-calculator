export interface IParser<T> {
    name: string;
    result: T;
    parse(input: string): T;
}
