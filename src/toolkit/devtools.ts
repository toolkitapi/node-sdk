// Auto-generated — do not edit manually
// devtools toolkit

import { HttpClient } from "../client";

export interface DevtoolsGenerate_uuidParams extends Record<string, unknown> {
  version?: string | null;
  count?: number;
  [key: string]: unknown;
}

export interface DevtoolsPassword_genParams extends Record<string, unknown> {
  length?: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
  count?: number;
  [key: string]: unknown;
}

export interface DevtoolsLorem_ipsumParams extends Record<string, unknown> {
  paragraphs?: (number | unknown) | null;
  sentences?: (number | unknown) | null;
  words?: (number | unknown) | null;
  [key: string]: unknown;
}

export interface DevtoolsFake_dataParams extends Record<string, unknown> {
  _type: string;
  count?: number;
  [key: string]: unknown;
}

export interface DevtoolsCron_parseParams extends Record<string, unknown> {
  expression: string;
  count?: number;
  tz?: string | null;
  [key: string]: unknown;
}

export interface DevtoolsCron_nextParams extends Record<string, unknown> {
  expression: string;
  count?: number;
  from_date?: (string | unknown) | null;
  [key: string]: unknown;
}

export interface DevtoolsTimestampParams extends Record<string, unknown> {
  ts?: (number | unknown) | null;
  iso?: (string | unknown) | null;
  [key: string]: unknown;
}

export interface DevtoolsColor_convertParams extends Record<string, unknown> {
  color: string;
  [key: string]: unknown;
}

export interface DevtoolsBase_convertParams extends Record<string, unknown> {
  value: string;
  from_base?: number;
  to_base?: number;
  [key: string]: unknown;
}

export interface DevtoolsChmod_calcParams extends Record<string, unknown> {
  mode: string;
  [key: string]: unknown;
}

export type DevtoolsJson_validateBody = Record<string, unknown>;

export type DevtoolsJson_diffBody = Record<string, unknown>;

export type DevtoolsYaml_validateBody = Record<string, unknown>;

export type DevtoolsXml_validateBody = Record<string, unknown>;

export type DevtoolsToml_validateBody = Record<string, unknown>;

export type DevtoolsJson_schema_validateBody = Record<string, unknown>;

export type DevtoolsJsonpath_queryBody = Record<string, unknown>;

export type DevtoolsJson_to_schemaBody = Record<string, unknown>;

export type DevtoolsCsv_lintBody = Record<string, unknown>;

export type DevtoolsRegex_testBody = Record<string, unknown>;

export type DevtoolsRegex_extractBody = Record<string, unknown>;

export type DevtoolsRegex_parseBody = Record<string, unknown>;

export type DevtoolsUser_agentBody = Record<string, unknown>;

export type DevtoolsSemver_compareBody = Record<string, unknown>;

export type DevtoolsEnv_parseBody = Record<string, unknown>;

export type DevtoolsDiff_textBody = Record<string, unknown>;

export type DevtoolsSlugifyBody = Record<string, unknown>;

export type DevtoolsWord_countBody = Record<string, unknown>;

export type DevtoolsSql_formatBody = Record<string, unknown>;

export type DevtoolsText_escapeBody = Record<string, unknown>;

export type DevtoolsText_truncateBody = Record<string, unknown>;

export type DevtoolsCode_formatBody = Record<string, unknown>;

export type DevtoolsLiquid_renderBody = Record<string, unknown>;

export type DevtoolsJson_transformBody = Record<string, unknown>;

export type DevtoolsMath_evalBody = Record<string, unknown>;

export type DevtoolsDate_formatBody = Record<string, unknown>;

export type DevtoolsJson_flattenBody = Record<string, unknown>;

export type DevtoolsArray_opsBody = Record<string, unknown>;

export type DevtoolsNumber_formatBody = Record<string, unknown>;

export type DevtoolsMock_dataBody = Record<string, unknown>;

export type DevtoolsMock_schemaBody = Record<string, unknown>;

export class Devtools {
  constructor(private client: HttpClient) {}

