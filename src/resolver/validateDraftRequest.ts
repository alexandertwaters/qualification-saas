import requestSchema from "../../contracts/resolver/draft.request.v1.schema.json";
import { compileSchema } from "./schemaValidator";

const validate = compileSchema(requestSchema);

export function validateDraftRequest(payload: unknown) {
  const valid = validate(payload);

  if (!valid) {
    throw new Error(
      `Invalid resolver draft request: ${JSON.stringify(validate.errors)}`
    );
  }

  return payload;
}
