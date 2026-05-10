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
export declare class Dns {
    private client;
    constructor(client: HttpClient);
    /**
     * Check DNS propagation across global resolvers
     */
    propagation(params: DnsPropagationParams): Promise<unknown>;
    /**
     * Look up DNS records for a domain
     */
    lookup(params: DnsLookupParams): Promise<unknown>;
    /**
     * Look up all DNS record types for a domain
     */
    lookup_all(params: DnsLookup_allParams): Promise<unknown>;
    /**
     * Bulk DNS lookup for multiple domains
     */
    lookup_bulk(params: DnsLookup_bulkParams, body: Record<string, unknown>): Promise<unknown>;
    /**
     * Compare DNS responses across major public resolvers
     */
    compare_resolvers(params: DnsCompare_resolversParams): Promise<unknown>;
    /**
     * Test DNS-over-HTTPS and DNS-over-TLS providers
     */
    doh_test(params: DnsDoh_testParams): Promise<unknown>;
    /**
     * Convert between IDN (Unicode) and Punycode
     */
    idn(params: DnsIdnParams): Promise<unknown>;
    /**
     * WHOIS / RDAP lookup for a domain
     */
    whois(params: DnsWhoisParams): Promise<unknown>;
    /**
     * Check domain registration age
     */
    domain_age(params: DnsDomain_ageParams): Promise<unknown>;
    /**
     * Check if a domain is available for registration
     */
    available(params: DnsAvailableParams): Promise<unknown>;
    /**
     * Discover subdomains via DNS brute-force
     */
    subdomains(params: DnsSubdomainsParams): Promise<unknown>;
    /**
     * Find associated infrastructure for a domain
     */
    associated(params: DnsAssociatedParams): Promise<unknown>;
    /**
     * Check if a domain is a disposable/temporary email provider
     */
    disposable(params: DnsDisposableParams): Promise<unknown>;
    /**
     * Search keyword availability across 150+ TLDs
     */
    tld_search(params: DnsTld_searchParams): Promise<unknown>;
    /**
     * Bulk domain availability check
     */
    available_bulk(params: DnsAvailable_bulkParams, body: Record<string, unknown>): Promise<unknown>;
    /**
     * Bulk WHOIS / RDAP lookup
     */
    whois_bulk(params: DnsWhois_bulkParams, body: Record<string, unknown>): Promise<unknown>;
    /**
     * DNS health audit and score
     */
    health(params: DnsHealthParams): Promise<unknown>;
    /**
     * SSL/TLS certificate inspection
     */
    certificate(params: DnsCertificateParams): Promise<unknown>;
    /**
     * DNSSEC validation check
     */
    dnssec(params: DnsDnssecParams): Promise<unknown>;
    /**
     * Audit HTTP security headers
     */
    security_headers(params: DnsSecurity_headersParams): Promise<unknown>;
    /**
     * Test for zone transfer (AXFR) vulnerability
     */
    zone_transfer(params: DnsZone_transferParams): Promise<unknown>;
    /**
     * Detect typosquatting domains
     */
    typosquat(params: DnsTyposquatParams): Promise<unknown>;
    /**
     * Check IP against 30 DNS blacklists
     */
    blacklist(params: DnsBlacklistParams): Promise<unknown>;
    /**
     * Detect web server technology and headers
     */
    tech_stack(params: DnsTech_stackParams): Promise<unknown>;
    /**
     * Scan common TCP ports
     */
    port_scan(params: DnsPort_scanParams): Promise<unknown>;
    /**
     * Trace HTTP redirect chain
     */
    redirects(params: DnsRedirectsParams): Promise<unknown>;
    /**
     * Build a company profile from a domain
     */
    company_profile(params: DnsCompany_profileParams): Promise<unknown>;
    /**
     * Decompose a URL into its component parts
     */
    url_parse(params: DnsUrl_parseParams): Promise<unknown>;
    /**
     * Parse raw HTTP headers into structured key-value pairs
     */
    http_header_parse(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Reverse DNS lookup with IP intelligence
     */
    reverse(params: DnsReverseParams): Promise<unknown>;
    /**
     * ASN and IP intelligence lookup
     */
    asn(params: DnsAsnParams): Promise<unknown>;
    /**
     * IP subnet calculator
     */
    ip_calc(params: DnsIp_calcParams): Promise<unknown>;
    /**
     * Generate DNS records from simple inputs
     */
    generate(params: DnsGenerateParams): Promise<unknown>;
    /**
     * Benchmark authoritative nameserver response times
     */
    ns_performance(params: DnsNs_performanceParams): Promise<unknown>;
    /**
     * Analyze CAA (Certificate Authority Authorization) records
     */
    caa(params: DnsCaaParams): Promise<unknown>;
    /**
     * Look up TLSA/DANE records
     */
    tlsa(params: DnsTlsaParams): Promise<unknown>;
    /**
     * Status Check
     */
    status_check(): Promise<unknown>;
}
