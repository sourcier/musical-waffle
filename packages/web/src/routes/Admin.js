import React from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify'

import { Meta } from '../components/Meta'

Amplify.configure({})

export const Admin = () => (
  <React.Fragment>
    <Meta />
  </React.Fragment>
)

export default withAuthenticator(Admin)
