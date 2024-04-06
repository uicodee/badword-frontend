module.exports = {
  main: {
    input: "./src/shared/api/schema.yaml",
    output: {
      mode: "tags-split",
      target: "./src/shared/api/generated.ts",
      schemas: "./src/shared/api/model",
      client: "react-query",
      baseUrl: "http://localhost:3000/",
    },
  },
};
