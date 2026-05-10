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
export declare class Textanalysis {
    private client;
    constructor(client: HttpClient);
    /**
     * Readability Score
     */
    readability_score(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Summarize
     */
    summarize(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Text Similarity
     */
    text_similarity(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Text Diff
     */
    text_diff(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Data Mask
     */
    data_mask(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Profanity Filter
     */
    profanity_filter(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Word Frequency
     */
    word_frequency(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Detect Language
     */
    detect_language(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Transliterate Text
     */
    transliterate_text(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
