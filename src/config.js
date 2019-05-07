const FeedsURLs = {
  NBA:
    'https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json',
  MLB:
    'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json',
};

export default {
  development: {
    PORT: 8080,
    MONGODB_URL: 'mongodb://localhost/BarstoolSportsChallenge_dev',
  },
  production: {
    PORT: 8080,
    MONGODB_URL: 'mongodb://localhost/BarstoolSportsChallenge_prod',
  },
  test: {
    PORT: 8080,
    MONGODB_URL: 'mongodb://localhost/BarstoolSportsChallenge_test',
  },
};

export { FeedsURLs };
