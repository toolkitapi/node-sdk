import { HttpClient } from "../client";
export interface ImageResizeParams extends Record<string, unknown> {
    url: string;
    width?: (number | unknown) | null;
    height?: (number | unknown) | null;
    maintain_aspect?: boolean;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageCropParams extends Record<string, unknown> {
    url: string;
    mode?: string | null;
    x?: (number | unknown) | null;
    y?: (number | unknown) | null;
    width?: (number | unknown) | null;
    height?: (number | unknown) | null;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageRotateParams extends Record<string, unknown> {
    url: string;
    degrees: number;
    expand?: boolean;
    fill_color?: string | null;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageFlipParams extends Record<string, unknown> {
    url: string;
    direction?: string | null;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageCompressParams extends Record<string, unknown> {
    url: string;
    quality?: number;
    format?: string | null;
    [key: string]: unknown;
}
export interface ImageStrip_exifParams extends Record<string, unknown> {
    url: string;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageTrimParams extends Record<string, unknown> {
    url: string;
    tolerance?: number;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImagePadParams extends Record<string, unknown> {
    url: string;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    fill_color?: string | null;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageCompositeParams extends Record<string, unknown> {
    base_url: string;
    overlay_url: string;
    mode?: string | null;
    opacity?: number;
    x?: number;
    y?: number;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageDitherParams extends Record<string, unknown> {
    url: string;
    colors?: number;
    format?: string | null;
    [key: string]: unknown;
}
export interface ImageRemove_backgroundParams extends Record<string, unknown> {
    url: string;
    format?: string | null;
    quality?: number;
    alpha_matting?: boolean;
    [key: string]: unknown;
}
export interface ImageGrayscaleParams extends Record<string, unknown> {
    url: string;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageBlurParams extends Record<string, unknown> {
    url: string;
    radius?: number;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageSharpenParams extends Record<string, unknown> {
    url: string;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageSepiaParams extends Record<string, unknown> {
    url: string;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageBrightnessParams extends Record<string, unknown> {
    url: string;
    factor: number;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageContrastParams extends Record<string, unknown> {
    url: string;
    factor: number;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageSaturationParams extends Record<string, unknown> {
    url: string;
    factor: number;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImagePlaceholder_getParams extends Record<string, unknown> {
    width?: number;
    height?: number;
    text?: (string | unknown) | null;
    bg_color?: string | null;
    text_color?: string | null;
    format?: string | null;
    [key: string]: unknown;
}
export interface ImageWatermark_textParams extends Record<string, unknown> {
    url: string;
    text: string;
    position?: string | null;
    font_size?: number;
    color?: string | null;
    opacity?: number;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageWatermark_imageParams extends Record<string, unknown> {
    base_url: string;
    watermark_url: string;
    position?: string | null;
    scale?: number;
    opacity?: number;
    format?: string | null;
    quality?: number;
    [key: string]: unknown;
}
export interface ImageMetadata_getParams extends Record<string, unknown> {
    url: string;
    [key: string]: unknown;
}
export interface ImageColors_getParams extends Record<string, unknown> {
    url: string;
    count?: number;
    [key: string]: unknown;
}
export interface ImageFaviconParams extends Record<string, unknown> {
    domain: string;
    [key: string]: unknown;
}
export interface ImageList_image_templatesParams extends Record<string, unknown> {
    category?: (string | unknown) | null;
    [key: string]: unknown;
}
export interface ImageConvert_image_fileParams extends Record<string, unknown> {
    url: string;
    from_format: string;
    to_format: string;
    quality?: number;
    width?: (number | unknown) | null;
    height?: (number | unknown) | null;
    scale?: number;
    background?: (string | unknown) | null;
    size?: number;
    colormode?: string | null;
    filter_speckle?: number;
    color_precision?: number;
    corner_threshold?: number;
    filename?: (string | unknown) | null;
    [key: string]: unknown;
}
export type ImagePlaceholderBody = Record<string, unknown>;
export type ImageMetadataBody = Record<string, unknown>;
export type ImageColorsBody = Record<string, unknown>;
export type ImageFrom_htmlBody = Record<string, unknown>;
export type ImageFrom_templateBody = Record<string, unknown>;
export type ImageConvert_imageBody = Record<string, unknown>;
export declare class Image {
    private client;
    constructor(client: HttpClient);
    /**
     * Resize an image
     */
    resize(params: ImageResizeParams): Promise<unknown>;
    /**
     * Crop an image
     */
    crop(params: ImageCropParams): Promise<unknown>;
    /**
     * Rotate an image
     */
    rotate(params: ImageRotateParams): Promise<unknown>;
    /**
     * Flip an image
     */
    flip(params: ImageFlipParams): Promise<unknown>;
    /**
     * Compress an image
     */
    compress(params: ImageCompressParams): Promise<unknown>;
    /**
     * Strip EXIF metadata
     */
    strip_exif(params: ImageStrip_exifParams): Promise<unknown>;
    /**
     * Auto-trim image borders
     */
    trim(params: ImageTrimParams): Promise<unknown>;
    /**
     * Add padding to an image
     */
    pad(params: ImagePadParams): Promise<unknown>;
    /**
     * Composite two images
     */
    composite(params: ImageCompositeParams): Promise<unknown>;
    /**
     * Reduce to a limited colour palette
     */
    dither(params: ImageDitherParams): Promise<unknown>;
    /**
     * Remove image background
     */
    remove_background(params: ImageRemove_backgroundParams): Promise<unknown>;
    /**
     * Convert to grayscale
     */
    grayscale(params: ImageGrayscaleParams): Promise<unknown>;
    /**
     * Apply Gaussian blur
     */
    blur(params: ImageBlurParams): Promise<unknown>;
    /**
     * Sharpen an image
     */
    sharpen(params: ImageSharpenParams): Promise<unknown>;
    /**
     * Apply sepia tone
     */
    sepia(params: ImageSepiaParams): Promise<unknown>;
    /**
     * Adjust brightness
     */
    brightness(params: ImageBrightnessParams): Promise<unknown>;
    /**
     * Adjust contrast
     */
    contrast(params: ImageContrastParams): Promise<unknown>;
    /**
     * Adjust saturation
     */
    saturation(params: ImageSaturationParams): Promise<unknown>;
    /**
     * Generate a placeholder image
     */
    placeholder(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate a placeholder image (raw)
     */
    placeholder_get(params: ImagePlaceholder_getParams): Promise<unknown>;
    /**
     * Add a text watermark
     */
    watermark_text(params: ImageWatermark_textParams): Promise<unknown>;
    /**
     * Add an image watermark
     */
    watermark_image(params: ImageWatermark_imageParams): Promise<unknown>;
    /**
     * Extract image metadata (EXIF)
     */
    metadata(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Extract image metadata from URL
     */
    metadata_get(params: ImageMetadata_getParams): Promise<unknown>;
    /**
     * Extract dominant colour palette
     */
    colors(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Extract colour palette from URL
     */
    colors_get(params: ImageColors_getParams): Promise<unknown>;
    /**
     * Fetch highest-resolution favicon
     */
    favicon(params: ImageFaviconParams): Promise<unknown>;
    /**
     * Download a processed image
     */
    download_image(object_name: string): Promise<unknown>;
    /**
     * Render raw HTML/CSS as an image
     */
    from_html(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Render a Liquid template as an image
     */
    from_template(body: Record<string, unknown>): Promise<unknown>;
    /**
     * List pre-built image templates
     */
    list_image_templates(params: ImageList_image_templatesParams): Promise<unknown>;
    /**
     * Get a single image template
     */
    get_image_template(template_id: string): Promise<unknown>;
    /**
     * Convert between image formats
     */
    convert_image(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Convert image via URL (file download)
     */
    convert_image_file(params: ImageConvert_image_fileParams): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
