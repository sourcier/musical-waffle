# Musical Waffle ![Build status](https://travis-ci.com/sourcier/musical-waffle.svg?branch=develop)

## Links

- [Production](https://sourcier.uk)
- [Staging](https://d1jdni2enio11g.cloudfront.net)

## Toolchain

* [Lerna](https://lerna.js.org)
* [Serverless](https://www.serverless.com)
* [Yarn](http://yarnpkg.com)

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
