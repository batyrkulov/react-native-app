import { ViewStyle } from 'react-native'

const BASE_CONTAINER: ViewStyle = {
  width: '90%',
  backgroundColor: 'white',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '25%',
  borderRadius: 4,
  paddingHorizontal: 16,
  paddingVertical: 32,
}

const BASE_OVERLAY: ViewStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}

const BASE_CROSS_CONTAINER: ViewStyle = {
  position: 'absolute',
  top: 12,
  right: 12,
}

export const containerPresets: { primary: ViewStyle } = {
  primary: { ...BASE_CONTAINER },
}

export const overlayPresets: { primary: ViewStyle } = {
  primary: {
    ...BASE_OVERLAY,
  },
}

export const crossContainerPresets: { primary: ViewStyle } = {
  primary: {
    ...BASE_CROSS_CONTAINER,
  },
}

export type ModalPresetNames = keyof typeof containerPresets
