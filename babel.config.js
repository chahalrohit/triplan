module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components/',
          modules: './src/modules/',
          redux: './src/redux/',
          translations: './src/translations/',
          hooks: './src/hooks/',
          contexts: './src/contexts/',
          styles: './src/styles/',
          images: './src/images/',
          screens: './src/screens/',
          config: './src/config/',
          nav: './scr/nav/',
          ultis: './src/utils/',
          svgs: './src/svgs/',
          types: './src/types/',
          libs: './src/libs/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
