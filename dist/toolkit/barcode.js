"use strict";
// Auto-generated — do not edit manually
// barcode toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barcode = void 0;
class Barcode {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Generate a styled QR code
     */
    async qr_generate(body) {
        return this.client.post(`v1/qr/generate`, body);
    }
    /**
     * Generate a QR code (raw image)
     */
    async qr_generate_get(params) {
        return this.client.get(`v1/qr/generate`, params);
    }
    /**
     * Decode QR code(s) from an image
     */
    async qr_decode(body) {
        return this.client.post(`v1/qr/decode`, body);
    }
    /**
     * Bulk-generate QR codes
     */
    async qr_bulk(body) {
        return this.client.post(`v1/qr/bulk`, body);
    }
    /**
     * Generate a barcode
     */
    async generate(body) {
        return this.client.post(`v1/barcode/generate`, body);
    }
    /**
     * Generate a barcode (raw image)
     */
    async generate_get(params) {
        return this.client.get(`v1/barcode/generate`, params);
    }
    /**
     * Decode barcode(s) from an image
     */
    async decode(body) {
        return this.client.post(`v1/barcode/decode`, body);
    }
    /**
     * Bulk-generate barcodes
     */
    async bulk(body) {
        return this.client.post(`v1/barcode/bulk`, body);
    }
    /**
     * List supported barcode types
     */
    async types() {
        return this.client.get(`v1/barcode/types`);
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
exports.Barcode = Barcode;
