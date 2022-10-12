import React from 'react'
import {useColorMode, Switch, HStack, Text} from 'native-base'

// Color Switch Component
export const ToggleDarkMode = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <HStack space={2} alignItems="center">
      <Text>Shadowize</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Enlighten</Text>
    </HStack>
  )
}
