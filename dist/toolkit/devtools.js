"use strict";
// Auto-generated — do not edit manually
// devtools toolkit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Devtools = void 0;
class Devtools {
    client;
    constructor(client) {
        this.client = client;
    }
    /**
     * Json Validate
     */
    async json_validate(body) {
        return this.client.post(`v1/json-validate`, body);
    }
    /**
     * Json Diff
     */
    async json_diff(body) {
        return this.client.post(`v1/json-diff`, body);
    }
    /**
     * Yaml Validate
     */
    async yaml_validate(body) {
        return this.client.post(`v1/yaml-validate`, body);
    }
    /**
     * Xml Validate
     */
    async xml_validate(body) {
        return this.client.post(`v1/xml-validate`, body);
    }
    /**
     * Toml Validate
     */
    async toml_validate(body) {
        return this.client.post(`v1/toml-validate`, body);
    }
    /**
     * Json Schema Validate
     */
    async json_schema_validate(body) {
        return this.client.post(`v1/json-schema-validate`, body);
    }
    /**
     * Jsonpath Query
     */
    async jsonpath_query(body) {
        return this.client.post(`v1/jsonpath`, body);
    }
    /**
     * Json To Schema
     */
    async json_to_schema(body) {
        return this.client.post(`v1/json-to-schema`, body);
    }
    /**
     * Lint and validate CSV data
     */
    async csv_lint(body) {
        return this.client.post(`v1/csv-lint`, body);
    }
    /**
     * Generate Uuid
     */
    async generate_uuid(params) {
        return this.client.get(`v1/uuid`, params);
    }
    /**
     * Password Gen
     */
    async password_gen(params) {
        return this.client.get(`v1/password-gen`, params);
    }
    /**
     * Lorem Ipsum
     */
    async lorem_ipsum(params) {
        return this.client.get(`v1/lorem-ipsum`, params);
    }
    /**
     * Fake Data
     */
    async fake_data(params) {
        return this.client.get(`v1/fake-data`, params);
    }
    /**
     * Regex Test
     */
    async regex_test(body) {
        return this.client.post(`v1/regex-test`, body);
    }
    /**
     * Regex Extract
     */
    async regex_extract(body) {
        return this.client.post(`v1/regex-extract`, body);
    }
    /**
     * Regex Parse
     */
    async regex_parse(body) {
        return this.client.post(`v1/regex-parse`, body);
    }
    /**
     * Cron Parse
     */
    async cron_parse(params) {
        return this.client.get(`v1/cron-parse`, params);
    }
    /**
     * Cron Next
     */
    async cron_next(params) {
        return this.client.get(`v1/cron-next`, params);
    }
    /**
     * Timestamp
     */
    async timestamp(params) {
        return this.client.get(`v1/timestamp`, params);
    }
    /**
     * User Agent
     */
    async user_agent(body) {
        return this.client.post(`v1/user-agent`, body);
    }
    /**
     * Color Convert
     */
    async color_convert(params) {
        return this.client.get(`v1/color-convert`, params);
    }
    /**
     * Base Convert
     */
    async base_convert(params) {
        return this.client.get(`v1/base-convert`, params);
    }
    /**
     * Semver Compare
     */
    async semver_compare(body) {
        return this.client.post(`v1/semver-compare`, body);
    }
    /**
     * Chmod Calc
     */
    async chmod_calc(params) {
        return this.client.get(`v1/chmod-calc`, params);
    }
    /**
     * Env Parse
     */
    async env_parse(body) {
        return this.client.post(`v1/env-parse`, body);
    }
    /**
     * Diff Text
     */
    async diff_text(body) {
        return this.client.post(`v1/diff`, body);
    }
    /**
     * Slugify
     */
    async slugify(body) {
        return this.client.post(`v1/slug`, body);
    }
    /**
     * Word Count
     */
    async word_count(body) {
        return this.client.post(`v1/word-count`, body);
    }
    /**
     * Sql Format
     */
    async sql_format(body) {
        return this.client.post(`v1/sql-format`, body);
    }
    /**
     * Text Escape
     */
    async text_escape(body) {
        return this.client.post(`v1/text-escape`, body);
    }
    /**
     * Text Truncate
     */
    async text_truncate(body) {
        return this.client.post(`v1/text-truncate`, body);
    }
    /**
     * Code Format
     */
    async code_format(body) {
        return this.client.post(`v1/code-format`, body);
    }
    /**
     * Liquid Render
     */
    async liquid_render(body) {
        return this.client.post(`v1/liquid-render`, body);
    }
    /**
     * Json Transform
     */
    async json_transform(body) {
        return this.client.post(`v1/json-transform`, body);
    }
    /**
     * Math Eval
     */
    async math_eval(body) {
        return this.client.post(`v1/math-eval`, body);
    }
    /**
     * Date Format
     */
    async date_format(body) {
        return this.client.post(`v1/date-format`, body);
    }
    /**
     * Json Flatten
     */
    async json_flatten(body) {
        return this.client.post(`v1/json-flatten`, body);
    }
    /**
     * Array Ops
     */
    async array_ops(body) {
        return this.client.post(`v1/array-ops`, body);
    }
    /**
     * Number Format
     */
    async number_format(body) {
        return this.client.post(`v1/number-format`, body);
    }
    /**
     * Mock Data
     */
    async mock_data(body) {
        return this.client.post(`v1/mock-data`, body);
    }
    /**
     * Mock Schema
     */
    async mock_schema(body) {
        return this.client.post(`v1/mock-schema`, body);
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
exports.Devtools = Devtools;
