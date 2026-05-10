// Auto-generated — do not edit manually
// image toolkit

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

export class Image {
  constructor(private client: HttpClient) {}

  /**
   * Resize an image
   */
  async resize(params: ImageResizeParams): Promise<unknown> {
    return this.client.get(`v1/image/resize`, params);
  }

  /**
   * Crop an image
   */
  async crop(params: ImageCropParams): Promise<unknown> {
    return this.client.get(`v1/image/crop`, params);
  }

  /**
   * Rotate an image
   */
  async rotate(params: ImageRotateParams): Promise<unknown> {
    return this.client.get(`v1/image/rotate`, params);
  }

  /**
   * Flip an image
   */
  async flip(params: ImageFlipParams): Promise<unknown> {
    return this.client.get(`v1/image/flip`, params);
  }

  /**
   * Compress an image
   */
  async compress(params: ImageCompressParams): Promise<unknown> {
    return this.client.get(`v1/image/compress`, params);
  }

  /**
   * Strip EXIF metadata
   */
  async strip_exif(params: ImageStrip_exifParams): Promise<unknown> {
    return this.client.get(`v1/image/strip-exif`, params);
  }

  /**
   * Auto-trim image borders
   */
  async trim(params: ImageTrimParams): Promise<unknown> {
    return this.client.get(`v1/image/trim`, params);
  }

  /**
   * Add padding to an image
   */
  async pad(params: ImagePadParams): Promise<unknown> {
    return this.client.get(`v1/image/pad`, params);
  }

  /**
   * Composite two images
   */
  async composite(params: ImageCompositeParams): Promise<unknown> {
    return this.client.get(`v1/image/composite`, params);
  }

  /**
   * Reduce to a limited colour palette
   */
  async dither(params: ImageDitherParams): Promise<unknown> {
    return this.client.get(`v1/image/dither`, params);
  }

  /**
   * Remove image background
   */
  async remove_background(params: ImageRemove_backgroundParams): Promise<unknown> {
    return this.client.get(`v1/image/remove-background`, params);
  }

  /**
   * Convert to grayscale
   */
  async grayscale(params: ImageGrayscaleParams): Promise<unknown> {
    return this.client.get(`v1/image/filter/grayscale`, params);
  }

  /**
   * Apply Gaussian blur
   */
  async blur(params: ImageBlurParams): Promise<unknown> {
    return this.client.get(`v1/image/filter/blur`, params);
  }

  /**
   * Sharpen an image
   */
  async sharpen(params: ImageSharpenParams): Promise<unknown> {
    return this.client.get(`v1/image/filter/sharpen`, params);
  }

  /**
   * Apply sepia tone
   */
  async sepia(params: ImageSepiaParams): Promise<unknown> {
    return this.client.get(`v1/image/filter/sepia`, params);
  }

  /**
   * Adjust brightness
   */
  async brightness(params: ImageBrightnessParams): Promise<unknown> {
    return this.client.get(`v1/image/adjust/brightness`, params);
  }

  /**
   * Adjust contrast
   */
  async contrast(params: ImageContrastParams): Promise<unknown> {
    return this.client.get(`v1/image/adjust/contrast`, params);
  }

  /**
   * Adjust saturation
   */
  async saturation(params: ImageSaturationParams): Promise<unknown> {
    return this.client.get(`v1/image/adjust/saturation`, params);
  }

  /**
   * Generate a placeholder image
   */
  async placeholder(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/image/placeholder`, body);
  }

  /**
   * Generate a placeholder image (raw)
   */
  async placeholder_get(params: ImagePlaceholder_getParams): Promise<unknown> {
    return this.client.get(`v1/image/placeholder`, params);
  }

  /**
   * Add a text watermark
   */
  async watermark_text(params: ImageWatermark_textParams): Promise<unknown> {
    return this.client.get(`v1/image/watermark/text`, params);
  }

  /**
   * Add an image watermark
   */
  async watermark_image(params: ImageWatermark_imageParams): Promise<unknown> {
    return this.client.get(`v1/image/watermark/image`, params);
  }

  /**
   * Extract image metadata (EXIF)
   */
  async metadata(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/image/extract/metadata`, body);
  }

  /**
   * Extract image metadata from URL
   */
  async metadata_get(params: ImageMetadata_getParams): Promise<unknown> {
    return this.client.get(`v1/image/extract/metadata`, params);
  }

  /**
   * Extract dominant colour palette
   */
  async colors(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/image/extract/colors`, body);
  }

  /**
   * Extract colour palette from URL
   */
  async colors_get(params: ImageColors_getParams): Promise<unknown> {
    return this.client.get(`v1/image/extract/colors`, params);
  }

  /**
   * Fetch highest-resolution favicon
   */
  async favicon(params: ImageFaviconParams): Promise<unknown> {
    return this.client.get(`v1/image/favicon`, params);
  }

  /**
   * Download a processed image
   */
  async download_image(object_name: string): Promise<unknown> {
    return this.client.get(`v1/image/download/${object_name}`);
  }

  /**
   * Render raw HTML/CSS as an image
   */
  async from_html(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/image/from-html`, body);
  }

  /**
   * Render a Liquid template as an image
   */
  async from_template(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/image/from-template`, body);
  }

  /**
   * List pre-built image templates
   */
  async list_image_templates(params: ImageList_image_templatesParams): Promise<unknown> {
    return this.client.get(`v1/image/templates`, params);
  }

  /**
   * Get a single image template
   */
  async get_image_template(template_id: string): Promise<unknown> {
    return this.client.get(`v1/image/templates/${template_id}`);
  }

  /**
   * Convert between image formats
   */
  async convert_image(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/image/convert`, body);
  }

  /**
   * Convert image via URL (file download)
   */
  async convert_image_file(params: ImageConvert_image_fileParams): Promise<unknown> {
    return this.client.get(`v1/image/convert`, params);
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
