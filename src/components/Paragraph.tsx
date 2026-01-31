import { CustomElement } from "../core";
import { Classes } from "../core";
import { ElementProps } from "curlui/types";

export type ParagraphProps = ElementProps<HTMLParagraphElement>;

export function Paragraph(properties: ParagraphProps & { text: string }) {
    return CustomElement(
        "p",
        Classes.PARAGRAPH,
        {},
        properties,
        properties.text,
    );
}
