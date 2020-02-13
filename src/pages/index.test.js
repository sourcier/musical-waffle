import React from 'react'
import { shallow } from 'enzyme'
import App from './index'

it('renders without crashing', () => {
    const component = shallow(<App restoreSession={jest.fn()} />)
    expect(component).toMatchSnapshot()
})
