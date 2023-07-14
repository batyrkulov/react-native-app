import { ViewStyle, ModalProps as RNModalProps } from 'react-native'
import { ModalPresetNames } from './modal.presets'

export interface ModalProps extends RNModalProps {
  children?: React.ReactNode
  animationType?: 'none' | 'fade' | 'slide'
  toggleModal: () => void
  visible: boolean
  crossContainer?: ViewStyle | ViewStyle[]
  crossColor?: string
  crossSize?: number
  styleContainer?: ViewStyle | ViewStyle[]
  preset?: ModalPresetNames
}
