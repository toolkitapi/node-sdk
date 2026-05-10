import { HttpClient } from "../client";
export interface MediaYoutube_transcriptParams extends Record<string, unknown> {
    url: string;
    lang?: (string | unknown) | null;
    [key: string]: unknown;
}
export interface MediaYoutube_videoParams extends Record<string, unknown> {
    url: string;
    [key: string]: unknown;
}
export interface MediaYoutube_channelParams extends Record<string, unknown> {
    id: string;
    [key: string]: unknown;
}
export interface MediaYoutube_channel_videosParams extends Record<string, unknown> {
    id: string;
    [key: string]: unknown;
}
export interface MediaYoutube_playlistParams extends Record<string, unknown> {
    id: string;
    [key: string]: unknown;
}
export interface MediaYoutube_playlist_videosParams extends Record<string, unknown> {
    id: string;
    [key: string]: unknown;
}
export interface MediaYoutube_searchParams extends Record<string, unknown> {
    query: string;
    limit?: number;
    [key: string]: unknown;
}
export type MediaYoutube_transcript_batchBody = Record<string, unknown>;
export declare class Media {
    private client;
    constructor(client: HttpClient);
    /**
     * Get YouTube video transcript
     */
    youtube_transcript(params: MediaYoutube_transcriptParams): Promise<unknown>;
    /**
     * Batch transcript extraction
     */
    youtube_transcript_batch(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Get batch transcript job status
     */
    youtube_transcript_batch_status(job_id: string): Promise<unknown>;
    /**
     * Get YouTube video metadata
     */
    youtube_video(params: MediaYoutube_videoParams): Promise<unknown>;
    /**
     * Get YouTube channel info
     */
    youtube_channel(params: MediaYoutube_channelParams): Promise<unknown>;
    /**
     * List channel video IDs
     */
    youtube_channel_videos(params: MediaYoutube_channel_videosParams): Promise<unknown>;
    /**
     * Get playlist info
     */
    youtube_playlist(params: MediaYoutube_playlistParams): Promise<unknown>;
    /**
     * List playlist video IDs
     */
    youtube_playlist_videos(params: MediaYoutube_playlist_videosParams): Promise<unknown>;
    /**
     * Search YouTube
     */
    youtube_search(params: MediaYoutube_searchParams): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
