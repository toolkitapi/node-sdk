// Auto-generated — do not edit manually

type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean | undefined | null>;
};

export class HttpClient {
  private baseUrl: string;
  private apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  private async request(path: string, options: RequestOptions = {}): Promise<unknown> {
    const { method = "GET", headers = {}, body, params } = options;

    const url = new URL(`${this.baseUrl.replace(/\/$/, "")}/${path}`);
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, String(value));
        }
      }
    }

    const response = await fetch(url.toString(), {
      method,
      headers: {
        "X-API-Key": this.apiKey,
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(`HTTP ${response.status} ${url.toString()}: ${detail || response.statusText}`);
    }

    return response.json();
  }

  async get(path: string, params?: Record<string, unknown>): Promise<unknown> {
    return this.request(path, { params: params as Record<string, string | number | boolean | undefined | null> });
  }

  async post(path: string, body?: unknown, params?: Record<string, unknown>): Promise<unknown> {
    return this.request(path, { method: "POST", body, params: params as Record<string, string | number | boolean | undefined | null> });
  }

  async put(path: string, body?: unknown, params?: Record<string, unknown>): Promise<unknown> {
    return this.request(path, { method: "PUT", body, params: params as Record<string, string | number | boolean | undefined | null> });
  }

  async delete(path: string, params?: Record<string, unknown>): Promise<unknown> {
    return this.request(path, { method: "DELETE", params: params as Record<string, string | number | boolean | undefined | null> });
  }

  async patch(path: string, body?: unknown, params?: Record<string, unknown>): Promise<unknown> {
    return this.request(path, { method: "PATCH", body, params: params as Record<string, string | number | boolean | undefined | null> });
  }

  async head(path: string, params?: Record<string, unknown>): Promise<unknown> {
    return this.request(path, { method: "HEAD", params: params as Record<string, string | number | boolean | undefined | null> });
  }

  async options(path: string, params?: Record<string, unknown>): Promise<unknown> {
    return this.request(path, { method: "OPTIONS", params: params as Record<string, string | number | boolean | undefined | null> });
  }
}
