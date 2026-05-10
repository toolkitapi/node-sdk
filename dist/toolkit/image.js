"use strict";
// Auto-generated — do not edit manually
// image toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
class Image {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Resize an image
     */
    async resize(params) {
        return this.client.get(`v1/image/resize`, params);
    }
    /**
     * Crop an image
     */
    async crop(params) {
        return this.client.get(`v1/image/crop`, params);
    }
    /**
     * Rotate an image
     */
    async rotate(params) {
        return this.client.get(`v1/image/rotate`, params);
    }
    /**
     * Flip an image
     */
    async flip(params) {
        return this.client.get(`v1/image/flip`, params);
    }
    /**
     * Compress an image
     */
    async compress(params) {
        return this.client.get(`v1/image/compress`, params);
    }
    /**
     * Strip EXIF metadata
     */
    async strip_exif(params) {
        return this.client.get(`v1/image/strip-exif`, params);
    }
    /**
     * Auto-trim image borders
     */
    async trim(params) {
        return this.client.get(`v1/image/trim`, params);
    }
    /**
     * Add padding to an image
     */
    async pad(params) {
        return this.client.get(`v1/image/pad`, params);
    }
    /**
     * Composite two images
     */
    async composite(params) {
        return this.client.get(`v1/image/composite`, params);
    }
    /**
     * Reduce to a limited colour palette
     */
    async dither(params) {
        return this.client.get(`v1/image/dither`, params);
    }
    /**
     * Remove image background
     */
    async remove_background(params) {
        return this.client.get(`v1/image/remove-background`, params);
    }
    /**
     * Convert to grayscale
     */
    async grayscale(params) {
        return this.client.get(`v1/image/filter/grayscale`, params);
    }
    /**
     * Apply Gaussian blur
     */
    async blur(params) {
        return this.client.get(`v1/image/filter/blur`, params);
    }
    /**
     * Sharpen an image
     */
    async sharpen(params) {
        return this.client.get(`v1/image/filter/sharpen`, params);
    }
    /**
     * Apply sepia tone
     */
    async sepia(params) {
        return this.client.get(`v1/image/filter/sepia`, params);
    }
    /**
     * Adjust brightness
     */
    async brightness(params) {
        return this.client.get(`v1/image/adjust/brightness`, params);
    }
    /**
     * Adjust contrast
     */
    async contrast(params) {
        return this.client.get(`v1/image/adjust/contrast`, params);
    }
    /**
     * Adjust saturation
     */
    async saturation(params) {
        return this.client.get(`v1/image/adjust/saturation`, params);
    }
    /**
     * Generate a placeholder image
     */
    async placeholder(body) {
        return this.client.post(`v1/image/placeholder`, body);
    }
    /**
     * Generate a placeholder image (raw)
     */
    async placeholder_get(params) {
        return this.client.get(`v1/image/placeholder`, params);
    }
    /**
     * Add a text watermark
     */
    async watermark_text(params) {
        return this.client.get(`v1/image/watermark/text`, params);
    }
    /**
     * Add an image watermark
     */
    async watermark_image(params) {
        return this.client.get(`v1/image/watermark/image`, params);
    }
    /**
     * Extract image metadata (EXIF)
     */
    async metadata(body) {
        return this.client.post(`v1/image/extract/metadata`, body);
    }
    /**
     * Extract image metadata from URL
     */
    async metadata_get(params) {
        return this.client.get(`v1/image/extract/metadata`, params);
    }
    /**
     * Extract dominant colour palette
     */
    async colors(body) {
        return this.client.post(`v1/image/extract/colors`, body);
    }
    /**
     * Extract colour palette from URL
     */
    async colors_get(params) {
        return this.client.get(`v1/image/extract/colors`, params);
    }
    /**
     * Fetch highest-resolution favicon
     */
    async favicon(params) {
        return this.client.get(`v1/image/favicon`, params);
    }
    /**
     * Download a processed image
     */
    async download_image(object_name) {
        return this.client.get(`v1/image/download/${object_name}`);
    }
    /**
     * Render raw HTML/CSS as an image
     */
    async from_html(body) {
        return this.client.post(`v1/image/from-html`, body);
    }
    /**
     * Render a Liquid template as an image
     */
    async from_template(body) {
        return this.client.post(`v1/image/from-template`, body);
    }
    /**
     * List pre-built image templates
     */
    async list_image_templates(params) {
        return this.client.get(`v1/image/templates`, params);
    }
    /**
     * Get a single image template
     */
    async get_image_template(template_id) {
        return this.client.get(`v1/image/templates/${template_id}`);
    }
    /**
     * Convert between image formats
     */
    async convert_image(body) {
        return this.client.post(`v1/image/convert`, body);
    }
    /**
     * Convert image via URL (file download)
     */
    async convert_image_file(params) {
        return this.client.get(`v1/image/convert`, params);
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
exports.Image = Image;
