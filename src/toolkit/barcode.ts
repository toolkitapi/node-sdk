// Auto-generated — do not edit manually
// barcode toolkit

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

export class Barcode {
  constructor(private client: HttpClient) {}

  /**
   * Generate a styled QR code
   */
  async qr_generate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/qr/generate`, body);
  }

  /**
   * Generate a QR code (raw image)
   */
  async qr_generate_get(params: BarcodeQr_generate_getParams): Promise<unknown> {
    return this.client.get(`v1/qr/generate`, params);
  }

  /**
   * Decode QR code(s) from an image
   */
  async qr_decode(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/qr/decode`, body);
  }

  /**
   * Bulk-generate QR codes
   */
  async qr_bulk(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/qr/bulk`, body);
  }

  /**
   * Generate a barcode
   */
  async generate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/barcode/generate`, body);
  }

  /**
   * Generate a barcode (raw image)
   */
  async generate_get(params: BarcodeGenerate_getParams): Promise<unknown> {
    return this.client.get(`v1/barcode/generate`, params);
  }

  /**
   * Decode barcode(s) from an image
   */
  async decode(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/barcode/decode`, body);
  }

  /**
   * Bulk-generate barcodes
   */
  async bulk(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/barcode/bulk`, body);
  }

  /**
   * List supported barcode types
   */
  async types(): Promise<unknown> {
    return this.client.get(`v1/barcode/types`);
  }

  /**
   * Root
   */
  async root__get(): Promise<unknown> {
    return this.client.get(``);
  }

  /**
   * Status
   */
  async status(): Promise<unknown> {
    return this.client.get(`v1/status`);
  }

}
