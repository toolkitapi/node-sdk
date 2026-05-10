import { HttpClient } from "../client";
export interface GeoIp_lookupParams extends Record<string, unknown> {
    ip: string;
    [key: string]: unknown;
}
export interface GeoIp_threatParams extends Record<string, unknown> {
    ip: string;
    [key: string]: unknown;
}
export interface GeoCountry_infoParams extends Record<string, unknown> {
    code: string;
    [key: string]: unknown;
}
export interface GeoCurrency_infoParams extends Record<string, unknown> {
    code: string;
    [key: string]: unknown;
}
export interface GeoTimezone_convertParams extends Record<string, unknown> {
    timestamp: string;
    _from: string;
    to: string;
    [key: string]: unknown;
}
export interface GeoTimezone_by_coordsParams extends Record<string, unknown> {
    lat: number;
    lon: number;
    [key: string]: unknown;
}
export interface GeoTimezone_infoParams extends Record<string, unknown> {
    timezone: string;
    [key: string]: unknown;
}
export interface GeoPhone_validateParams extends Record<string, unknown> {
    number: string;
    country?: string | null;
    [key: string]: unknown;
}
export type GeoDistanceBody = Record<string, unknown>;
export type GeoBounding_boxBody = Record<string, unknown>;
export type GeoCenterBody = Record<string, unknown>;
export type GeoPhone_validate_batchBody = Record<string, unknown>;
export declare class Geo {
    private client;
    constructor(client: HttpClient);
    /**
     * IP geolocation lookup
     */
    ip_lookup(params: GeoIp_lookupParams): Promise<unknown>;
    /**
     * IP threat / anonymity detection
     */
    ip_threat(params: GeoIp_threatParams): Promise<unknown>;
    /**
     * Calculate distance between coordinates
     */
    distance(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Calculate a geographic bounding box
     */
    bounding_box(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Find the geographic center of coordinates
     */
    center(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Get country information by ISO code
     */
    country_info(params: GeoCountry_infoParams): Promise<unknown>;
    /**
     * Get currency information by code
     */
    currency_info(params: GeoCurrency_infoParams): Promise<unknown>;
    /**
     * Convert a timestamp between timezones
     */
    timezone_convert(params: GeoTimezone_convertParams): Promise<unknown>;
    /**
     * Get timezone for coordinates
     */
    timezone_by_coords(params: GeoTimezone_by_coordsParams): Promise<unknown>;
    /**
     * Get timezone details
     */
    timezone_info(params: GeoTimezone_infoParams): Promise<unknown>;
    /**
     * Validate and parse a phone number (E.164)
     */
    phone_validate(params: GeoPhone_validateParams): Promise<unknown>;
    /**
     * Batch phone number validation
     */
    phone_validate_batch(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
