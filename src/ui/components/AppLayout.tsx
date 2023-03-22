import React, {ReactNode} from 'react'
import {Flex} from 'native-base'

interface Props {
  children: ReactNode
}

export const AppLayout = (props: Props) => (
  <Flex _dark={{bg: 'coolGray.800'}} _light={{bg: 'warmGray.50'}} height="100%">
    {props.children}
  </Flex>
)
