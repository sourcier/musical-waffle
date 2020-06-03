import merge from 'lodash/merge'

const devConfig = {
  api: {
    posts: {
      name: 'posts',
      endpoint: 'https://api-staging.sourcier.uk',
      region: 'eu-west-2'
    },
    mail: {
      name: 'mail',
      endpoint: 'https://api-staging.sourcier.uk',
      region: 'eu-west-2'
    }
  },
  cognito: {
    region: 'eu-west-2',
    identityPoolId: 'eu-west-2:e119d9c1-f7a8-4a75-a409-368428c49165',
    userPoolId: 'eu-west-2_U6GWHZUwk',
    userPoolWebClientId: '3nmtr2vpa6adlaum9l3g9b8j6n'
  },
  facebook: {
    appId: '318400859146823'
  }
}

const prodConfig = merge({}, devConfig, {
  api: {
    posts: {
      endpoint: 'https://api.sourcier.uk'
    },
    mail: {
      endpoint: 'https://api.sourcier.uk'
    }
  },
  cognito: {
    identityPoolId: 'eu-west-2:5ec7e7c9-08b8-455e-906a-9714383f57d9',
    userPoolId: 'eu-west-2_UIfKjd60G',
    userPoolWebClientId: '6e13a9u18s0spdog9er6jbhrk8'
  }
})

export default process.env.APP_ENV === 'prod' ? prodConfig : devConfig
