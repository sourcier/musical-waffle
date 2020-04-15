import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Navigation } from '../Navigation'
import styles from './styles'
import withStyles from '../../../lib/with-styles'

export const Component = ({ styles }) => (
  <footer>
    <div className="py-4 border-top" css={styles.footer}>
      <Row>
        <Col xs={12} sm={6} className="mb-4">
          <p>
            <strong>USEFUL LINKS</strong>
          </p>
          <Navigation vertical />
        </Col>
        <Col xs="12" sm={6}>
          <p>
            <strong>CONTACT US</strong>
          </p>
          <p>
            Sourcier Ltd. <br />
            86-90 Paul Street <br />
            London
            <br />
            United Kingdom <br />
            <strong>Email:</strong>{' '}
            <a href="mailto:info@soucier.uk">info@soucier.uk</a>
            <br />
          </p>
        </Col>
      </Row>
    </div>
    <div css={styles.footerCopyright}>
      <p>
        &copy; Copyright Sourcier Ltd. All Rights Reserved Sourcier Ltd. is
        registered in England and Wales company number 8086280
      </p>
      <p>
        <a href="#root">Back to top</a>
      </p>
    </div>
  </footer>
)

export const Footer = withStyles(styles)(Component)
