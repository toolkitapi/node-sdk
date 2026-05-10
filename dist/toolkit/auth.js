"use strict";
// Auto-generated — do not edit manually
// auth toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Hash a password
     */
    async hash_password(body) {
        return this.client.post(`v1/auth/hash-password`, body);
    }
    /**
     * Verify a password against a hash
     */
    async verify_password(body) {
        return this.client.post(`v1/auth/verify-password`, body);
    }
    /**
     * Analyze password strength
     */
    async password_strength(body) {
        return this.client.post(`v1/auth/password-strength`, body);
    }
    /**
     * Generate secure random passwords
     */
    async generate_password(body) {
        return this.client.post(`v1/auth/generate-password`, body);
    }
    /**
     * Generate a JWT token
     */
    async jwt_generate(body) {
        return this.client.post(`v1/auth/jwt-generate`, body);
    }
    /**
     * Verify a JWT token
     */
    async jwt_verify(body) {
        return this.client.post(`v1/auth/jwt-verify`, body);
    }
    /**
     * Decode a JWT without verification
     */
    async jwt_decode(body) {
        return this.client.post(`v1/auth/jwt-decode`, body);
    }
    /**
     * Generate a TOTP secret and QR code
     */
    async totp_generate(params) {
        return this.client.get(`v1/auth/totp-generate`, params);
    }
    /**
     * Verify a TOTP code
     */
    async totp_verify(body) {
        return this.client.post(`v1/auth/totp-verify`, body);
    }
    /**
     * Generate a random key or identifier
     */
    async generate_key(params) {
        return this.client.get(`v1/auth/generate-key`, params);
    }
    /**
     * Generate an asymmetric keypair
     */
    async generate_keypair(body) {
        return this.client.post(`v1/auth/generate-keypair`, body);
    }
    /**
     * Encrypt plaintext with AES-256-GCM
     */
    async encrypt(body) {
        return this.client.post(`v1/auth/encrypt`, body);
    }
    /**
     * Decrypt ciphertext with AES-256-GCM
     */
    async decrypt(body) {
        return this.client.post(`v1/auth/decrypt`, body);
    }
    /**
     * Hash a string
     */
    async hash_string(body) {
        return this.client.post(`v1/auth/hash`, body);
    }
    /**
     * Generate an HMAC
     */
    async hmac_generate(body) {
        return this.client.post(`v1/auth/hmac`, body);
    }
    /**
     * Verify an HMAC signature
     */
    async hmac_verify(body) {
        return this.client.post(`v1/auth/hmac-verify`, body);
    }
    /**
     * Base64 encode a string
     */
    async base64_encode(body) {
        return this.client.post(`v1/auth/base64-encode`, body);
    }
    /**
     * Base64 decode a string
     */
    async base64_decode(body) {
        return this.client.post(`v1/auth/base64-decode`, body);
    }
    /**
     * Encode or decode a string
     */
    async encode_data(body) {
        return this.client.post(`v1/auth/encode`, body);
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
exports.Auth = Auth;
