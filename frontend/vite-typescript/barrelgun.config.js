const defaultLineTemplate = (file) => `export * from '${file}';`;
const fileTemplate = (files, lineTemplate = defaultLineTemplate) =>
    `${files.map((file) => lineTemplate(file)).join('\n')}`;

/**
 * BarrelGun configuration file
 * @see https://www.npmjs.com/package/barrelgun
 * @type {import("barrelgun").BarrelgunConfig["barrels"]} */
const barrels = [
    {
        path: 'src/components/index.ts',
        files: ['*.{ts,tsx}'],
        fileTemplate: fileTemplate,
    },
    {
        path: 'src/components/ui/index.ts',
        files: ['*.{ts,tsx}'],
        fileTemplate: fileTemplate,
    },
    {
        path: 'src/lib/index.ts',
        files: ['*.{ts,tsx}'],
        fileTemplate: fileTemplate,
    },
    {
        path: 'src/lib/utils/index.ts',
        files: ['*.{ts,tsx}'],
        fileTemplate: fileTemplate,
    },
];

export default { barrels };
