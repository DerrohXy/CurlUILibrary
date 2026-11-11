import { ElementProps } from "curlui/types";
export type TableProps = ElementProps<"table">;
export declare function Table(properties: TableProps, ...children: Array<any>): import("curlui").CurlUIElement;
export type TableCellProps = ElementProps<"thead" | "tfoot" | "tbody" | "td" | "th">;
export declare function TableHeading(properties: TableCellProps, ...children: Array<any>): import("curlui").CurlUIElement;
export declare function TableFooter(properties: TableCellProps, ...children: Array<any>): import("curlui").CurlUIElement;
export declare function TableBody(properties: TableCellProps, ...children: Array<any>): import("curlui").CurlUIElement;
export type TableRowProps = ElementProps<"tr">;
export declare function TableRow(properties: TableRowProps, ...children: Array<any>): import("curlui").CurlUIElement;
export declare function TableData(properties: TableCellProps, ...children: Array<any>): import("curlui").CurlUIElement;
export declare function TableHeader(properties: TableCellProps, ...children: Array<any>): import("curlui").CurlUIElement;
export type TableCaptionProps = ElementProps<"caption">;
export declare function TableCaption(properties: TableCaptionProps, ...children: Array<any>): import("curlui").CurlUIElement;
//# sourceMappingURL=Table.d.ts.map