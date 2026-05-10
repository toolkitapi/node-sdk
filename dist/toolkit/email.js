"use strict";
// Auto-generated — do not edit manually
// email toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Full email validation
     */
    async validate_email(params) {
        return this.client.get(`v1/email/validate`, params);
    }
    /**
     * Batch email validation
     */
    async validate_batch(body) {
        return this.client.post(`v1/email/validate-batch`, body);
    }
    /**
     * Detect catch-all / accept-all server
     */
    async catch_all(params) {
        return this.client.get(`v1/email/catch-all`, params);
    }
    /**
     * Role vs personal account detection
     */
    async role_check(params) {
        return this.client.get(`v1/email/role-check`, params);
    }
    /**
     * Normalize an email address
     */
    async normalize(params) {
        return this.client.get(`v1/email/normalize`, params);
    }
    /**
     * Identify email provider
     */
    async provider(params) {
        return this.client.get(`v1/email/provider`, params);
    }
    /**
     * Parse raw email headers
     */
    async parse_headers(body) {
        return this.client.post(`v1/email/headers`, body);
    }
    /**
     * Score email content for spam signals
     */
    async spam_score(body) {
        return this.client.post(`v1/email/spam-score`, body);
    }
    /**
     * Get Gravatar for an email address
     */
    async gravatar(params) {
        return this.client.get(`v1/email/gravatar`, params);
    }
    /**
     * Build or parse mailto: URIs
     */
    async mailto(body) {
        return this.client.post(`v1/email/mailto`, body);
    }
    /**
     * Score a form submission for spam likelihood
     */
    async form_spam_score(body) {
        return this.client.post(`v1/email/form-spam-score`, body);
    }
    /**
     * Email security posture check
     */
    async security(params) {
        return this.client.get(`v1/email/security`, params);
    }
    /**
     * Validate email authentication (SPF, DKIM, DMARC)
     */
    async auth(params, body) {
        return this.client.post(`v1/email/auth`, body, params);
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
exports.Email = Email;
