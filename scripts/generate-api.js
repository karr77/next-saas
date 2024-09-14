// scripts/generate-api.js
const { generate } = require('openapi-typescript-codegen');
const path = require('path');
const fs = require('fs');

async function generateApi() {
    const openapiPath = process.env.OPENAPI_PATH || '../openapi/passport.openapi.json';
    const fullPath = path.resolve(__dirname, openapiPath);
    const outputPath = path.resolve(__dirname, '../src/api');

    console.log(`Attempting to read OpenAPI spec from: ${fullPath}`);

    if (!fs.existsSync(fullPath)) {
        console.error(`Error: File not found at ${fullPath}`);
        process.exit(1);
    }

    try {
        await generate({
            input: fullPath,
            output: outputPath,
            httpClient: 'fetch',
            exportCore: true,
            exportServices: true,
            exportModels: true,
            exportSchemas: true,
            useUnionTypes: true,
        });

        console.log('API client generated successfully');

        // 合并所有生成的类型到一个文件
        const typesContent = fs.readdirSync(outputPath)
            .filter(file => file.endsWith('.ts') && !file.includes('.d.ts'))
            .map(file => fs.readFileSync(path.join(outputPath, file), 'utf8'))
            .join('\n\n');

        // 提取所有类型定义
        const typeDefinitions = typesContent.match(/export (type|interface|enum) [^{]+{[^}]+}/g) || [];

        // 创建 typing.d.ts 文件
        const typingContent = `declare namespace API {\n${typeDefinitions.join('\n\n')}\n}`;
        fs.writeFileSync(path.join(outputPath, 'typing.d.ts'), typingContent);

        console.log('Type definitions generated successfully');
    } catch (err) {
        console.error('Error generating API client:', err);
        process.exit(1);
    }
}

generateApi();