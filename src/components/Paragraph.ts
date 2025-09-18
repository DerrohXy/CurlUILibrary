import { CustomElement } from "../core";
import { Classes } from "../core";
import { CurlUIElementProps } from "curlui/types";

export type ParagraphProps = CurlUIElementProps<HTMLParagraphElement>;

export function Paragraph(properties: ParagraphProps & { text: string }) {
    return CustomElement(
        "p",
        Classes.PARAGRAPH,
        {},
        properties,
        properties.text
    );
}
