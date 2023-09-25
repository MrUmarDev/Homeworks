"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("./pipe/validation-pipe");
const start = async () => {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        let port = process.env.port || 4000;
        app.useGlobalPipes(new validation_pipe_1.MyValidationPipe());
        app.setGlobalPrefix("api");
        const config = new swagger_1.DocumentBuilder()
            .setTitle("User-Role Project")
            .setDescription("REST API")
            .setVersion("1.0.0")
            .addTag("NestJS, PostgreSQL, Sequelize")
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup("/api/docs", app, document);
        await app.listen(port, () => {
            console.log("Server listening on port:" + port);
        });
    }
    catch (error) {
        console.log(error.message);
    }
};
start();
//# sourceMappingURL=main.js.map