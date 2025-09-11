import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export function Paragraph(properties: CurlUIElementProps & { text: string }) {
    return CustomElement(
        "p",
        Classes.PARAGRAPH,
        {},
        properties,
        properties.text
    );
}
