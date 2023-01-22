import { Collapse } from "components";
import { memo } from "react";
import { Text, View } from "react-native";
import { IUserCard } from "type";

import { InfoItem } from "./info-item";
import { CONTAINER, INFO_BLOCK, NAME, LABEL, WRAPPER } from "./style";

interface IProps {
  user: IUserCard
};

export const UserCard = memo(({ user }: IProps): JSX.Element => {
  const {
    id,
    name,
    address: {
      city,
      ...restOfAddress
    },
    company: {
      name: companyName,
      ...restOfCompany
    },
    ...restOfUser
  } = user;

  const address = { ...restOfAddress, geo: `${restOfAddress.geo.lat}, ${restOfAddress.geo.lng}` };

  return (
    <View style={CONTAINER}>
      <Text style={NAME}>{name}</Text>
      <View style={INFO_BLOCK}>
        <InfoItem items={restOfUser} />
        <View style={WRAPPER}>
          <Text style={LABEL}>address:</Text>
          <Collapse title={city}>
            <InfoItem items={address} />
          </Collapse>
        </View>
        <View style={WRAPPER}>
          <Text style={LABEL}>company:</Text>
          <Collapse title={companyName}>
            <InfoItem items={restOfCompany} />
          </Collapse>
        </View>
      </View>
    </View>
  );
});

