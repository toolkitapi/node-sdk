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
export declare class Devtools {
    private client;
    constructor(client: HttpClient);
    /**
     * Json Validate
     */
    json_validate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Json Diff
     */
    json_diff(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Yaml Validate
     */
    yaml_validate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Xml Validate
     */
    xml_validate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Toml Validate
     */
    toml_validate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Json Schema Validate
     */
    json_schema_validate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Jsonpath Query
     */
    jsonpath_query(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Json To Schema
     */
    json_to_schema(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Lint and validate CSV data
     */
    csv_lint(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Generate Uuid
     */
    generate_uuid(params: DevtoolsGenerate_uuidParams): Promise<unknown>;
    /**
     * Password Gen
     */
    password_gen(params: DevtoolsPassword_genParams): Promise<unknown>;
    /**
     * Lorem Ipsum
     */
    lorem_ipsum(params: DevtoolsLorem_ipsumParams): Promise<unknown>;
    /**
     * Fake Data
     */
    fake_data(params: DevtoolsFake_dataParams): Promise<unknown>;
    /**
     * Regex Test
     */
    regex_test(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Regex Extract
     */
    regex_extract(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Regex Parse
     */
    regex_parse(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Cron Parse
     */
    cron_parse(params: DevtoolsCron_parseParams): Promise<unknown>;
    /**
     * Cron Next
     */
    cron_next(params: DevtoolsCron_nextParams): Promise<unknown>;
    /**
     * Timestamp
     */
    timestamp(params: DevtoolsTimestampParams): Promise<unknown>;
    /**
     * User Agent
     */
    user_agent(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Color Convert
     */
    color_convert(params: DevtoolsColor_convertParams): Promise<unknown>;
    /**
     * Base Convert
     */
    base_convert(params: DevtoolsBase_convertParams): Promise<unknown>;
    /**
     * Semver Compare
     */
    semver_compare(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Chmod Calc
     */
    chmod_calc(params: DevtoolsChmod_calcParams): Promise<unknown>;
    /**
     * Env Parse
     */
    env_parse(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Diff Text
     */
    diff_text(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Slugify
     */
    slugify(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Word Count
     */
    word_count(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Sql Format
     */
    sql_format(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Text Escape
     */
    text_escape(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Text Truncate
     */
    text_truncate(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Code Format
     */
    code_format(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Liquid Render
     */
    liquid_render(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Json Transform
     */
    json_transform(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Math Eval
     */
    math_eval(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Date Format
     */
    date_format(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Json Flatten
     */
    json_flatten(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Array Ops
     */
    array_ops(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Number Format
     */
    number_format(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Mock Data
     */
    mock_data(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Mock Schema
     */
    mock_schema(body: Record<string, unknown>): Promise<unknown>;
    /**
     * Root
     */
    root__get(): Promise<unknown>;
    /**
     * Status
     */
    status(): Promise<unknown>;
}
