"use strict";
// Auto-generated — do not edit manually
// scrape toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scrape = void 0;
class Scrape {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Full page SEO audit
     */
    async seo_audit(params) {
        return this.client.get(`v1/scrape/audit`, params);
    }
    /**
     * Keyword density and readability analysis
     */
    async seo_keyword_density(params) {
        return this.client.get(`v1/scrape/keyword-density`, params);
    }
    /**
     * Mobile-friendliness check
     */
    async seo_mobile_friendly(params) {
        return this.client.get(`v1/scrape/mobile-friendly`, params);
    }
    /**
     * Broken link checker
     */
    async seo_broken_links(params) {
        return this.client.get(`v1/scrape/broken-links`, params);
    }
    /**
     * Page speed metrics
     */
    async seo_pagespeed(params) {
        return this.client.get(`v1/scrape/pagespeed`, params);
    }
    /**
     * Bulk SEO audit for multiple URLs
     */
    async seo_bulk_audit(body) {
        return this.client.post(`v1/scrape/bulk-audit`, body);
    }
    /**
     * Side-by-side SEO comparison
     */
    async seo_compare(body) {
        return this.client.post(`v1/scrape/compare`, body);
    }
    /**
     * Unified Scrape
     */
    async scrape(body) {
        return this.client.post(`v1/scrape`, body);
    }
    /**
     * Extract PDF Text
     */
    async pdf_extract(body) {
        return this.client.post(`v1/scrape/pdf`, body);
    }
    /**
     * Parse Sitemap
     */
    async parse_sitemap(params) {
        return this.client.get(`v1/scrape/sitemap`, params);
    }
    /**
     * Parse robots.txt
     */
    async parse_robots(params) {
        return this.client.get(`v1/scrape/robots`, params);
    }
    /**
     * Start Multi-Page Crawl
     */
    async start_crawl(body) {
        return this.client.post(`v1/scrape/crawl`, body);
    }
    /**
     * Get Crawl Job Status
     */
    async get_crawl_job(job_id) {
        return this.client.get(`v1/scrape/crawl/${job_id}`);
    }
    /**
     * Capture webpage screenshot
     */
    async screenshot_png(params, body) {
        return this.client.post(`v1/screenshot`, body, params);
    }
    /**
     * Capture webpage as PDF
     */
    async screenshot_pdf(params, body) {
        return this.client.post(`v1/screenshot/pdf`, body, params);
    }
    /**
     * Capture specific page element
     */
    async screenshot_element(params, body) {
        return this.client.post(`v1/screenshot/element`, body, params);
    }
    /**
     * Download a screenshot
     */
    async download_file(object_name) {
        return this.client.get(`v1/screenshot/download/${object_name}`);
    }
    /**
     * Fetch (GET shortcut)
     */
    async fetch(params) {
        return this.client.get(`v1/fetch`, params);
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
exports.Scrape = Scrape;
