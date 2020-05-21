import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Meta = ({ title }) => (
  <Helmet>
    <title>{title ? `${title} - ` : ''}Sourcier</title>
  </Helmet>
)
