import { HttpClient } from "../client";
export interface BarcodeQr_generate_getParams extends Record<string, unknown> {
    data: string;
    size?: number;
    error_correction?: string | null;
    format?: string | null;
    fg_color?: string | null;
    bg_color?: string | null;
    module_shape?: string | null;
    [key: string]: unknown;
}
export interface BarcodeGenerate_getParams extends Record<string, unknown> {
    data: string;
    barcode_type?: string | null;
    format?: string | null;
    include_text?: boolean;
    fg_color?: string | null;
    bg_color?: string | null;
    module_height?: number;
    quiet_zone?: number;
    [key: string]: unknown;
}
export type BarcodeQr_generateBody = Record<string, unknown>;
export type BarcodeQr_decodeBody = Record<string, unknown>;
export type BarcodeQr_bulkBody = Record<string, unknown>;
export type BarcodeGenerateBody = Record<string, unknown>;
export type BarcodeDecodeBody = Record<string, unknown>;
export type BarcodeBulkBody = Record<string, unknown>;
export declare class Barcode {
    private client;
    constructor(client: HttpClient);
    /**
     * Generate a styled QR code
     */
    qr_generate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate a QR code (raw image)
     */
    qr_generate_get(params: BarcodeQr_generate_getParams): Promise<unknown>;
    /**
     * Decode QR code(s) from an image
     */
    qr_decode(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Bulk-generate QR codes
     */
    qr_bulk(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate a barcode
     */
    generate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate a barcode (raw image)
     */
    generate_get(params: BarcodeGenerate_getParams): Promise<unknown>;
    /**
     * Decode barcode(s) from an image
     */
    decode(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Bulk-generate barcodes
     */
    bulk(body: Record<string, unknown>): Promise<unknown>;
    /**
     * List supported barcode types
     */
    types(): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
