"use strict";
// Auto-generated — do not edit manually
// geo toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geo = void 0;
class Geo {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * IP geolocation lookup
     */
    async ip_lookup(params) {
        return this.client.get(`v1/geo/ip-lookup`, params);
    }
    /**
     * IP threat / anonymity detection
     */
    async ip_threat(params) {
        return this.client.get(`v1/geo/ip-threat`, params);
    }
    /**
     * Calculate distance between coordinates
     */
    async distance(body) {
        return this.client.post(`v1/geo/distance`, body);
    }
    /**
     * Calculate a geographic bounding box
     */
    async bounding_box(body) {
        return this.client.post(`v1/geo/bounding-box`, body);
    }
    /**
     * Find the geographic center of coordinates
     */
    async center(body) {
        return this.client.post(`v1/geo/center`, body);
    }
    /**
     * Get country information by ISO code
     */
    async country_info(params) {
        return this.client.get(`v1/geo/country-info`, params);
    }
    /**
     * Get currency information by code
     */
    async currency_info(params) {
        return this.client.get(`v1/geo/currency-info`, params);
    }
    /**
     * Convert a timestamp between timezones
     */
    async timezone_convert(params) {
        return this.client.get(`v1/geo/timezone-convert`, params);
    }
    /**
     * Get timezone for coordinates
     */
    async timezone_by_coords(params) {
        return this.client.get(`v1/geo/timezone-by-coords`, params);
    }
    /**
     * Get timezone details
     */
    async timezone_info(params) {
        return this.client.get(`v1/geo/timezone-info`, params);
    }
    /**
     * Validate and parse a phone number (E.164)
     */
    async phone_validate(params) {
        return this.client.get(`v1/geo/phone-validate`, params);
    }
    /**
     * Batch phone number validation
     */
    async phone_validate_batch(body) {
        return this.client.post(`v1/geo/phone-validate-batch`, body);
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
exports.Geo = Geo;
