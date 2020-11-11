import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Articles: {
            screens: {
              Articles: 'articles',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
