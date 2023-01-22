import { memo } from "react";
import { Text, View } from "react-native";

import { FLEX, OPTION, OPTION_LABEL, CONTAINER } from "./style";

interface IProps {
  items: object
};

export const InfoItem = memo(({ items }: IProps): JSX.Element => {

  return (<>
    {Object.entries(items).map(item => (
      <View style={CONTAINER} key={item[1]}>
        <Text style={OPTION_LABEL}>{item[0]}: </Text><Text style={[OPTION, FLEX(1)]}>{item[1]}</Text>
      </View>
    ))}
  </>
  );
});

