import type { FilledLinkToDocumentField } from "@prismicio/types";
import {
	RichTextFunctionSerializer,
	RichTextMapSerializer
} from "@prismicio/richtext";

/**
 * Resolves a link to a Prismic document to a URL
 *
 * @param linkToDocumentField - A document link field to resolve
 *
 * @returns Resolved URL
 *
 * @typeParam ReturnType - Return type of your link resolver function, useful if you prefer to return a complex object
 *
 * @see Prismic link resolver documentation: {@link https://prismic.io/docs/technologies/link-resolver-javascript}
 */
export type LinkResolverFunction<ReturnType = string> = (
	linkToDocumentField: Omit<FilledLinkToDocumentField, "url">
) => ReturnType;

// TODO: Add TSDocs
export type HTMLSerializerFunction = RichTextFunctionSerializer<string>;

// TODO: Add TSDocs
export type HTMLSerializerMap = RichTextMapSerializer<string>;
