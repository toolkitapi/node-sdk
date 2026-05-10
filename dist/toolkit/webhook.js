"use strict";
// Auto-generated — do not edit manually
// webhook toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
class Webhook {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Create a request bin
     */
    async create_bin(body) {
        return this.client.post(`v1/bins`, body);
    }
    /**
     * Get bin details
     */
    async get_bin(bin_id) {
        return this.client.get(`v1/bins/${bin_id}`);
    }
    /**
     * Delete a bin
     */
    async delete_bin(bin_id) {
        return this.client.delete(`v1/bins/${bin_id}`);
    }
    /**
     * List captured requests
     */
    async list_requests(bin_id, params) {
        return this.client.get(`v1/bins/${bin_id}/requests`, params);
    }
    /**
     * Get captured request detail
     */
    async get_request_detail(bin_id, request_id) {
        return this.client.get(`v1/bins/${bin_id}/requests/${request_id}`);
    }
    /**
     * Replay a captured request
     */
    async replay_request(bin_id, request_id, body) {
        return this.client.post(`v1/bins/${bin_id}/requests/${request_id}/replay`, body);
    }
    /**
     * Catch and record an HTTP request
     */
    async catch_request_1(bin_id) {
        return this.client.post(`v1/catch/${bin_id}`);
    }
    /**
     * Catch and record an HTTP request
     */
    async catch_request_2(bin_id) {
        return this.client.options(`v1/catch/${bin_id}`);
    }
    /**
     * Catch and record an HTTP request
     */
    async catch_request_3(bin_id) {
        return this.client.head(`v1/catch/${bin_id}`);
    }
    /**
     * Catch and record an HTTP request
     */
    async catch_request_4(bin_id) {
        return this.client.delete(`v1/catch/${bin_id}`);
    }
    /**
     * Catch and record an HTTP request
     */
    async catch_request_5(bin_id) {
        return this.client.patch(`v1/catch/${bin_id}`);
    }
    /**
     * Catch and record an HTTP request
     */
    async catch_request_6(bin_id) {
        return this.client.put(`v1/catch/${bin_id}`);
    }
    /**
     * Catch and record an HTTP request
     */
    async catch_request_7(bin_id) {
        return this.client.get(`v1/catch/${bin_id}`);
    }
    /**
     * Create a mock endpoint
     */
    async create_mock(body) {
        return this.client.post(`v1/mocks`, body);
    }
    /**
     * Get mock endpoint details
     */
    async get_mock(mock_id) {
        return this.client.get(`v1/mocks/${mock_id}`);
    }
    /**
     * Delete a mock endpoint
     */
    async delete_mock(mock_id) {
        return this.client.delete(`v1/mocks/${mock_id}`);
    }
    /**
     * Hit a mock endpoint
     */
    async hit_mock_1(mock_id) {
        return this.client.post(`v1/mock/${mock_id}`);
    }
    /**
     * Hit a mock endpoint
     */
    async hit_mock_2(mock_id) {
        return this.client.options(`v1/mock/${mock_id}`);
    }
    /**
     * Hit a mock endpoint
     */
    async hit_mock_3(mock_id) {
        return this.client.head(`v1/mock/${mock_id}`);
    }
    /**
     * Hit a mock endpoint
     */
    async hit_mock_4(mock_id) {
        return this.client.delete(`v1/mock/${mock_id}`);
    }
    /**
     * Hit a mock endpoint
     */
    async hit_mock_5(mock_id) {
        return this.client.patch(`v1/mock/${mock_id}`);
    }
    /**
     * Hit a mock endpoint
     */
    async hit_mock_6(mock_id) {
        return this.client.put(`v1/mock/${mock_id}`);
    }
    /**
     * Hit a mock endpoint
     */
    async hit_mock_7(mock_id) {
        return this.client.get(`v1/mock/${mock_id}`);
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
exports.Webhook = Webhook;
