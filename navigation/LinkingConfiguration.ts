import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          News: {
            screens: {
              NewsScreen: 'one',
            },
          },
          Articles: {
            screens: {
              ArticlesScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
