"use strict";
// Auto-generated — do not edit manually
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
class HttpClient {
    baseUrl;
    apiKey;
    constructor(baseUrl, apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }
    async request(path, options = {}) {
        const { method = "GET", headers = {}, body, params } = options;
        const url = new URL(`${this.baseUrl}${path}`);
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (value !== undefined && value !== null) {
                    url.searchParams.set(key, String(value));
                }
            }
        }
        const response = await fetch(url.toString(), {
            method,
            headers: {
                "X-API-Key": this.apiKey,
                "Content-Type": "application/json",
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        });
        if (!response.ok) {
            const detail = await response.text().catch(() => "");
            throw new Error(`HTTP ${response.status}: ${detail || response.statusText}`);
        }
        return response.json();
    }
    async get(path, params) {
        return this.request(path, { params: params });
    }
    async post(path, body, params) {
        return this.request(path, { method: "POST", body, params: params });
    }
    async put(path, body, params) {
        return this.request(path, { method: "PUT", body, params: params });
    }
    async delete(path, params) {
        return this.request(path, { method: "DELETE", params: params });
    }
    async patch(path, body, params) {
        return this.request(path, { method: "PATCH", body, params: params });
    }
    async head(path, params) {
        return this.request(path, { method: "HEAD", params: params });
    }
    async options(path, params) {
        return this.request(path, { method: "OPTIONS", params: params });
    }
}
exports.HttpClient = HttpClient;
