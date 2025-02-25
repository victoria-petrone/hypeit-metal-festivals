import { defineConfig } from '@openapi-codegen/cli';
import {
  generateReactQueryComponents,
  generateSchemaTypes,
} from '@openapi-codegen/typescript';

export default defineConfig({
  api: {
    from: {
      source: 'url',
      // TODO: Update the URL to your OpenAPI schema
      url: 'http://127.0.0.1:3658/export/openapi/5?version=3.0',
    },
    outputDir: './src/api/generated',
    to: async (context) => {
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix: 'api',
      });
      await generateReactQueryComponents(context, {
        filenamePrefix: 'api',
        schemasFiles,
      });
    },
  },
  server: {
    from: {
      source: 'url',
      // TODO: Update the URL to your OpenAPI schema
      url: 'http://127.0.0.1:3658/export/openapi/5?version=3.0',
    },
    outputDir: './server/generated',
    to: async (context) => {
      await generateSchemaTypes(context, {
        filenamePrefix: 'api',
      });
    },
  },
});
