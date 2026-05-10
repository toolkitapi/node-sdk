// Auto-generated — do not edit manually
// pdf toolkit

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

export class Pdf {
  constructor(private client: HttpClient) {}

  /**
   * Merge multiple PDFs into one
   */
  async merge(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/merge`, body);
  }

  /**
   * Split a PDF into parts
   */
  async split(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/split`, body);
  }

  /**
   * Rotate PDF pages
   */
  async rotate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/rotate`, body);
  }

  /**
   * Compress a PDF to reduce file size
   */
  async compress(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/compress`, body);
  }

  /**
   * Add a text watermark to PDF pages
   */
  async watermark(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/watermark`, body);
  }

  /**
   * Encrypt or decrypt a PDF
   */
  async protect(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/protect`, body);
  }

  /**
   * Combine images into a PDF
   */
  async from_images(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/from-images`, body);
  }

  /**
   * Generate PDF from a Liquid template
   */
  async from_template(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/from-template`, body);
  }

  /**
   * Extract text from a PDF
   */
  async text_extract(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/text`, body);
  }

  /**
   * Read or update PDF metadata
   */
  async metadata(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/metadata`, body);
  }

  /**
   * Extract tables from a PDF
   */
  async table_extract(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/table-extract`, body);
  }

  /**
   * Read or fill PDF form fields
   */
  async form_fields(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/form-fields`, body);
  }

  /**
   * Get structural information about a PDF
   */
  async info(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/info`, body);
  }

  /**
   * Extract text from scanned/image PDFs using OCR
   */
  async ocr(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/ocr`, body);
  }

  /**
   * Render PDF pages as images
   */
  async to_images(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/pdf/to-images`, body);
  }

  /**
   * Download a processed file
   */
  async download_file(object_name: string): Promise<unknown> {
    return this.client.get(`v1/pdf/download/${object_name}`);
  }

  /**
   * List pre-built PDF templates
   */
  async list_pdf_templates(params: PdfList_pdf_templatesParams): Promise<unknown> {
    return this.client.get(`v1/pdf/templates`, params);
  }

  /**
   * Get a single PDF template
   */
  async get_pdf_template(template_id: string): Promise<unknown> {
    return this.client.get(`v1/pdf/templates/${template_id}`);
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
