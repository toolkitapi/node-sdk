// Auto-generated — do not edit manually

import { HttpClient } from "./client";

import { Analytics } from "./toolkit/analytics";
import { Auth } from "./toolkit/auth";
import { Barcode } from "./toolkit/barcode";
import { Convert } from "./toolkit/convert";
import { Devtools } from "./toolkit/devtools";
import { Dns } from "./toolkit/dns";
import { Email } from "./toolkit/email";
import { Geo } from "./toolkit/geo";
import { Image } from "./toolkit/image";
import { Media } from "./toolkit/media";
import { Pdf } from "./toolkit/pdf";
import { Scrape } from "./toolkit/scrape";
import { Textanalysis } from "./toolkit/textanalysis";
import { Webhook } from "./toolkit/webhook";

export * from "./client";
export * from "./types";
export type { Analytics } from "./toolkit/analytics";
export type { Auth } from "./toolkit/auth";
export type { Barcode } from "./toolkit/barcode";
export type { Convert } from "./toolkit/convert";
export type { Devtools } from "./toolkit/devtools";
export type { Dns } from "./toolkit/dns";
export type { Email } from "./toolkit/email";
export type { Geo } from "./toolkit/geo";
export type { Image } from "./toolkit/image";
export type { Media } from "./toolkit/media";
export type { Pdf } from "./toolkit/pdf";
export type { Scrape } from "./toolkit/scrape";
export type { Textanalysis } from "./toolkit/textanalysis";
export type { Webhook } from "./toolkit/webhook";
export class ToolkitAPI {

  readonly analytics: Analytics;
  readonly auth: Auth;
  readonly barcode: Barcode;
  readonly convert: Convert;
  readonly devtools: Devtools;
  readonly dns: Dns;
  readonly email: Email;
  readonly geo: Geo;
  readonly image: Image;
  readonly media: Media;
  readonly pdf: Pdf;
  readonly scrape: Scrape;
  readonly textanalysis: Textanalysis;
  readonly webhook: Webhook;

  constructor(baseUrl: string, apiKey: string) {
    const { hostname } = new URL(baseUrl);
    const parts = hostname.split(".");
    const rootDomain = parts.length > 2 ? parts.slice(-2).join(".") : hostname;
    const SUBDOMAIN: Record<string, string> = { devtools: "dev", media: "youtube" };
    const mkClient = (toolkit: string) => new HttpClient(`https://${SUBDOMAIN[toolkit] ?? toolkit}.${rootDomain}`, apiKey);
    this.analytics = new Analytics(mkClient("analytics"));
    this.auth = new Auth(mkClient("auth"));
    this.barcode = new Barcode(mkClient("barcode"));
    this.convert = new Convert(mkClient("convert"));
    this.devtools = new Devtools(mkClient("devtools"));
    this.dns = new Dns(mkClient("dns"));
    this.email = new Email(mkClient("email"));
    this.geo = new Geo(mkClient("geo"));
    this.image = new Image(mkClient("image"));
    this.media = new Media(mkClient("media"));
    this.pdf = new Pdf(mkClient("pdf"));
    this.scrape = new Scrape(mkClient("scrape"));
    this.textanalysis = new Textanalysis(mkClient("textanalysis"));
    this.webhook = new Webhook(mkClient("webhook"));
  }

  close(): void {
    // HttpClient uses fetch; no explicit cleanup needed
  }
}