  /**
   * Json Validate
   */
  async json_validate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/json-validate`, body);
  }

  /**
   * Json Diff
   */
  async json_diff(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/json-diff`, body);
  }

  /**
   * Yaml Validate
   */
  async yaml_validate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/yaml-validate`, body);
  }

  /**
   * Xml Validate
   */
  async xml_validate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/xml-validate`, body);
  }

  /**
   * Toml Validate
   */
  async toml_validate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/toml-validate`, body);
  }

  /**
   * Json Schema Validate
   */
  async json_schema_validate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/json-schema-validate`, body);
  }

  /**
   * Jsonpath Query
   */
  async jsonpath_query(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/jsonpath`, body);
  }

  /**
   * Json To Schema
   */
  async json_to_schema(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/json-to-schema`, body);
  }

  /**
   * Lint and validate CSV data
   */
  async csv_lint(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/csv-lint`, body);
  }

  /**
   * Generate Uuid
   */
  async generate_uuid(params: DevtoolsGenerate_uuidParams): Promise<unknown> {
    return this.client.get(`v1/uuid`, params);
  }

  /**
   * Password Gen
   */
  async password_gen(params: DevtoolsPassword_genParams): Promise<unknown> {
    return this.client.get(`v1/password-gen`, params);
  }

  /**
   * Lorem Ipsum
   */
  async lorem_ipsum(params: DevtoolsLorem_ipsumParams): Promise<unknown> {
    return this.client.get(`v1/lorem-ipsum`, params);
  }

  /**
   * Fake Data
   */
  async fake_data(params: DevtoolsFake_dataParams): Promise<unknown> {
    return this.client.get(`v1/fake-data`, params);
  }

  /**
   * Regex Test
   */
  async regex_test(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/regex-test`, body);
  }

  /**
   * Regex Extract
   */
  async regex_extract(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/regex-extract`, body);
  }

  /**
   * Regex Parse
   */
  async regex_parse(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/regex-parse`, body);
  }

  /**
   * Cron Parse
   */
  async cron_parse(params: DevtoolsCron_parseParams): Promise<unknown> {
    return this.client.get(`v1/cron-parse`, params);
  }

  /**
   * Cron Next
   */
  async cron_next(params: DevtoolsCron_nextParams): Promise<unknown> {
    return this.client.get(`v1/cron-next`, params);
  }

  /**
   * Timestamp
   */
  async timestamp(params: DevtoolsTimestampParams): Promise<unknown> {
    return this.client.get(`v1/timestamp`, params);
  }

  /**
   * User Agent
   */
  async user_agent(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/user-agent`, body);
  }

  /**
   * Color Convert
   */
  async color_convert(params: DevtoolsColor_convertParams): Promise<unknown> {
    return this.client.get(`v1/color-convert`, params);
  }

  /**
   * Base Convert
   */
  async base_convert(params: DevtoolsBase_convertParams): Promise<unknown> {
    return this.client.get(`v1/base-convert`, params);
  }

  /**
   * Semver Compare
   */
  async semver_compare(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/semver-compare`, body);
  }

  /**
   * Chmod Calc
   */
  async chmod_calc(params: DevtoolsChmod_calcParams): Promise<unknown> {
    return this.client.get(`v1/chmod-calc`, params);
  }

  /**
   * Env Parse
   */
  async env_parse(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/env-parse`, body);
  }

  /**
   * Diff Text
   */
  async diff_text(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/diff`, body);
  }

  /**
   * Slugify
   */
  async slugify(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/slug`, body);
  }

  /**
   * Word Count
   */
  async word_count(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/word-count`, body);
  }

  /**
   * Sql Format
   */
  async sql_format(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/sql-format`, body);
  }

  /**
   * Text Escape
   */
  async text_escape(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text-escape`, body);
  }

  /**
   * Text Truncate
   */
  async text_truncate(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/text-truncate`, body);
  }

  /**
   * Code Format
   */
  async code_format(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/code-format`, body);
  }

  /**
   * Liquid Render
   */
  async liquid_render(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/liquid-render`, body);
  }

  /**
   * Json Transform
   */
  async json_transform(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/json-transform`, body);
  }

  /**
   * Math Eval
   */
  async math_eval(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/math-eval`, body);
  }

  /**
   * Date Format
   */
  async date_format(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/date-format`, body);
  }

  /**
   * Json Flatten
   */
  async json_flatten(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/json-flatten`, body);
  }

  /**
   * Array Ops
   */
  async array_ops(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/array-ops`, body);
  }

  /**
   * Number Format
   */
  async number_format(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/number-format`, body);
  }

  /**
   * Mock Data
   */
  async mock_data(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/mock-data`, body);
  }

  /**
   * Mock Schema
   */
  async mock_schema(body: Record<string, unknown>): Promise<unknown> {
    return this.client.post(`v1/mock-schema`, body);
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
