"use strict";
// Auto-generated — do not edit manually
// analytics toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
class Analytics {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Analyze a remote dataset with natural language
     */
    async analyze(body) {
        return this.client.post(`v1/analyze`, body);
    }
    /**
     * Save analysis logic for replay
     */
    async save(body) {
        return this.client.post(`v1/save`, body);
    }
    /**
     * Re-execute saved analysis logic
     */
    async run_saved_query(query_id, body) {
        return this.client.post(`v1/query/${query_id}`, body);
    }
    /**
     * Generate a chart from a dataset
     */
    async visualize(body) {
        return this.client.post(`v1/visualize`, body);
    }
    /**
     * Download a generated chart image
     */
    async download_generated_image(image_id) {
        return this.client.get(`v1/image/download/${image_id}`);
    }
    /**
     * Validate a chart spec without executing
     */
    async validate_chart(body) {
        return this.client.post(`v1/validate-chart`, body);
    }
    /**
     * Retrieve dataset schema
     */
    async get_schema(dataset_id) {
        return this.client.get(`v1/datasets/${dataset_id}/schema`);
    }
    /**
     * Register a multi-source bundle for joins
     */
    async create_bundle(body) {
        return this.client.post(`v1/datasets/bundle`, body);
    }
    /**
     * Service health check
     */
    async status() {
        return this.client.get(`v1/status`);
    }
}
exports.Analytics = Analytics;
