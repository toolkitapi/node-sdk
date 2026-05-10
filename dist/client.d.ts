export declare class HttpClient {
    private baseUrl;
    private apiKey;
    constructor(baseUrl: string, apiKey: string);
    private request;
    get(path: string, params?: Record<string, unknown>): Promise<unknown>;
    post(path: string, body?: unknown, params?: Record<string, unknown>): Promise<unknown>;
    put(path: string, body?: unknown, params?: Record<string, unknown>): Promise<unknown>;
    delete(path: string, params?: Record<string, unknown>): Promise<unknown>;
    patch(path: string, body?: unknown, params?: Record<string, unknown>): Promise<unknown>;
    head(path: string, params?: Record<string, unknown>): Promise<unknown>;
    options(path: string, params?: Record<string, unknown>): Promise<unknown>;
}
