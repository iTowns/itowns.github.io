export default TIFFParser;
declare namespace TIFFParser {
    function parse(data: ArrayBuffer, options: Object): Promise<any>;
}
