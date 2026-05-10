import { HttpClient } from "../client";
export interface WebhookList_requestsParams extends Record<string, unknown> {
    limit?: number;
    offset?: number;
    [key: string]: unknown;
}
export type WebhookCreate_binBody = Record<string, unknown>;
export type WebhookReplay_requestBody = Record<string, unknown>;
export type WebhookCreate_mockBody = Record<string, unknown>;
export declare class Webhook {
    private client;
    constructor(client: HttpClient);
    /**
     * Create a request bin
     */
    create_bin(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Get bin details
     */
    get_bin(bin_id: string): Promise<unknown>;
    /**
     * Delete a bin
     */
    delete_bin(bin_id: string): Promise<unknown>;
    /**
     * List captured requests
     */
    list_requests(bin_id: string, params: WebhookList_requestsParams): Promise<unknown>;
    /**
     * Get captured request detail
     */
    get_request_detail(bin_id: string, request_id: string): Promise<unknown>;
    /**
     * Replay a captured request
     */
    replay_request(bin_id: string, request_id: string, body: Record<string, unknown>): Promise<unknown>;
    /**
     * Catch and record an HTTP request
     */
    catch_request_1(bin_id: string): Promise<unknown>;
    /**
     * Catch and record an HTTP request
     */
    catch_request_2(bin_id: string): Promise<unknown>;
    /**
     * Catch and record an HTTP request
     */
    catch_request_3(bin_id: string): Promise<unknown>;
    /**
     * Catch and record an HTTP request
     */
    catch_request_4(bin_id: string): Promise<unknown>;
    /**
     * Catch and record an HTTP request
     */
    catch_request_5(bin_id: string): Promise<unknown>;
    /**
     * Catch and record an HTTP request
     */
    catch_request_6(bin_id: string): Promise<unknown>;
    /**
     * Catch and record an HTTP request
     */
    catch_request_7(bin_id: string): Promise<unknown>;
    /**
     * Create a mock endpoint
     */
    create_mock(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Get mock endpoint details
     */
    get_mock(mock_id: string): Promise<unknown>;
    /**
     * Delete a mock endpoint
     */
    delete_mock(mock_id: string): Promise<unknown>;
    /**
     * Hit a mock endpoint
     */
    hit_mock_1(mock_id: string): Promise<unknown>;
    /**
     * Hit a mock endpoint
     */
    hit_mock_2(mock_id: string): Promise<unknown>;
    /**
     * Hit a mock endpoint
     */
    hit_mock_3(mock_id: string): Promise<unknown>;
    /**
     * Hit a mock endpoint
     */
    hit_mock_4(mock_id: string): Promise<unknown>;
    /**
     * Hit a mock endpoint
     */
    hit_mock_5(mock_id: string): Promise<unknown>;
    /**
     * Hit a mock endpoint
     */
    hit_mock_6(mock_id: string): Promise<unknown>;
    /**
     * Hit a mock endpoint
     */
    hit_mock_7(mock_id: string): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
