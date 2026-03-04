import responseSchema from "../../contracts/resolver/draft.response.v1.schema.json";
import { compileSchema } from "./schemaValidator";

const validate = compileSchema(responseSchema);

export function validateDraftResponse(payload: unknown) {
  const valid = validate(payload);

  if (!valid) {
    throw new Error(
      `Resolver produced invalid draft response: ${JSON.stringify(validate.errors)}`
    );
  }

  return payload;
}
