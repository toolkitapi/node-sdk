import { HttpClient } from "../client";
export interface ConvertData_fileParams extends Record<string, unknown> {
    url: string;
    from_format: string;
    to_format: string;
    delimiter?: (string | unknown) | null;
    include_header?: boolean;
    has_header?: boolean;
    skip_rows?: number;
    root_element?: string | null;
    pretty?: boolean;
    strip_namespaces?: boolean;
    flow_style?: boolean;
    filename?: string | null;
    [key: string]: unknown;
}
export interface ConvertMarkup_fileParams extends Record<string, unknown> {
    url: string;
    from_format: string;
    to_format: string;
    gfm?: boolean;
    sanitize?: boolean;
    preserve_links?: boolean;
    preserve_tables?: boolean;
    filename?: string | null;
    [key: string]: unknown;
}
export interface ConvertDocument_fileParams extends Record<string, unknown> {
    url: string;
    from_format: string;
    to_format: string;
    pages?: (string | unknown) | null;
    dpi?: number;
    page_size?: string | null;
    title?: (string | unknown) | null;
    author?: (string | unknown) | null;
    filename?: (string | unknown) | null;
    [key: string]: unknown;
}
export interface ConvertSpreadsheet_fileParams extends Record<string, unknown> {
    url: string;
    from_format: string;
    to_format: string;
    delimiter?: (string | unknown) | null;
    sheet_name?: string | null;
    filename?: (string | unknown) | null;
    [key: string]: unknown;
}
export interface ConvertPresentation_fileParams extends Record<string, unknown> {
    url: string;
    from_format: string;
    to_format?: string | null;
    filename?: (string | unknown) | null;
    [key: string]: unknown;
}
export interface ConvertEbook_fileParams extends Record<string, unknown> {
    url: string;
    from_format: string;
    to_format?: string | null;
    filename?: (string | unknown) | null;
    [key: string]: unknown;
}
export interface ConvertMedia_getParams extends Record<string, unknown> {
    url: string;
    source_format: string;
    target_format: string;
    [key: string]: unknown;
}
export type ConvertDataBody = Record<string, unknown>;
export type ConvertMarkupBody = Record<string, unknown>;
export type ConvertJson_to_typescriptBody = Record<string, unknown>;
export type ConvertDocumentBody = Record<string, unknown>;
export type ConvertSpreadsheetBody = Record<string, unknown>;
export type ConvertCalendarBody = Record<string, unknown>;
export type ConvertPresentationBody = Record<string, unknown>;
export type ConvertEbookBody = Record<string, unknown>;
export type ConvertMediaBody = Record<string, unknown>;
export type ConvertVideo_thumbnailBody = Record<string, unknown>;
export type ConvertMedia_infoBody = Record<string, unknown>;
export declare class Convert {
    private client;
    constructor(client: HttpClient);
    /**
     * Convert between data formats
     */
    data(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert data format via URL (file download)
     */
    data_file(params: ConvertData_fileParams): Promise<unknown>;
    /**
     * Convert between markup formats
     */
    markup(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert markup format via URL (file download)
     */
    markup_file(params: ConvertMarkup_fileParams): Promise<unknown>;
    /**
     * Generate TypeScript interfaces from JSON
     */
    json_to_typescript(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert between document formats
     */
    document(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert document via URL (file download)
     */
    document_file(params: ConvertDocument_fileParams): Promise<unknown>;
    /**
     * Convert between spreadsheet formats
     */
    spreadsheet(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert spreadsheet via URL (file download)
     */
    spreadsheet_file(params: ConvertSpreadsheet_fileParams): Promise<unknown>;
    /**
     * Convert between calendar and contact formats
     */
    calendar(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert presentation to PDF
     */
    presentation(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert presentation via URL (file download)
     */
    presentation_file(params: ConvertPresentation_fileParams): Promise<unknown>;
    /**
     * Convert ebook formats
     */
    ebook(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert ebook via URL (file download)
     */
    ebook_file(params: ConvertEbook_fileParams): Promise<unknown>;
    /**
     * List all supported conversion formats
     */
    list_all_formats(): Promise<unknown>;
    /**
     * List conversion formats for a category
     */
    list_category_formats(category: string): Promise<unknown>;
    /**
     * Poll async conversion job status
     */
    poll_job_convert_jobs__job_id__get(job_id: string): Promise<unknown>;
    /**
     * List supported media conversion formats
     */
    supported_formats(): Promise<unknown>;
    /**
     * Convert a media file (video or audio)
     */
    media(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert media via URL query params (streaming download)
     */
    media_get(params: ConvertMedia_getParams): Promise<unknown>;
    /**
     * Extract a thumbnail frame from a video
     */
    video_thumbnail(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Probe media file for metadata
     */
    media_info(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Download a converted file
     */
    download_file(object_name: string): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
