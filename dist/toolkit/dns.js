"use strict";
// Auto-generated — do not edit manually
// dns toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dns = void 0;
class Dns {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Check DNS propagation across global resolvers
     */
    async propagation(params) {
        return this.client.get(`v1/propagation`, params);
    }
    /**
     * Look up DNS records for a domain
     */
    async lookup(params) {
        return this.client.get(`v1/lookup`, params);
    }
    /**
     * Look up all DNS record types for a domain
     */
    async lookup_all(params) {
        return this.client.get(`v1/lookup/all`, params);
    }
    /**
     * Bulk DNS lookup for multiple domains
     */
    async lookup_bulk(params, body) {
        return this.client.post(`v1/lookup/bulk`, body, params);
    }
    /**
     * Compare DNS responses across major public resolvers
     */
    async compare_resolvers(params) {
        return this.client.get(`v1/compare-resolvers`, params);
    }
    /**
     * Test DNS-over-HTTPS and DNS-over-TLS providers
     */
    async doh_test(params) {
        return this.client.get(`v1/doh-test`, params);
    }
    /**
     * Convert between IDN (Unicode) and Punycode
     */
    async idn(params) {
        return this.client.get(`v1/idn`, params);
    }
    /**
     * WHOIS / RDAP lookup for a domain
     */
    async whois(params) {
        return this.client.get(`v1/whois`, params);
    }
    /**
     * Check domain registration age
     */
    async domain_age(params) {
        return this.client.get(`v1/domain-age`, params);
    }
    /**
     * Check if a domain is available for registration
     */
    async available(params) {
        return this.client.get(`v1/available`, params);
    }
    /**
     * Discover subdomains via DNS brute-force
     */
    async subdomains(params) {
        return this.client.get(`v1/subdomains`, params);
    }
    /**
     * Find associated infrastructure for a domain
     */
    async associated(params) {
        return this.client.get(`v1/associated`, params);
    }
    /**
     * Check if a domain is a disposable/temporary email provider
     */
    async disposable(params) {
        return this.client.get(`v1/disposable`, params);
    }
    /**
     * Search keyword availability across 150+ TLDs
     */
    async tld_search(params) {
        return this.client.get(`v1/tld-search`, params);
    }
    /**
     * Bulk domain availability check
     */
    async available_bulk(params, body) {
        return this.client.post(`v1/available/bulk`, body, params);
    }
    /**
     * Bulk WHOIS / RDAP lookup
     */
    async whois_bulk(params, body) {
        return this.client.post(`v1/whois/bulk`, body, params);
    }
    /**
     * DNS health audit and score
     */
    async health(params) {
        return this.client.get(`v1/health`, params);
    }
    /**
     * SSL/TLS certificate inspection
     */
    async certificate(params) {
        return this.client.get(`v1/certificate`, params);
    }
    /**
     * DNSSEC validation check
     */
    async dnssec(params) {
        return this.client.get(`v1/dnssec`, params);
    }
    /**
     * Audit HTTP security headers
     */
    async security_headers(params) {
        return this.client.get(`v1/security-headers`, params);
    }
    /**
     * Test for zone transfer (AXFR) vulnerability
     */
    async zone_transfer(params) {
        return this.client.get(`v1/zone-transfer`, params);
    }
    /**
     * Detect typosquatting domains
     */
    async typosquat(params) {
        return this.client.get(`v1/typosquat`, params);
    }
    /**
     * Check IP against 30 DNS blacklists
     */
    async blacklist(params) {
        return this.client.get(`v1/blacklist`, params);
    }
    /**
     * Detect web server technology and headers
     */
    async tech_stack(params) {
        return this.client.get(`v1/tech-stack`, params);
    }
    /**
     * Scan common TCP ports
     */
    async port_scan(params) {
        return this.client.get(`v1/ports`, params);
    }
    /**
     * Trace HTTP redirect chain
     */
    async redirects(params) {
        return this.client.get(`v1/redirects`, params);
    }
    /**
     * Build a company profile from a domain
     */
    async company_profile(params) {
        return this.client.get(`v1/company-profile`, params);
    }
    /**
     * Decompose a URL into its component parts
     */
    async url_parse(params) {
        return this.client.get(`v1/url-parse`, params);
    }
    /**
     * Parse raw HTTP headers into structured key-value pairs
     */
    async http_header_parse(body) {
        return this.client.post(`v1/http-header-parse`, body);
    }
    /**
     * Reverse DNS lookup with IP intelligence
     */
    async reverse(params) {
        return this.client.get(`v1/reverse`, params);
    }
    /**
     * ASN and IP intelligence lookup
     */
    async asn(params) {
        return this.client.get(`v1/asn`, params);
    }
    /**
     * IP subnet calculator
     */
    async ip_calc(params) {
        return this.client.get(`v1/ip-calc`, params);
    }
    /**
     * Generate DNS records from simple inputs
     */
    async generate(params) {
        return this.client.get(`v1/generate`, params);
    }
    /**
     * Benchmark authoritative nameserver response times
     */
    async ns_performance(params) {
        return this.client.get(`v1/ns-performance`, params);
    }
    /**
     * Analyze CAA (Certificate Authority Authorization) records
     */
    async caa(params) {
        return this.client.get(`v1/caa`, params);
    }
    /**
     * Look up TLSA/DANE records
     */
    async tlsa(params) {
        return this.client.get(`v1/tlsa`, params);
    }
    /**
     * Status Check
     */
    async status_check() {
        return this.client.get(`v1/status`);
    }
}
exports.Dns = Dns;
