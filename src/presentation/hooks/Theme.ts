import {useColorModeValue, useTheme} from 'native-base'

export const useAppTheme = () => {
  const {colors} = useTheme()
  return {
    appBar: {
      bg: useColorModeValue(colors.blueGray['200'], colors.blueGray['700']),
      fg: useColorModeValue(colors.light['800'], colors.light['100']),
    },
    icons: {
      actions: useColorModeValue(colors.emerald['700'], colors.emerald['100']),
    },
  }
}
