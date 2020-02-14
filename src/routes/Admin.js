import React from 'react'
import { withAuthenticator } from 'aws-amplify-react'
import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'

import { Meta } from '../components/Meta'

Amplify.configure(awsconfig)

export const Admin = () => (
    <React.Fragment>
        <Meta />
    </React.Fragment>
)

export default withAuthenticator(Admin)
