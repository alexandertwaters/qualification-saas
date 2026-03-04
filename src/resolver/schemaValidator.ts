import Ajv from "ajv/dist/2020";
import addFormats from "ajv-formats";

const ajv = new Ajv({
  allErrors: true,
  strict: true,
  allowUnionTypes: false
});

addFormats(ajv);

export function compileSchema(schema: object) {
  return ajv.compile(schema);
}
