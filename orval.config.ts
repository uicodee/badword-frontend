module.exports = {
    main: {
        input: "./src/shared/api/schema.json",
        output: {
            mode: "tags-split",
            target: "./src/shared/api/generated.ts",
            prettier: true,
            override: {
                mutator: {
                    path: "./src/shared/api/http/index.ts",
                    name: "createInstance",
                }
            },
            schemas: "./src/shared/api/model",
            client: "react-query",
            baseUrl: "https://api.badword.uz/",
        },
    },
};
