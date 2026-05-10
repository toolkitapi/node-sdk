# ToolkitAPI — Node.js / TypeScript SDK

[![npm version](https://img.shields.io/npm/v/@toolkitapi/node-sdk.svg)](https://www.npmjs.com/package/@toolkitapi/node-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Official TypeScript SDK for [ToolkitAPI.io](https://toolkitapi.io) — a family of
focused HTTP APIs covering DNS, email, images, PDFs, scraping, AI-powered text
tools, barcodes, media extraction, webhooks, and more.

## Installation

```bash
npm install @toolkitapi/node-sdk
```

Requires Node.js **18+** (uses the built-in `fetch` API).

## Quick start

```typescript
import { ToolkitAPI } from "@toolkitapi/node-sdk";

const tk = new ToolkitAPI("https://toolkitapi.io", "tk_live_...");

// DNS lookup
const dns = await tk.dns.lookup({ domain: "example.com" });
console.log(dns);

// Readability score
const score = await tk.textanalysis.readability({ text: "The quick brown fox." });
console.log(score);
```

Each toolkit is also importable directly if you only need one:

```typescript
import { Dns } from "@toolkitapi/node-sdk";

const dns = new Dns("https://dns.toolkitapi.io", "tk_live_...");
const result = await dns.lookup({ domain: "example.com" });
```

## Toolkits

| Class | Highlights |
| --- | --- |
| `Analytics` | Query CSV/JSON/Parquet data with natural language |
| `Auth` | JWT create/decode, TOTP, OAuth helpers, API-key generation |
| `Barcode` | Barcode and QR code generation and decoding |
| `Convert` | Format (JSON/YAML/CSV/XML) and unit conversions |
| `Devtools` | JSON/YAML/XML validators, regex tester, UUID, hashing, fake data |
| `Dns` | DNS records, WHOIS, propagation, email auth, typosquat, SSL certs |
| `Email` | Validation, deliverability, disposable detection, SPF/DMARC |
| `Geo` | IP geolocation, reverse geocoding, distance/bearing, timezone |
| `Image` | Resize, convert, optimise, analyse, remove background |
| `Media` | YouTube metadata/transcripts, universal media extraction |
| `Pdf` | Generate, merge, split, extract, stamp, protect |
| `Scrape` | Web scraping, readability, meta, SEO audits, broken-link checks |
| `Textanalysis` | Readability, PII masking, profanity, similarity, summarize, language |
| `Webhook` | Request bins, HTTP mocks, replay captured requests |

Full endpoint reference at <https://toolkitapi.io/docs>.

## Authentication

Every request is authenticated via the `X-API-Key` header. Pass your key as
the second argument to `ToolkitAPI` or to any individual toolkit class.

Get your API key at <https://toolkitapi.io/account/signup>.

## Error handling

The SDK throws on non-2xx responses. Catch errors with a standard `try/catch`:

```typescript
try {
  const result = await tk.dns.lookup({ domain: "example.com" });
} catch (err) {
  if (err instanceof Error) {
    console.error(err.message);
  }
}
```

## TypeScript support

The SDK is written in TypeScript and ships with full type declarations (`dist/*.d.ts`).
No `@types/` package is needed.

## License

MIT
