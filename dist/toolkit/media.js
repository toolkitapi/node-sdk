"use strict";
// Auto-generated — do not edit manually
// media toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
class Media {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Get YouTube video transcript
     */
    async youtube_transcript(params) {
        return this.client.get(`v1/youtube/transcript`, params);
    }
    /**
     * Batch transcript extraction
     */
    async youtube_transcript_batch(body) {
        return this.client.post(`v1/youtube/transcript/batch`, body);
    }
    /**
     * Get batch transcript job status
     */
    async youtube_transcript_batch_status(job_id) {
        return this.client.get(`v1/youtube/transcript/batch/${job_id}`);
    }
    /**
     * Get YouTube video metadata
     */
    async youtube_video(params) {
        return this.client.get(`v1/youtube/video`, params);
    }
    /**
     * Get YouTube channel info
     */
    async youtube_channel(params) {
        return this.client.get(`v1/youtube/channel`, params);
    }
    /**
     * List channel video IDs
     */
    async youtube_channel_videos(params) {
        return this.client.get(`v1/youtube/channel/videos`, params);
    }
    /**
     * Get playlist info
     */
    async youtube_playlist(params) {
        return this.client.get(`v1/youtube/playlist`, params);
    }
    /**
     * List playlist video IDs
     */
    async youtube_playlist_videos(params) {
        return this.client.get(`v1/youtube/playlist/videos`, params);
    }
    /**
     * Search YouTube
     */
    async youtube_search(params) {
        return this.client.get(`v1/youtube/search`, params);
    }
    /**
     * Root
     */
    async root__get() {
        return this.client.get(``);
    }
    /**
     * Status
     */
    async status() {
        return this.client.get(`v1/status`);
    }
}
exports.Media = Media;
