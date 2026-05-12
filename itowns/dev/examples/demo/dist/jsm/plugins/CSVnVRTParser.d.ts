export default CSVnVRTParser;
declare namespace CSVnVRTParser {
    function parse(data: {
        csv: string;
        vrt: Document;
    }, options?: geojsonParserOptions): Promise<any>;
}
