import { CurlUIChildComponent, CurlUIRenderElement, CurlUIElementProps } from "curlui/types";
export type ActivityProps = CurlUIElementProps<HTMLDivElement> & {
    content?: CurlUIChildComponent | Array<CurlUIChildComponent>;
    footerBar?: CurlUIRenderElement;
    navigationBar?: CurlUIRenderElement;
};
export declare function Activity(properties: ActivityProps): CurlUIRenderElement;
//# sourceMappingURL=Activity.d.ts.map