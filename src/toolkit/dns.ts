// Auto-generated — do not edit manually
// dns toolkit

import { HttpClient } from "../client";

export interface DnsPropagationParams extends Record<string, unknown> {
  domain: string;
  _type?: string | null;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsLookupParams extends Record<string, unknown> {
  domain: string;
  _type?: string | null;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsLookup_allParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsLookup_bulkParams extends Record<string, unknown> {
  _type?: string | null;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsCompare_resolversParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  _type?: string | null;
  [key: string]: unknown;
}

export interface DnsDoh_testParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsIdnParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsWhoisParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsDomain_ageParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsAvailableParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsSubdomainsParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsAssociatedParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsDisposableParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsTld_searchParams extends Record<string, unknown> {
  keyword: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsAvailable_bulkParams extends Record<string, unknown> {
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsWhois_bulkParams extends Record<string, unknown> {
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsHealthParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsCertificateParams extends Record<string, unknown> {
  domain: string;
  port?: number;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsDnssecParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsSecurity_headersParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsZone_transferParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsTyposquatParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsBlacklistParams extends Record<string, unknown> {
  ip: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsTech_stackParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsPort_scanParams extends Record<string, unknown> {
  host: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsRedirectsParams extends Record<string, unknown> {
  url: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsCompany_profileParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsUrl_parseParams extends Record<string, unknown> {
  url: string;
  [key: string]: unknown;
}

export interface DnsReverseParams extends Record<string, unknown> {
  ip: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsAsnParams extends Record<string, unknown> {
  ip: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsIp_calcParams extends Record<string, unknown> {
  cidr: string;
  [key: string]: unknown;
}

export interface DnsGenerateParams extends Record<string, unknown> {
  domain: string;
  _type: string;
  spf_includes?: string | null;
  spf_ip4?: string | null;
  spf_ip6?: string | null;
  spf_policy?: string | null;
  dmarc_policy?: string | null;
  dmarc_rua?: string | null;
  dmarc_ruf?: string | null;
  dmarc_pct?: number;
  dmarc_sp?: string | null;
  mta_sts_id?: string | null;
  bimi_logo?: string | null;
  bimi_vmc?: string | null;
  tls_rpt_email?: string | null;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsNs_performanceParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsCaaParams extends Record<string, unknown> {
  domain: string;
  format?: string | null;
  [key: string]: unknown;
}

export interface DnsTlsaParams extends Record<string, unknown> {
  domain: string;
  port?: number;
  format?: string | null;
  [key: string]: unknown;
}

export type DnsLookup_bulkBody = Record<string, unknown>;

export type DnsAvailable_bulkBody = Record<string, unknown>;

export type DnsWhois_bulkBody = Record<string, unknown>;

export type DnsHttp_header_parseBody = Record<string, unknown>;

export class Dns {
  constructor(private client: HttpClient) {}

  /**
   * Check DNS propagation across global resolvers
   */
  async propagation(params: DnsPropagationParams): Promise<unknown> {
    return this.client.get(`v1/propagation`, params);
  }

  /**
   * Look up DNS records for a domain
   */
  async lookup(params: DnsLookupParams): Promise<unknown> {
    return this.client.get(`v1/lookup`, params);
  }

  /**
   * Look up all DNS record types for a domain
   */
  async lookup_all(params: DnsLookup_allParams): Promise<unknown> {
    return this.client.get(`v1/lookup/all`, params);
  }

  /**
   * Bulk DNS lookup for multiple domains
   */
  async lookup_bulk(params: DnsLookup_bulkParams, body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/lookup/bulk`, body, params);
  }

  /**
   * Compare DNS responses across major public resolvers
   */
  async compare_resolvers(params: DnsCompare_resolversParams): Promise<unknown> {
    return this.client.get(`v1/compare-resolvers`, params);
  }

  /**
   * Test DNS-over-HTTPS and DNS-over-TLS providers
   */
  async doh_test(params: DnsDoh_testParams): Promise<unknown> {
    return this.client.get(`v1/doh-test`, params);
  }

  /**
   * Convert between IDN (Unicode) and Punycode
   */
  async idn(params: DnsIdnParams): Promise<unknown> {
    return this.client.get(`v1/idn`, params);
  }

  /**
   * WHOIS / RDAP lookup for a domain
   */
  async whois(params: DnsWhoisParams): Promise<unknown> {
    return this.client.get(`v1/whois`, params);
  }

  /**
   * Check domain registration age
   */
  async domain_age(params: DnsDomain_ageParams): Promise<unknown> {
    return this.client.get(`v1/domain-age`, params);
  }

  /**
   * Check if a domain is available for registration
   */
  async available(params: DnsAvailableParams): Promise<unknown> {
    return this.client.get(`v1/available`, params);
  }

  /**
   * Discover subdomains via DNS brute-force
   */
  async subdomains(params: DnsSubdomainsParams): Promise<unknown> {
    return this.client.get(`v1/subdomains`, params);
  }

  /**
   * Find associated infrastructure for a domain
   */
  async associated(params: DnsAssociatedParams): Promise<unknown> {
    return this.client.get(`v1/associated`, params);
  }

  /**
   * Check if a domain is a disposable/temporary email provider
   */
  async disposable(params: DnsDisposableParams): Promise<unknown> {
    return this.client.get(`v1/disposable`, params);
  }

  /**
   * Search keyword availability across 150+ TLDs
   */
  async tld_search(params: DnsTld_searchParams): Promise<unknown> {
    return this.client.get(`v1/tld-search`, params);
  }

  /**
   * Bulk domain availability check
   */
  async available_bulk(params: DnsAvailable_bulkParams, body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/available/bulk`, body, params);
  }

  /**
   * Bulk WHOIS / RDAP lookup
   */
  async whois_bulk(params: DnsWhois_bulkParams, body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/whois/bulk`, body, params);
  }

  /**
   * DNS health audit and score
   */
  async health(params: DnsHealthParams): Promise<unknown> {
    return this.client.get(`v1/health`, params);
  }

  /**
   * SSL/TLS certificate inspection
   */
  async certificate(params: DnsCertificateParams): Promise<unknown> {
    return this.client.get(`v1/certificate`, params);
  }

  /**
   * DNSSEC validation check
   */
  async dnssec(params: DnsDnssecParams): Promise<unknown> {
    return this.client.get(`v1/dnssec`, params);
  }

  /**
   * Audit HTTP security headers
   */
  async security_headers(params: DnsSecurity_headersParams): Promise<unknown> {
    return this.client.get(`v1/security-headers`, params);
  }

  /**
   * Test for zone transfer (AXFR) vulnerability
   */
  async zone_transfer(params: DnsZone_transferParams): Promise<unknown> {
    return this.client.get(`v1/zone-transfer`, params);
  }

  /**
   * Detect typosquatting domains
   */
  async typosquat(params: DnsTyposquatParams): Promise<unknown> {
    return this.client.get(`v1/typosquat`, params);
  }

  /**
   * Check IP against 30 DNS blacklists
   */
  async blacklist(params: DnsBlacklistParams): Promise<unknown> {
    return this.client.get(`v1/blacklist`, params);
  }

  /**
   * Detect web server technology and headers
   */
  async tech_stack(params: DnsTech_stackParams): Promise<unknown> {
    return this.client.get(`v1/tech-stack`, params);
  }

  /**
   * Scan common TCP ports
   */
  async port_scan(params: DnsPort_scanParams): Promise<unknown> {
    return this.client.get(`v1/ports`, params);
  }

  /**
   * Trace HTTP redirect chain
   */
  async redirects(params: DnsRedirectsParams): Promise<unknown> {
    return this.client.get(`v1/redirects`, params);
  }

  /**
   * Build a company profile from a domain
   */
  async company_profile(params: DnsCompany_profileParams): Promise<unknown> {
    return this.client.get(`v1/company-profile`, params);
  }

  /**
   * Decompose a URL into its component parts
   */
  async url_parse(params: DnsUrl_parseParams): Promise<unknown> {
    return this.client.get(`v1/url-parse`, params);
  }

  /**
   * Parse raw HTTP headers into structured key-value pairs
   */
  async http_header_parse(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/http-header-parse`, body);
  }

  /**
   * Reverse DNS lookup with IP intelligence
   */
  async reverse(params: DnsReverseParams): Promise<unknown> {
    return this.client.get(`v1/reverse`, params);
  }

  /**
   * ASN and IP intelligence lookup
   */
  async asn(params: DnsAsnParams): Promise<unknown> {
    return this.client.get(`v1/asn`, params);
  }

  /**
   * IP subnet calculator
   */
  async ip_calc(params: DnsIp_calcParams): Promise<unknown> {
    return this.client.get(`v1/ip-calc`, params);
  }

  /**
   * Generate DNS records from simple inputs
   */
  async generate(params: DnsGenerateParams): Promise<unknown> {
    return this.client.get(`v1/generate`, params);
  }

  /**
   * Benchmark authoritative nameserver response times
   */
  async ns_performance(params: DnsNs_performanceParams): Promise<unknown> {
    return this.client.get(`v1/ns-performance`, params);
  }

  /**
   * Analyze CAA (Certificate Authority Authorization) records
   */
  async caa(params: DnsCaaParams): Promise<unknown> {
    return this.client.get(`v1/caa`, params);
  }

  /**
   * Look up TLSA/DANE records
   */
  async tlsa(params: DnsTlsaParams): Promise<unknown> {
    return this.client.get(`v1/tlsa`, params);
  }

  /**
   * Status Check
   */
  async status_check(): Promise<unknown> {
    return this.client.get(`v1/status`);
  }

}
