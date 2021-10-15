import React, { ReactNode } from 'react'
import {
  useColorMode,
  Switch,
  HStack,
  Text,
  Flex,
  Heading,
  Spacer,
  Container,
} from 'native-base'

// Color Switch Component
const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
  );
}

interface Props {
  children: ReactNode
}

export const AppLayout = (props: Props) => <>{props.children}</>;
