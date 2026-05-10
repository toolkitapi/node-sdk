"use strict";
// Auto-generated — do not edit manually
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolkitAPI = void 0;
const client_1 = require("./client");
const analytics_1 = require("./toolkit/analytics");
const auth_1 = require("./toolkit/auth");
const barcode_1 = require("./toolkit/barcode");
const convert_1 = require("./toolkit/convert");
const devtools_1 = require("./toolkit/devtools");
const dns_1 = require("./toolkit/dns");
const email_1 = require("./toolkit/email");
const geo_1 = require("./toolkit/geo");
const image_1 = require("./toolkit/image");
const media_1 = require("./toolkit/media");
const pdf_1 = require("./toolkit/pdf");
const scrape_1 = require("./toolkit/scrape");
const textanalysis_1 = require("./toolkit/textanalysis");
const webhook_1 = require("./toolkit/webhook");
__exportStar(require("./client"), exports);
__exportStar(require("./types"), exports);
class ToolkitAPI {
    client;
    analytics;
    auth;
    barcode;
    convert;
    devtools;
    dns;
    email;
    geo;
    image;
    media;
    pdf;
    scrape;
    textanalysis;
    webhook;
    constructor(baseUrl, apiKey) {
        this.client = new client_1.HttpClient(baseUrl, apiKey);
        this.analytics = new analytics_1.Analytics(this.client);
        this.auth = new auth_1.Auth(this.client);
        this.barcode = new barcode_1.Barcode(this.client);
        this.convert = new convert_1.Convert(this.client);
        this.devtools = new devtools_1.Devtools(this.client);
        this.dns = new dns_1.Dns(this.client);
        this.email = new email_1.Email(this.client);
        this.geo = new geo_1.Geo(this.client);
        this.image = new image_1.Image(this.client);
        this.media = new media_1.Media(this.client);
        this.pdf = new pdf_1.Pdf(this.client);
        this.scrape = new scrape_1.Scrape(this.client);
        this.textanalysis = new textanalysis_1.Textanalysis(this.client);
        this.webhook = new webhook_1.Webhook(this.client);
    }
    close() {
        // HttpClient uses fetch; no explicit cleanup needed
    }
}
exports.ToolkitAPI = ToolkitAPI;
