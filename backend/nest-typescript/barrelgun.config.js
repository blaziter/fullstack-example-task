const defaultLineTemplate = (file) => `export * from '${file}';`;
const fileTemplate = (files, lineTemplate = defaultLineTemplate) =>
    `${files.map((file) => lineTemplate(file)).join('\n')}`;

/**
 * BarrelGun configuration file
 * @see https://www.npmjs.com/package/barrelgun
 * @type {import("barrelgun").BarrelgunConfig["barrels"]} */
const barrels = [
    {
        path: 'src/auth/index.ts',
        files: ['*.{controller,module,service}.ts'],
        fileTemplate: fileTemplate,
    },
    {
        path: 'src/users/index.ts',
        files: ['*.{controller,module,service}.ts'],
        fileTemplate: fileTemplate,
    },
];

module.exports = { barrels };
