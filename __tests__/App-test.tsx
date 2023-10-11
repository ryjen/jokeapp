import React from 'react'
import {App} from '@presentation/App'

import renderer from 'react-test-renderer'

it('renders correctly', async () => {
  renderer.create(<App />)
})
