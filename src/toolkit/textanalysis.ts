// Auto-generated — do not edit manually
// textanalysis toolkit

import { HttpClient } from "../client";

export type TextanalysisReadability_scoreBody = Record<string, unknown>;

export type TextanalysisSummarizeBody = Record<string, unknown>;

export type TextanalysisText_similarityBody = Record<string, unknown>;

export type TextanalysisText_diffBody = Record<string, unknown>;

export type TextanalysisData_maskBody = Record<string, unknown>;

export type TextanalysisProfanity_filterBody = Record<string, unknown>;

export type TextanalysisWord_frequencyBody = Record<string, unknown>;

export type TextanalysisDetect_languageBody = Record<string, unknown>;

export type TextanalysisTransliterate_textBody = Record<string, unknown>;

export class Textanalysis {
  constructor(private client: HttpClient) {}

  /**
   * Readability Score
   */
  async readability_score(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/readability`, body);
  }

  /**
   * Summarize
   */
  async summarize(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/summarize`, body);
  }

  /**
   * Text Similarity
   */
  async text_similarity(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/similarity`, body);
  }

  /**
   * Text Diff
   */
  async text_diff(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/diff`, body);
  }

  /**
   * Data Mask
   */
  async data_mask(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/pii-mask`, body);
  }

  /**
   * Profanity Filter
   */
  async profanity_filter(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/profanity`, body);
  }

  /**
   * Word Frequency
   */
  async word_frequency(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/word-frequency`, body);
  }

  /**
   * Detect Language
   */
  async detect_language(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/language`, body);
  }

  /**
   * Transliterate Text
   */
  async transliterate_text(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text/transliterate`, body);
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
