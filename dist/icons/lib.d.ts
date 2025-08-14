import { CurlUIElementProps, CurlUIRenderElement } from "curlui/dist/types";
type SVGAttr = {
    [key: string]: any;
};
type SVGProps = {
    tag: string;
    attr: SVGAttr;
    child?: Array<SVGProps>;
};
export declare function GenIcon(properties: SVGProps): (props: CurlUIElementProps) => CurlUIRenderElement;
export {};
