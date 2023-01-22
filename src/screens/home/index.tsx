import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { MaterialIndicator } from "react-native-indicators";

import { getUserCards } from "api";
import { Screen } from "components";
import { IUserCard } from "type";
import { color } from "theme";

import { FLAT_LIST } from "./style";
import { UserCard } from "./user-card";

export const Home = (): JSX.Element => {

  const [users, setUsers] = useState<IUserCard[]>([]);

  const loadUsers = async () => {
    try {
      const loadedUsers: IUserCard[] = await getUserCards();
      setUsers(loadedUsers);
    } catch (err) {
      Alert.alert(err as string);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Screen>
      {!users.length &&
        <MaterialIndicator
          color={color.primary}
          size={40}
          count={40}
        />
      }
      <FlatList
        ListHeaderComponent={<View style={FLAT_LIST} />}
        data={users}
        renderItem={({ item }) => <UserCard user={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: IUserCard) => item.id.toString()}
      />
    </Screen>
  );
}
