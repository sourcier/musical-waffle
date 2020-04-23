import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

jest.mock('emotion-theming', () => {
  return {
    useTheme: () => ({
      treatments: { body: {} },
    }),
  }
})

it('renders without crashing', () => {
  const component = shallow(<App restoreSession={jest.fn()} />)
  expect(component).toMatchSnapshot()
})
