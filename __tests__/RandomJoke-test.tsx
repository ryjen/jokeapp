import React from 'react'
import renderer from 'react-test-renderer'
import {RandomJokeScreen} from '@presentation/screens'
import {TestApp} from './TestApp'

test('renders correctly', () => {
  const tree = renderer
    .create(
      <TestApp>
        <RandomJokeScreen />
      </TestApp>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
