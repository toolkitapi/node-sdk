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
  private client: HttpClient;

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
    this.client = new HttpClient(baseUrl, apiKey);
    this.analytics = new Analytics(this.client);
    this.auth = new Auth(this.client);
    this.barcode = new Barcode(this.client);
    this.convert = new Convert(this.client);
    this.devtools = new Devtools(this.client);
    this.dns = new Dns(this.client);
    this.email = new Email(this.client);
    this.geo = new Geo(this.client);
    this.image = new Image(this.client);
    this.media = new Media(this.client);
    this.pdf = new Pdf(this.client);
    this.scrape = new Scrape(this.client);
    this.textanalysis = new Textanalysis(this.client);
    this.webhook = new Webhook(this.client);
  }

  close(): void {
    // HttpClient uses fetch; no explicit cleanup needed
  }
}
