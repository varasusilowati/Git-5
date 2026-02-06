const schema_createnewuser = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "job": { "type": "string" },
    "id": { "type": "string" },
    "createdAt": { "type": "string" }
  },
  "required": ["name", "job", "id", "createdAt"]
};

const schema_getsingleuser = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["data"],
  "properties": {
    "data": {
      "type": "object",
      "required": ["id", "email", "first_name", "last_name", "avatar"],
      "properties": {
        "id": { "type": "number" },
        "email": { "type": "string" },
        "first_name": { "type": "string" },
        "last_name": { "type": "string" },
        "avatar": { "type": "string" }
      }
    }
  }
};

export {
  schema_createnewuser,
  schema_getsingleuser
};
