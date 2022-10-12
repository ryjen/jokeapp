module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@store': './src/store',
          '@types': './src/types',
          '@components': './src/components',
          '@screens': './src/screens',
        },
      },
    ],
  ],
}
