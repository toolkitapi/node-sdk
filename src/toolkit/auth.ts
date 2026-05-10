// Auto-generated — do not edit manually
// auth toolkit

import { HttpClient } from "../client";

export interface AuthTotp_generateParams extends Record<string, unknown> {
  issuer?: (string | unknown) | null;
  account_name?: (string | unknown) | null;
  digits?: number;
  period?: number;
  algorithm?: string | null;
  [key: string]: unknown;
}

export interface AuthGenerate_keyParams extends Record<string, unknown> {
  _type: string;
  length?: (number | unknown) | null;
  prefix?: (string | unknown) | null;
  [key: string]: unknown;
}

export type AuthHash_passwordBody = Record<string, unknown>;

export type AuthVerify_passwordBody = Record<string, unknown>;

export type AuthPassword_strengthBody = Record<string, unknown>;

export type AuthGenerate_passwordBody = Record<string, unknown>;

export type AuthJwt_generateBody = Record<string, unknown>;

export type AuthJwt_verifyBody = Record<string, unknown>;

export type AuthJwt_decodeBody = Record<string, unknown>;

export type AuthTotp_verifyBody = Record<string, unknown>;

export type AuthGenerate_keypairBody = Record<string, unknown>;

export type AuthEncryptBody = Record<string, unknown>;

export type AuthDecryptBody = Record<string, unknown>;

export type AuthHash_stringBody = Record<string, unknown>;

export type AuthHmac_generateBody = Record<string, unknown>;

export type AuthHmac_verifyBody = Record<string, unknown>;

export type AuthBase64_encodeBody = Record<string, unknown>;

export type AuthBase64_decodeBody = Record<string, unknown>;

export type AuthEncode_dataBody = Record<string, unknown>;

export class Auth {
  constructor(private client: HttpClient) {}

  /**
   * Hash a password
   */
  async hash_password(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/hash-password`, body);
  }

  /**
   * Verify a password against a hash
   */
  async verify_password(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/verify-password`, body);
  }

  /**
   * Analyze password strength
   */
  async password_strength(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/password-strength`, body);
  }

  /**
   * Generate secure random passwords
   */
  async generate_password(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/generate-password`, body);
  }

  /**
   * Generate a JWT token
   */
  async jwt_generate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/jwt-generate`, body);
  }

  /**
   * Verify a JWT token
   */
  async jwt_verify(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/jwt-verify`, body);
  }

  /**
   * Decode a JWT without verification
   */
  async jwt_decode(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/jwt-decode`, body);
  }

  /**
   * Generate a TOTP secret and QR code
   */
  async totp_generate(params: AuthTotp_generateParams): Promise<unknown> {
    return this.client.get(`v1/auth/totp-generate`, params);
  }

  /**
   * Verify a TOTP code
   */
  async totp_verify(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/totp-verify`, body);
  }

  /**
   * Generate a random key or identifier
   */
  async generate_key(params: AuthGenerate_keyParams): Promise<unknown> {
    return this.client.get(`v1/auth/generate-key`, params);
  }

  /**
   * Generate an asymmetric keypair
   */
  async generate_keypair(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/generate-keypair`, body);
  }

  /**
   * Encrypt plaintext with AES-256-GCM
   */
  async encrypt(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/encrypt`, body);
  }

  /**
   * Decrypt ciphertext with AES-256-GCM
   */
  async decrypt(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/decrypt`, body);
  }

  /**
   * Hash a string
   */
  async hash_string(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/hash`, body);
  }

  /**
   * Generate an HMAC
   */
  async hmac_generate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/hmac`, body);
  }

  /**
   * Verify an HMAC signature
   */
  async hmac_verify(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/hmac-verify`, body);
  }

  /**
   * Base64 encode a string
   */
  async base64_encode(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/base64-encode`, body);
  }

  /**
   * Base64 decode a string
   */
  async base64_decode(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/base64-decode`, body);
  }

  /**
   * Encode or decode a string
   */
  async encode_data(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/auth/encode`, body);
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
