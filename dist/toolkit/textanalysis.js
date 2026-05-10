"use strict";
// Auto-generated — do not edit manually
// textanalysis toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textanalysis = void 0;
class Textanalysis {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Readability Score
     */
    async readability_score(body) {
        return this.client.post(`v1/text/readability`, body);
    }
    /**
     * Summarize
     */
    async summarize(body) {
        return this.client.post(`v1/text/summarize`, body);
    }
    /**
     * Text Similarity
     */
    async text_similarity(body) {
        return this.client.post(`v1/text/similarity`, body);
    }
    /**
     * Text Diff
     */
    async text_diff(body) {
        return this.client.post(`v1/text/diff`, body);
    }
    /**
     * Data Mask
     */
    async data_mask(body) {
        return this.client.post(`v1/text/pii-mask`, body);
    }
    /**
     * Profanity Filter
     */
    async profanity_filter(body) {
        return this.client.post(`v1/text/profanity`, body);
    }
    /**
     * Word Frequency
     */
    async word_frequency(body) {
        return this.client.post(`v1/text/word-frequency`, body);
    }
    /**
     * Detect Language
     */
    async detect_language(body) {
        return this.client.post(`v1/text/language`, body);
    }
    /**
     * Transliterate Text
     */
    async transliterate_text(body) {
        return this.client.post(`v1/text/transliterate`, body);
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
exports.Textanalysis = Textanalysis;
