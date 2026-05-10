import { HttpClient } from "../client";
export interface ScrapeSeo_auditParams extends Record<string, unknown> {
    url: string;
    [key: string]: unknown;
}
export interface ScrapeSeo_keyword_densityParams extends Record<string, unknown> {
    url: string;
    [key: string]: unknown;
}
export interface ScrapeSeo_mobile_friendlyParams extends Record<string, unknown> {
    url: string;
    [key: string]: unknown;
}
export interface ScrapeSeo_broken_linksParams extends Record<string, unknown> {
    url: string;
    [key: string]: unknown;
}
export interface ScrapeSeo_pagespeedParams extends Record<string, unknown> {
    url: string;
    [key: string]: unknown;
}
export interface ScrapeParse_sitemapParams extends Record<string, unknown> {
    url: string;
    limit?: number;
    discover_links?: boolean;
    [key: string]: unknown;
}
export interface ScrapeParse_robotsParams extends Record<string, unknown> {
    url: string;
    [key: string]: unknown;
}
export interface ScrapeScreenshot_pngParams extends Record<string, unknown> {
    async?: boolean;
    [key: string]: unknown;
}
export interface ScrapeScreenshot_pdfParams extends Record<string, unknown> {
    async?: boolean;
    [key: string]: unknown;
}
export interface ScrapeScreenshot_elementParams extends Record<string, unknown> {
    async?: boolean;
    [key: string]: unknown;
}
export interface ScrapeFetchParams extends Record<string, unknown> {
    url: string;
    output?: string | null;
    render_js?: boolean;
    proxy?: (string | unknown) | null;
    [key: string]: unknown;
}
export type ScrapeSeo_bulk_auditBody = Record<string, unknown>;
export type ScrapeSeo_compareBody = Record<string, unknown>;
export type ScrapeScrapeBody = Record<string, unknown>;
export type ScrapePdf_extractBody = Record<string, unknown>;
export type ScrapeStart_crawlBody = Record<string, unknown>;
export type ScrapeScreenshot_pngBody = Record<string, unknown>;
export type ScrapeScreenshot_pdfBody = Record<string, unknown>;
export type ScrapeScreenshot_elementBody = Record<string, unknown>;
export declare class Scrape {
    private client;
    constructor(client: HttpClient);
    /**
     * Full page SEO audit
     */
    seo_audit(params: ScrapeSeo_auditParams): Promise<unknown>;
    /**
     * Keyword density and readability analysis
     */
    seo_keyword_density(params: ScrapeSeo_keyword_densityParams): Promise<unknown>;
    /**
     * Mobile-friendliness check
     */
    seo_mobile_friendly(params: ScrapeSeo_mobile_friendlyParams): Promise<unknown>;
    /**
     * Broken link checker
     */
    seo_broken_links(params: ScrapeSeo_broken_linksParams): Promise<unknown>;
    /**
     * Page speed metrics
     */
    seo_pagespeed(params: ScrapeSeo_pagespeedParams): Promise<unknown>;
    /**
     * Bulk SEO audit for multiple URLs
     */
    seo_bulk_audit(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Side-by-side SEO comparison
     */
    seo_compare(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Unified Scrape
     */
    scrape(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Extract PDF Text
     */
    pdf_extract(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Parse Sitemap
     */
    parse_sitemap(params: ScrapeParse_sitemapParams): Promise<unknown>;
    /**
     * Parse robots.txt
     */
    parse_robots(params: ScrapeParse_robotsParams): Promise<unknown>;
    /**
     * Start Multi-Page Crawl
     */
    start_crawl(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Get Crawl Job Status
     */
    get_crawl_job(job_id: string): Promise<unknown>;
    /**
     * Capture webpage screenshot
     */
    screenshot_png(params: ScrapeScreenshot_pngParams, body: Record<string, unknown>): Promise<unknown>;
    /**
     * Capture webpage as PDF
     */
    screenshot_pdf(params: ScrapeScreenshot_pdfParams, body: Record<string, unknown>): Promise<unknown>;
    /**
     * Capture specific page element
     */
    screenshot_element(params: ScrapeScreenshot_elementParams, body: Record<string, unknown>): Promise<unknown>;
    /**
     * Download a screenshot
     */
    download_file(object_name: string): Promise<unknown>;
    /**
     * Fetch (GET shortcut)
     */
    fetch(params: ScrapeFetchParams): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
