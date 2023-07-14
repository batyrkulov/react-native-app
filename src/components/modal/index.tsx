import * as React from 'react'
import {
  View,
  Modal as RNModal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ModalProps as RNModalProps,
  Text,
} from 'react-native'
import { mergeAll, flatten } from 'ramda'

import {
  containerPresets,
  overlayPresets,
  crossContainerPresets,
} from './modal.presets'
import { ModalProps } from './modal.props'

export function Modal(props: ModalProps & RNModalProps): JSX.Element {
  const {
    preset = 'primary',
    children,
    toggleModal,
    visible,
    styleContainer,
    crossContainer,
    crossColor,
    crossSize,
    animationType = 'fade',
  } = props

  const containerStyle = mergeAll(
    flatten([
      containerPresets[preset] || containerPresets.primary,
      styleContainer,
    ]),
  )
  const overlayStyle = mergeAll(
    flatten([overlayPresets[preset] || overlayPresets.primary]),
  )
  const crossContainerStyle = mergeAll(
    flatten([
      crossContainerPresets[preset] || crossContainerPresets.primary,
      crossContainer,
    ]),
  )

  return (
    <RNModal animationType={animationType} transparent visible={visible}>
      <TouchableWithoutFeedback onPress={() => toggleModal(false)}>
        <View style={overlayStyle} />
      </TouchableWithoutFeedback>
      <View style={containerStyle}>
        <TouchableOpacity
          style={crossContainerStyle}
          onPress={() => toggleModal(false)}
        >
          <Text>Close</Text>
        </TouchableOpacity>
        {children}
      </View>
    </RNModal>
  )
}
