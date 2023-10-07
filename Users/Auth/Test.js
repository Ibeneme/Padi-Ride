import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Test = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text onPress={()=>navigation.navigate('omo')}>Test</Text>
    </View>
  )
}

export default Test