import React from 'react'
import {App} from '@presentation/App'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', async () => {
  renderer.create(<App />)
})
