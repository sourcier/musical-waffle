# Musical Waffle ![Build status](https://travis-ci.com/sourcier/musical-waffle.svg?branch=develop)

## Links

- [Production](https://sourcier.uk)
- [Staging](https://d1jdni2enio11g.cloudfront.net)

## Toolchain

### [Yarn](http://yarnpkg.com)

```bash
npm install --global yarn
```

### [Lerna](https://lerna.js.org)

```bash
yarn global add lerna
```

### [Serverless](https://www.serverless.com)

```bash
yarn global add lerna
```

## Contributing

Ensure the below required environment variable/s are available using [direnv](https://direnv.net/) or another method:

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```
Then run

```bash
$ lerna bootstrap
$ yarn workspace web start
```

The dev server is then accessible via ```http://localhost:8080```

## Deployment

Merged changes are automatically deployed via [Travis CI](https://travis-ci.com/sourcier/musical-waffle).

### Manual Deployment

Create stack:

```bash
$ sls deploy
```

Destroy stack:

```bash
$ sls remove
```
