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
export declare class Auth {
    private client;
    constructor(client: HttpClient);
    /**
     * Hash a password
     */
    hash_password(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Verify a password against a hash
     */
    verify_password(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Analyze password strength
     */
    password_strength(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate secure random passwords
     */
    generate_password(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate a JWT token
     */
    jwt_generate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Verify a JWT token
     */
    jwt_verify(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Decode a JWT without verification
     */
    jwt_decode(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate a TOTP secret and QR code
     */
    totp_generate(params: AuthTotp_generateParams): Promise<unknown>;
    /**
     * Verify a TOTP code
     */
    totp_verify(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate a random key or identifier
     */
    generate_key(params: AuthGenerate_keyParams): Promise<unknown>;
    /**
     * Generate an asymmetric keypair
     */
    generate_keypair(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Encrypt plaintext with AES-256-GCM
     */
    encrypt(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Decrypt ciphertext with AES-256-GCM
     */
    decrypt(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Hash a string
     */
    hash_string(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate an HMAC
     */
    hmac_generate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Verify an HMAC signature
     */
    hmac_verify(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Base64 encode a string
     */
    base64_encode(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Base64 decode a string
     */
    base64_decode(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Encode or decode a string
     */
    encode_data(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
