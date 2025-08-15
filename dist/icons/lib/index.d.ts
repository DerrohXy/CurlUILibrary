import { CurlUIElementProps, CurlUIRenderElement, CurlUISvgTag } from "curlui/dist/types";
type SVGAttr = {
    [key: string]: any;
};
type SVGProps = {
    tag: CurlUISvgTag;
    attr: SVGAttr;
    child?: Array<SVGProps>;
};
export declare function GenIcon(properties: SVGProps): (props: CurlUIElementProps) => CurlUIRenderElement;
export {};
