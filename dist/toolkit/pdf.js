"use strict";
// Auto-generated — do not edit manually
// pdf toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf = void 0;
class Pdf {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Merge multiple PDFs into one
     */
    async merge(body) {
        return this.client.post(`v1/pdf/merge`, body);
    }
    /**
     * Split a PDF into parts
     */
    async split(body) {
        return this.client.post(`v1/pdf/split`, body);
    }
    /**
     * Rotate PDF pages
     */
    async rotate(body) {
        return this.client.post(`v1/pdf/rotate`, body);
    }
    /**
     * Compress a PDF to reduce file size
     */
    async compress(body) {
        return this.client.post(`v1/pdf/compress`, body);
    }
    /**
     * Add a text watermark to PDF pages
     */
    async watermark(body) {
        return this.client.post(`v1/pdf/watermark`, body);
    }
    /**
     * Encrypt or decrypt a PDF
     */
    async protect(body) {
        return this.client.post(`v1/pdf/protect`, body);
    }
    /**
     * Combine images into a PDF
     */
    async from_images(body) {
        return this.client.post(`v1/pdf/from-images`, body);
    }
    /**
     * Generate PDF from a Liquid template
     */
    async from_template(body) {
        return this.client.post(`v1/pdf/from-template`, body);
    }
    /**
     * Extract text from a PDF
     */
    async text_extract(body) {
        return this.client.post(`v1/pdf/text`, body);
    }
    /**
     * Read or update PDF metadata
     */
    async metadata(body) {
        return this.client.post(`v1/pdf/metadata`, body);
    }
    /**
     * Extract tables from a PDF
     */
    async table_extract(body) {
        return this.client.post(`v1/pdf/table-extract`, body);
    }
    /**
     * Read or fill PDF form fields
     */
    async form_fields(body) {
        return this.client.post(`v1/pdf/form-fields`, body);
    }
    /**
     * Get structural information about a PDF
     */
    async info(body) {
        return this.client.post(`v1/pdf/info`, body);
    }
    /**
     * Extract text from scanned/image PDFs using OCR
     */
    async ocr(body) {
        return this.client.post(`v1/pdf/ocr`, body);
    }
    /**
     * Render PDF pages as images
     */
    async to_images(body) {
        return this.client.post(`v1/pdf/to-images`, body);
    }
    /**
     * Download a processed file
     */
    async download_file(object_name) {
        return this.client.get(`v1/pdf/download/${object_name}`);
    }
    /**
     * List pre-built PDF templates
     */
    async list_pdf_templates(params) {
        return this.client.get(`v1/pdf/templates`, params);
    }
    /**
     * Get a single PDF template
     */
    async get_pdf_template(template_id) {
        return this.client.get(`v1/pdf/templates/${template_id}`);
    }
    /**
     * Root
     */
    async root__get() {
        return this.client.get(``);
    }
    /**
     * Status
     */
    async status() {
        return this.client.get(`v1/status`);
    }
}
exports.Pdf = Pdf;
