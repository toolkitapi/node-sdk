// Auto-generated — do not edit manually
// email toolkit

import { HttpClient } from "../client";

export interface EmailValidate_emailParams extends Record<string, unknown> {
  email: string;
  [key: string]: unknown;
}

export interface EmailCatch_allParams extends Record<string, unknown> {
  domain: string;
  [key: string]: unknown;
}

export interface EmailRole_checkParams extends Record<string, unknown> {
  email: string;
  [key: string]: unknown;
}

export interface EmailNormalizeParams extends Record<string, unknown> {
  email: string;
  [key: string]: unknown;
}

export interface EmailProviderParams extends Record<string, unknown> {
  domain: string;
  [key: string]: unknown;
}

export interface EmailGravatarParams extends Record<string, unknown> {
  email: string;
  size?: number;
  [key: string]: unknown;
}

export interface EmailSecurityParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface EmailAuthParams extends Record<string, unknown> {
  sending_ip?: string | null;
  format?: string | null;
  [key: string]: unknown;
}

export type EmailValidate_batchBody = Record<string, unknown>;

export type EmailParse_headersBody = Record<string, unknown>;

export type EmailSpam_scoreBody = Record<string, unknown>;

export type EmailMailtoBody = Record<string, unknown>;

export type EmailForm_spam_scoreBody = Record<string, unknown>;

export type EmailAuthBody = Record<string, unknown>;

export class Email {
  constructor(private client: HttpClient) {}

  /**
   * Full email validation
   */
  async validate_email(params: EmailValidate_emailParams): Promise<unknown> {
    return this.client.get(`v1/email/validate`, params);
  }

  /**
   * Batch email validation
   */
  async validate_batch(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/email/validate-batch`, body);
  }

  /**
   * Detect catch-all / accept-all server
   */
  async catch_all(params: EmailCatch_allParams): Promise<unknown> {
    return this.client.get(`v1/email/catch-all`, params);
  }

  /**
   * Role vs personal account detection
   */
  async role_check(params: EmailRole_checkParams): Promise<unknown> {
    return this.client.get(`v1/email/role-check`, params);
  }

  /**
   * Normalize an email address
   */
  async normalize(params: EmailNormalizeParams): Promise<unknown> {
    return this.client.get(`v1/email/normalize`, params);
  }

  /**
   * Identify email provider
   */
  async provider(params: EmailProviderParams): Promise<unknown> {
    return this.client.get(`v1/email/provider`, params);
  }

  /**
   * Parse raw email headers
   */
  async parse_headers(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/email/headers`, body);
  }

  /**
   * Score email content for spam signals
   */
  async spam_score(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/email/spam-score`, body);
  }

  /**
   * Get Gravatar for an email address
   */
  async gravatar(params: EmailGravatarParams): Promise<unknown> {
    return this.client.get(`v1/email/gravatar`, params);
  }

  /**
   * Build or parse mailto: URIs
   */
  async mailto(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/email/mailto`, body);
  }

  /**
   * Score a form submission for spam likelihood
   */
  async form_spam_score(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/email/form-spam-score`, body);
  }

  /**
   * Email security posture check
   */
  async security(params: EmailSecurityParams): Promise<unknown> {
    return this.client.get(`v1/email/security`, params);
  }

  /**
   * Validate email authentication (SPF, DKIM, DMARC)
   */
  async auth(params: EmailAuthParams, body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/email/auth`, body, params);
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
