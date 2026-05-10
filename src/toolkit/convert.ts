// Auto-generated — do not edit manually
// convert toolkit

import { HttpClient } from "../client";

export interface ConvertData_fileParams extends Record<string, unknown> {
  url: string;
  from_format: string;
  to_format: string;
  delimiter?: (string | unknown) | null;
  include_header?: boolean;
  has_header?: boolean;
  skip_rows?: number;
  root_element?: string | null;
  pretty?: boolean;
  strip_namespaces?: boolean;
  flow_style?: boolean;
  filename?: string | null;
  [key: string]: unknown;
}

export interface ConvertMarkup_fileParams extends Record<string, unknown> {
  url: string;
  from_format: string;
  to_format: string;
  gfm?: boolean;
  sanitize?: boolean;
  preserve_links?: boolean;
  preserve_tables?: boolean;
  filename?: string | null;
  [key: string]: unknown;
}

export interface ConvertDocument_fileParams extends Record<string, unknown> {
  url: string;
  from_format: string;
  to_format: string;
  pages?: (string | unknown) | null;
  dpi?: number;
  page_size?: string | null;
  title?: (string | unknown) | null;
  author?: (string | unknown) | null;
  filename?: (string | unknown) | null;
  [key: string]: unknown;
}

export interface ConvertSpreadsheet_fileParams extends Record<string, unknown> {
  url: string;
  from_format: string;
  to_format: string;
  delimiter?: (string | unknown) | null;
  sheet_name?: string | null;
  filename?: (string | unknown) | null;
  [key: string]: unknown;
}

export interface ConvertPresentation_fileParams extends Record<string, unknown> {
  url: string;
  from_format: string;
  to_format?: string | null;
  filename?: (string | unknown) | null;
  [key: string]: unknown;
}

export interface ConvertEbook_fileParams extends Record<string, unknown> {
  url: string;
  from_format: string;
  to_format?: string | null;
  filename?: (string | unknown) | null;
  [key: string]: unknown;
}

export interface ConvertMedia_getParams extends Record<string, unknown> {
  url: string;
  source_format: string;
  target_format: string;
  [key: string]: unknown;
}

export type ConvertDataBody = Record<string, unknown>;

export type ConvertMarkupBody = Record<string, unknown>;

export type ConvertJson_to_typescriptBody = Record<string, unknown>;

export type ConvertDocumentBody = Record<string, unknown>;

export type ConvertSpreadsheetBody = Record<string, unknown>;

export type ConvertCalendarBody = Record<string, unknown>;

export type ConvertPresentationBody = Record<string, unknown>;

export type ConvertEbookBody = Record<string, unknown>;

export type ConvertMediaBody = Record<string, unknown>;

export type ConvertVideo_thumbnailBody = Record<string, unknown>;

export type ConvertMedia_infoBody = Record<string, unknown>;

export class Convert {
  constructor(private client: HttpClient) {}

  /**
   * Convert between data formats
   */
  async data(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/data`, body);
  }

  /**
   * Convert data format via URL (file download)
   */
  async data_file(params: ConvertData_fileParams): Promise<unknown> {
    return this.client.get(`v1/convert/data`, params);
  }

  /**
   * Convert between markup formats
   */
  async markup(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/markup`, body);
  }

  /**
   * Convert markup format via URL (file download)
   */
  async markup_file(params: ConvertMarkup_fileParams): Promise<unknown> {
    return this.client.get(`v1/convert/markup`, params);
  }

  /**
   * Generate TypeScript interfaces from JSON
   */
  async json_to_typescript(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/json-to-typescript`, body);
  }

  /**
   * Convert between document formats
   */
  async document(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/document`, body);
  }

  /**
   * Convert document via URL (file download)
   */
  async document_file(params: ConvertDocument_fileParams): Promise<unknown> {
    return this.client.get(`v1/convert/document`, params);
  }

  /**
   * Convert between spreadsheet formats
   */
  async spreadsheet(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/spreadsheet`, body);
  }

  /**
   * Convert spreadsheet via URL (file download)
   */
  async spreadsheet_file(params: ConvertSpreadsheet_fileParams): Promise<unknown> {
    return this.client.get(`v1/convert/spreadsheet`, params);
  }

  /**
   * Convert between calendar and contact formats
   */
  async calendar(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/calendar`, body);
  }

  /**
   * Convert presentation to PDF
   */
  async presentation(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/presentation`, body);
  }

  /**
   * Convert presentation via URL (file download)
   */
  async presentation_file(params: ConvertPresentation_fileParams): Promise<unknown> {
    return this.client.get(`v1/convert/presentation`, params);
  }

  /**
   * Convert ebook formats
   */
  async ebook(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/ebook`, body);
  }

  /**
   * Convert ebook via URL (file download)
   */
  async ebook_file(params: ConvertEbook_fileParams): Promise<unknown> {
    return this.client.get(`v1/convert/ebook`, params);
  }

  /**
   * List all supported conversion formats
   */
  async list_all_formats(): Promise<unknown> {
    return this.client.get(`v1/convert/formats`);
  }

  /**
   * List conversion formats for a category
   */
  async list_category_formats(category: string): Promise<unknown> {
    return this.client.get(`v1/convert/formats/${category}`);
  }

  /**
   * Poll async conversion job status
   */
  async poll_job_convert_jobs__job_id__get(job_id: string): Promise<unknown> {
    return this.client.get(`convert/jobs/${job_id}`);
  }

  /**
   * List supported media conversion formats
   */
  async supported_formats(): Promise<unknown> {
    return this.client.get(`v1/convert/supported-media-formats`);
  }

  /**
   * Convert a media file (video or audio)
   */
  async media(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/media`, body);
  }

  /**
   * Convert media via URL query params (streaming download)
   */
  async media_get(params: ConvertMedia_getParams): Promise<unknown> {
    return this.client.get(`v1/convert/media`, params);
  }

  /**
   * Extract a thumbnail frame from a video
   */
  async video_thumbnail(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/video-thumbnail`, body);
  }

  /**
   * Probe media file for metadata
   */
  async media_info(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/convert/media-info`, body);
  }

  /**
   * Download a converted file
   */
  async download_file(object_name: string): Promise<unknown> {
    return this.client.get(`v1/convert/download/${object_name}`);
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
