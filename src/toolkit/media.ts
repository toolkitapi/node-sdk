// Auto-generated — do not edit manually
// media toolkit

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

export class Media {
  constructor(private client: HttpClient) {}

  /**
   * Get YouTube video transcript
   */
  async youtube_transcript(params: MediaYoutube_transcriptParams): Promise<unknown> {
    return this.client.get(`v1/youtube/transcript`, params);
  }

  /**
   * Batch transcript extraction
   */
  async youtube_transcript_batch(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/youtube/transcript/batch`, body);
  }

  /**
   * Get batch transcript job status
   */
  async youtube_transcript_batch_status(job_id: string): Promise<unknown> {
    return this.client.get(`v1/youtube/transcript/batch/${job_id}`);
  }

  /**
   * Get YouTube video metadata
   */
  async youtube_video(params: MediaYoutube_videoParams): Promise<unknown> {
    return this.client.get(`v1/youtube/video`, params);
  }

  /**
   * Get YouTube channel info
   */
  async youtube_channel(params: MediaYoutube_channelParams): Promise<unknown> {
    return this.client.get(`v1/youtube/channel`, params);
  }

  /**
   * List channel video IDs
   */
  async youtube_channel_videos(params: MediaYoutube_channel_videosParams): Promise<unknown> {
    return this.client.get(`v1/youtube/channel/videos`, params);
  }

  /**
   * Get playlist info
   */
  async youtube_playlist(params: MediaYoutube_playlistParams): Promise<unknown> {
    return this.client.get(`v1/youtube/playlist`, params);
  }

  /**
   * List playlist video IDs
   */
  async youtube_playlist_videos(params: MediaYoutube_playlist_videosParams): Promise<unknown> {
    return this.client.get(`v1/youtube/playlist/videos`, params);
  }

  /**
   * Search YouTube
   */
  async youtube_search(params: MediaYoutube_searchParams): Promise<unknown> {
    return this.client.get(`v1/youtube/search`, params);
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
