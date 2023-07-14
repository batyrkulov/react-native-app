module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
          assets: './assets',
          src: './src',
          components: './src/components',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          theme: './src/theme',
          type: './src/type',
          api: './src/api',
        },
      },
    ],
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }],
    'react-native-reanimated/plugin',
  ],
};
