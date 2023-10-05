module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@application': './src/application',
          '@domain': './src/domain',
          '@presentation': './src/presentation',
          '@infrastructure': './src/infrastructure',
        },
      },
    ],
  ],
}
