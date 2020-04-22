import Amplify, { API } from 'aws-amplify'
import config from './config'

Amplify.configure({
  Auth: {
    identityPoolId: config.cognito.identityPoolId,
    region: config.cognito.region,
    userPoolId: config.cognito.userPoolId,
    userPoolWebClientId: config.cognito.userPoolWebClientId,
    mandatorySignIn: false,
  },
  API: {
    endpoints: [
      {
        name: config.api.posts.name,
        endpoint: config.api.posts.endpoint,
        region: config.api.posts.region,
      },
    ],
  },
})

export default API
