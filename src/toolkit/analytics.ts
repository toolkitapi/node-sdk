// Auto-generated — do not edit manually
// analytics toolkit

import { HttpClient } from "../client";

export type AnalyticsAnalyzeBody = Record<string, unknown>;

export type AnalyticsSaveBody = Record<string, unknown>;

export type AnalyticsRun_saved_queryBody = Record<string, unknown>;

export type AnalyticsVisualizeBody = Record<string, unknown>;

export type AnalyticsValidate_chartBody = Record<string, unknown>;

export type AnalyticsCreate_bundleBody = Record<string, unknown>;

export class Analytics {
  constructor(private client: HttpClient) {}

  /**
   * Analyze a remote dataset with natural language
   */
  async analyze(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/analyze`, body);
  }

  /**
   * Save analysis logic for replay
   */
  async save(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/save`, body);
  }

  /**
   * Re-execute saved analysis logic
   */
  async run_saved_query(query_id: string, body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/query/${query_id}`, body);
  }

  /**
   * Generate a chart from a dataset
   */
  async visualize(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/visualize`, body);
  }

  /**
   * Download a generated chart image
   */
  async download_generated_image(image_id: string): Promise<unknown> {
    return this.client.get(`v1/image/download/${image_id}`);
  }

  /**
   * Validate a chart spec without executing
   */
  async validate_chart(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/validate-chart`, body);
  }

  /**
   * Retrieve dataset schema
   */
  async get_schema(dataset_id: string): Promise<unknown> {
    return this.client.get(`v1/datasets/${dataset_id}/schema`);
  }

  /**
   * Register a multi-source bundle for joins
   */
  async create_bundle(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/datasets/bundle`, body);
  }

  /**
   * Service health check
   */
  async status(): Promise<unknown> {
    return this.client.get(`v1/status`);
  }

}
