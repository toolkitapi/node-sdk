// Auto-generated — do not edit manually
// geo toolkit

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

export class Geo {
  constructor(private client: HttpClient) {}

  /**
   * IP geolocation lookup
   */
  async ip_lookup(params: GeoIp_lookupParams): Promise<unknown> {
    return this.client.get(`v1/geo/ip-lookup`, params);
  }

  /**
   * IP threat / anonymity detection
   */
  async ip_threat(params: GeoIp_threatParams): Promise<unknown> {
    return this.client.get(`v1/geo/ip-threat`, params);
  }

  /**
   * Calculate distance between coordinates
   */
  async distance(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/geo/distance`, body);
  }

  /**
   * Calculate a geographic bounding box
   */
  async bounding_box(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/geo/bounding-box`, body);
  }

  /**
   * Find the geographic center of coordinates
   */
  async center(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/geo/center`, body);
  }

  /**
   * Get country information by ISO code
   */
  async country_info(params: GeoCountry_infoParams): Promise<unknown> {
    return this.client.get(`v1/geo/country-info`, params);
  }

  /**
   * Get currency information by code
   */
  async currency_info(params: GeoCurrency_infoParams): Promise<unknown> {
    return this.client.get(`v1/geo/currency-info`, params);
  }

  /**
   * Convert a timestamp between timezones
   */
  async timezone_convert(params: GeoTimezone_convertParams): Promise<unknown> {
    return this.client.get(`v1/geo/timezone-convert`, params);
  }

  /**
   * Get timezone for coordinates
   */
  async timezone_by_coords(params: GeoTimezone_by_coordsParams): Promise<unknown> {
    return this.client.get(`v1/geo/timezone-by-coords`, params);
  }

  /**
   * Get timezone details
   */
  async timezone_info(params: GeoTimezone_infoParams): Promise<unknown> {
    return this.client.get(`v1/geo/timezone-info`, params);
  }

  /**
   * Validate and parse a phone number (E.164)
   */
  async phone_validate(params: GeoPhone_validateParams): Promise<unknown> {
    return this.client.get(`v1/geo/phone-validate`, params);
  }

  /**
   * Batch phone number validation
   */
  async phone_validate_batch(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/geo/phone-validate-batch`, body);
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
