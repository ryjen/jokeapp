module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@app': './src/app/',
          '@store': './src/data/store',
          '@types': './src/domain/types',
          '@components': './src/ui/components',
          '@screens': './src/ui/screens',
          '@usecases': './src/domain/usecases',
        },
      },
    ],
  ],
}
