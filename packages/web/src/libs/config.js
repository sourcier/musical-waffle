const devConfig = {
  api: {
    posts: {
      name: 'posts',
      endpoint: 'https://m25gl9uodb.execute-api.eu-west-2.amazonaws.com/dev',
      region: 'eu-west-2',
    },
    mail: {
      name: 'mail',
      endpoint: 'https://7ikidzu3j6.execute-api.eu-west-2.amazonaws.com/dev',
      region: 'eu-west-2',
    },
  },
  cognito: {
    region: 'eu-west-2',
    identityPoolId: 'eu-west-2:e119d9c1-f7a8-4a75-a409-368428c49165',
    userPoolId: 'eu-west-2_U6GWHZUwk',
    userPoolWebClientId: '3nmtr2vpa6adlaum9l3g9b8j6n',
  },
  facebook: {
    appId: process.env.FACEBOOK_APP_ID,
  },
}

const prodConfig = {
  api: {
    posts: {
      name: 'posts',
      endpoint: 'https://9p7igfrsfk.execute-api.eu-west-2.amazonaws.com/prod',
      region: 'eu-west-2',
    },
    mail: {
      name: 'mail',
      endpoint: 'https://7q9qe3mkcg.execute-api.eu-west-2.amazonaws.com/prod',
      region: 'eu-west-2',
    },
  },
  cognito: {
    region: 'eu-west-2',
    identityPoolId: 'eu-west-2:5ec7e7c9-08b8-455e-906a-9714383f57d9',
  },
  facebook: {
    appId: process.env.FACEBOOK_APP_ID,
  },
}

export default process.env.APP_ENV === 'prod' ? prodConfig : devConfig
