"use strict";
// Auto-generated — do not edit manually
// convert toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
class Convert {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Convert between data formats
     */
    async data(body) {
        return this.client.post(`v1/convert/data`, body);
    }
    /**
     * Convert data format via URL (file download)
     */
    async data_file(params) {
        return this.client.get(`v1/convert/data`, params);
    }
    /**
     * Convert between markup formats
     */
    async markup(body) {
        return this.client.post(`v1/convert/markup`, body);
    }
    /**
     * Convert markup format via URL (file download)
     */
    async markup_file(params) {
        return this.client.get(`v1/convert/markup`, params);
    }
    /**
     * Generate TypeScript interfaces from JSON
     */
    async json_to_typescript(body) {
        return this.client.post(`v1/convert/json-to-typescript`, body);
    }
    /**
     * Convert between document formats
     */
    async document(body) {
        return this.client.post(`v1/convert/document`, body);
    }
    /**
     * Convert document via URL (file download)
     */
    async document_file(params) {
        return this.client.get(`v1/convert/document`, params);
    }
    /**
     * Convert between spreadsheet formats
     */
    async spreadsheet(body) {
        return this.client.post(`v1/convert/spreadsheet`, body);
    }
    /**
     * Convert spreadsheet via URL (file download)
     */
    async spreadsheet_file(params) {
        return this.client.get(`v1/convert/spreadsheet`, params);
    }
    /**
     * Convert between calendar and contact formats
     */
    async calendar(body) {
        return this.client.post(`v1/convert/calendar`, body);
    }
    /**
     * Convert presentation to PDF
     */
    async presentation(body) {
        return this.client.post(`v1/convert/presentation`, body);
    }
    /**
     * Convert presentation via URL (file download)
     */
    async presentation_file(params) {
        return this.client.get(`v1/convert/presentation`, params);
    }
    /**
     * Convert ebook formats
     */
    async ebook(body) {
        return this.client.post(`v1/convert/ebook`, body);
    }
    /**
     * Convert ebook via URL (file download)
     */
    async ebook_file(params) {
        return this.client.get(`v1/convert/ebook`, params);
    }
    /**
     * List all supported conversion formats
     */
    async list_all_formats() {
        return this.client.get(`v1/convert/formats`);
    }
    /**
     * List conversion formats for a category
     */
    async list_category_formats(category) {
        return this.client.get(`v1/convert/formats/${category}`);
    }
    /**
     * Poll async conversion job status
     */
    async poll_job_convert_jobs__job_id__get(job_id) {
        return this.client.get(`convert/jobs/${job_id}`);
    }
    /**
     * List supported media conversion formats
     */
    async supported_formats() {
        return this.client.get(`v1/convert/supported-media-formats`);
    }
    /**
     * Convert a media file (video or audio)
     */
    async media(body) {
        return this.client.post(`v1/convert/media`, body);
    }
    /**
     * Convert media via URL query params (streaming download)
     */
    async media_get(params) {
        return this.client.get(`v1/convert/media`, params);
    }
    /**
     * Extract a thumbnail frame from a video
     */
    async video_thumbnail(body) {
        return this.client.post(`v1/convert/video-thumbnail`, body);
    }
    /**
     * Probe media file for metadata
     */
    async media_info(body) {
        return this.client.post(`v1/convert/media-info`, body);
    }
    /**
     * Download a converted file
     */
    async download_file(object_name) {
        return this.client.get(`v1/convert/download/${object_name}`);
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
exports.Convert = Convert;
