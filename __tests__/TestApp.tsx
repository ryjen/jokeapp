import React, {ReactNode} from 'react'
import {container} from '@application/di'
import {ContainerProvider} from '@jishida/react-awilix'
import {Provider as ReduxProvider} from 'react-redux'
import {store} from '@application/store'
import {NativeBaseProvider} from 'native-base'
import '@domain/i18n'

export const TestApp = ({children}: {children: ReactNode}) => (
  <ReduxProvider store={store}>
    <ContainerProvider container={container}>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </ContainerProvider>
  </ReduxProvider>
)
