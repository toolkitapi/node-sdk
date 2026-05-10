import { HttpClient } from "../client";
export interface PdfList_pdf_templatesParams extends Record<string, unknown> {
    category?: (string | unknown) | null;
    [key: string]: unknown;
}
export type PdfMergeBody = Record<string, unknown>;
export type PdfSplitBody = Record<string, unknown>;
export type PdfRotateBody = Record<string, unknown>;
export type PdfCompressBody = Record<string, unknown>;
export type PdfWatermarkBody = Record<string, unknown>;
export type PdfProtectBody = Record<string, unknown>;
export type PdfFrom_imagesBody = Record<string, unknown>;
export type PdfFrom_templateBody = Record<string, unknown>;
export type PdfText_extractBody = Record<string, unknown>;
export type PdfMetadataBody = Record<string, unknown>;
export type PdfTable_extractBody = Record<string, unknown>;
export type PdfForm_fieldsBody = Record<string, unknown>;
export type PdfInfoBody = Record<string, unknown>;
export type PdfOcrBody = Record<string, unknown>;
export type PdfTo_imagesBody = Record<string, unknown>;
export declare class Pdf {
    private client;
    constructor(client: HttpClient);
    /**
     * Merge multiple PDFs into one
     */
    merge(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Split a PDF into parts
     */
    split(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Rotate PDF pages
     */
    rotate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Compress a PDF to reduce file size
     */
    compress(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Add a text watermark to PDF pages
     */
    watermark(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Encrypt or decrypt a PDF
     */
    protect(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Combine images into a PDF
     */
    from_images(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate PDF from a Liquid template
     */
    from_template(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Extract text from a PDF
     */
    text_extract(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Read or update PDF metadata
     */
    metadata(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Extract tables from a PDF
     */
    table_extract(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Read or fill PDF form fields
     */
    form_fields(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Get structural information about a PDF
     */
    info(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Extract text from scanned/image PDFs using OCR
     */
    ocr(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Render PDF pages as images
     */
    to_images(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Download a processed file
     */
    download_file(object_name: string): Promise<unknown>;
    /**
     * List pre-built PDF templates
     */
    list_pdf_templates(params: PdfList_pdf_templatesParams): Promise<unknown>;
    /**
     * Get a single PDF template
     */
    get_pdf_template(template_id: string): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
