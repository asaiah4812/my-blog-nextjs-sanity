import schemas from '@/sanity/schemas';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: "scqqxjuh",
    dataset: "production",
    title: "My Person Website",
    apiVersion: "2024-08-05",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}
})

export default config