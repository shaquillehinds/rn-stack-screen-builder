export declare function kFormatter(num: number): string | number;
/**
 *
 * This function will make the first letter of a string and make it capital
 *
 * @param {word} string
 * @returns string
 *
 */
export declare function firstLetterCap(word?: string): string;
export declare function titleCase(words?: string): string | undefined;
export declare function snakeToTitleCase(string: string): string | undefined;
/**
 * @example
 * ```welcomeToJamrock => WELCOME_TO_JAMROCK```
 */
export declare function camelToUpperSnake(str: string): string;
interface CentsToDollarsProps {
    cents: number;
    dollarSign?: boolean;
    currency?: string;
}
export declare function centsToDollars({ cents, dollarSign, currency, }: CentsToDollarsProps): string;
export declare function _24hrsToDate(string: string): Date;
export declare function toBase64(string: string): string;
export declare function fromBase64(string: string): string;
export declare function objToQueryStr(obj: {
    [key: string]: any;
}): string;
export declare function getTodayInSeconds(): number;
export declare function sanitizePhoneNumber(number: string, addPlus?: boolean): string;
export {};
