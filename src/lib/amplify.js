import Amplify from 'aws-amplify'
import API, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import config from '../aws-exports'

Amplify.configure(config)

export const AUTH_MODE = GRAPHQL_AUTH_MODE
export default API
