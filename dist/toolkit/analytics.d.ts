import { HttpClient } from "../client";
export type AnalyticsAnalyzeBody = Record<string, unknown>;
export type AnalyticsSaveBody = Record<string, unknown>;
export type AnalyticsRun_saved_queryBody = Record<string, unknown>;
export type AnalyticsVisualizeBody = Record<string, unknown>;
export type AnalyticsValidate_chartBody = Record<string, unknown>;
export type AnalyticsCreate_bundleBody = Record<string, unknown>;
export declare class Analytics {
    private client;
    constructor(client: HttpClient);
    /**
     * Analyze a remote dataset with natural language
     */
    analyze(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Save analysis logic for replay
     */
    save(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Re-execute saved analysis logic
     */
    run_saved_query(query_id: string, body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate a chart from a dataset
     */
    visualize(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Download a generated chart image
     */
    download_generated_image(image_id: string): Promise<unknown>;
    /**
     * Validate a chart spec without executing
     */
    validate_chart(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Retrieve dataset schema
     */
    get_schema(dataset_id: string): Promise<unknown>;
    /**
     * Register a multi-source bundle for joins
     */
    create_bundle(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Service health check
     */
    status(): Promise<unknown>;
}
