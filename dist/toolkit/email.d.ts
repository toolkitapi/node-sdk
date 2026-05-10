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
export declare class Email {
    private client;
    constructor(client: HttpClient);
    /**
     * Full email validation
     */
    validate_email(params: EmailValidate_emailParams): Promise<unknown>;
    /**
     * Batch email validation
     */
    validate_batch(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Detect catch-all / accept-all server
     */
    catch_all(params: EmailCatch_allParams): Promise<unknown>;
    /**
     * Role vs personal account detection
     */
    role_check(params: EmailRole_checkParams): Promise<unknown>;
    /**
     * Normalize an email address
     */
    normalize(params: EmailNormalizeParams): Promise<unknown>;
    /**
     * Identify email provider
     */
    provider(params: EmailProviderParams): Promise<unknown>;
    /**
     * Parse raw email headers
     */
    parse_headers(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Score email content for spam signals
     */
    spam_score(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Get Gravatar for an email address
     */
    gravatar(params: EmailGravatarParams): Promise<unknown>;
    /**
     * Build or parse mailto: URIs
     */
    mailto(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Score a form submission for spam likelihood
     */
    form_spam_score(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Email security posture check
     */
    security(params: EmailSecurityParams): Promise<unknown>;
    /**
     * Validate email authentication (SPF, DKIM, DMARC)
     */
    auth(params: EmailAuthParams, body: Record<string, unknown>): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
