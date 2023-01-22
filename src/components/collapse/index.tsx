
import { mergeAll, flatten } from "ramda";
import { Collapse as CollapseLib, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Text, View } from "react-native";
import { memo } from "react";

import { containerPresets, titlePresets } from "./collapse.presets";
import { ICollapseProps } from "./collapse.props";

export const Collapse = memo(({
  title,
  children,
  style: styleOverride,
  preset = 'primary',
}: ICollapseProps): JSX.Element => {

  const style = mergeAll(
    flatten([
      containerPresets[preset] || containerPresets.primary,
      styleOverride,
    ]),
  );
  const titleStyle = mergeAll(
    flatten([titlePresets[preset] || titlePresets.primary]),
  );

  return (
    <View style={style}>
      <CollapseLib>
        <CollapseHeader>
          <Text style={titleStyle}>{title}</Text>
        </CollapseHeader>
        <CollapseBody>
          {children}
        </CollapseBody>
      </CollapseLib>
    </View>
  )
})
