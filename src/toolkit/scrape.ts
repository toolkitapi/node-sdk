// Auto-generated — do not edit manually
// scrape toolkit

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

export class Scrape {
  constructor(private client: HttpClient) {}

  /**
   * Full page SEO audit
   */
  async seo_audit(params: ScrapeSeo_auditParams): Promise<unknown> {
    return this.client.get(`v1/scrape/audit`, params);
  }

  /**
   * Keyword density and readability analysis
   */
  async seo_keyword_density(params: ScrapeSeo_keyword_densityParams): Promise<unknown> {
    return this.client.get(`v1/scrape/keyword-density`, params);
  }

  /**
   * Mobile-friendliness check
   */
  async seo_mobile_friendly(params: ScrapeSeo_mobile_friendlyParams): Promise<unknown> {
    return this.client.get(`v1/scrape/mobile-friendly`, params);
  }

  /**
   * Broken link checker
   */
  async seo_broken_links(params: ScrapeSeo_broken_linksParams): Promise<unknown> {
    return this.client.get(`v1/scrape/broken-links`, params);
  }

  /**
   * Page speed metrics
   */
  async seo_pagespeed(params: ScrapeSeo_pagespeedParams): Promise<unknown> {
    return this.client.get(`v1/scrape/pagespeed`, params);
  }

  /**
   * Bulk SEO audit for multiple URLs
   */
  async seo_bulk_audit(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/scrape/bulk-audit`, body);
  }

  /**
   * Side-by-side SEO comparison
   */
  async seo_compare(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/scrape/compare`, body);
  }

  /**
   * Unified Scrape
   */
  async scrape(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/scrape`, body);
  }

  /**
   * Extract PDF Text
   */
  async pdf_extract(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/scrape/pdf`, body);
  }

  /**
   * Parse Sitemap
   */
  async parse_sitemap(params: ScrapeParse_sitemapParams): Promise<unknown> {
    return this.client.get(`v1/scrape/sitemap`, params);
  }

  /**
   * Parse robots.txt
   */
  async parse_robots(params: ScrapeParse_robotsParams): Promise<unknown> {
    return this.client.get(`v1/scrape/robots`, params);
  }

  /**
   * Start Multi-Page Crawl
   */
  async start_crawl(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/scrape/crawl`, body);
  }

  /**
   * Get Crawl Job Status
   */
  async get_crawl_job(job_id: string): Promise<unknown> {
    return this.client.get(`v1/scrape/crawl/${job_id}`);
  }

  /**
   * Capture webpage screenshot
   */
  async screenshot_png(params: ScrapeScreenshot_pngParams, body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/screenshot`, body, params);
  }

  /**
   * Capture webpage as PDF
   */
  async screenshot_pdf(params: ScrapeScreenshot_pdfParams, body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/screenshot/pdf`, body, params);
  }

  /**
   * Capture specific page element
   */
  async screenshot_element(params: ScrapeScreenshot_elementParams, body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/screenshot/element`, body, params);
  }

  /**
   * Download a screenshot
   */
  async download_file(object_name: string): Promise<unknown> {
    return this.client.get(`v1/screenshot/download/${object_name}`);
  }

  /**
   * Fetch (GET shortcut)
   */
  async fetch(params: ScrapeFetchParams): Promise<unknown> {
    return this.client.get(`v1/fetch`, params);
  }

  /**
   * Root
   */
  async root__get(): Promise<unknown> {
    return this.client.get(``);
  }

  /**
   * Status
   */
  async status(): Promise<unknown> {
    return this.client.get(`v1/status`);
  }

}
