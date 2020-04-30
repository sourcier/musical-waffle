import API from '@aws-amplify/api'
import Auth from '@aws-amplify/auth'
import config from './config'

Auth.configure({
  identityPoolId: config.cognito.identityPoolId,
  region: config.cognito.region,
  userPoolId: config.cognito.userPoolId,
  userPoolWebClientId: config.cognito.userPoolWebClientId,
  mandatorySignIn: false,
})

API.configure({
  endpoints: [
    {
      name: config.api.posts.name,
      endpoint: config.api.posts.endpoint,
      region: config.api.posts.region,
    },
  ],
})

export { API }
