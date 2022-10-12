import React, {ReactNode} from 'react'

interface Props {
  children: ReactNode
}

export const AppLayout = (props: Props) => <>{props.children}</>
