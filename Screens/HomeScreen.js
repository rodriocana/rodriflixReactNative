
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';
import { useState } from 'react';


export default function HomeScreen() {
  const [trending,setTrending] = useState([1,2,3])
  return (
    <View className="flex-1 bg-slate-900">
      {/*barra de busqueda y logo*/}
      <SafeAreaView className="-mb-3">
        <StatusBar style="light"/>
        <View className="flex-row justify-between items-center mx-4">
          <Bars3CenterLeftIcon size="30" strokewidth={2} color="white" />
          <Text className="text-white text-3xl font-bold"><Text className="text-orange-500 text-3xl font-bold">P</Text>elículas</Text>
          <MagnifyingGlassIcon size='30' strokeWidth={2} color="white" />
        </View>
    </SafeAreaView>
   <ScrollView showsVerticalScrollIndicator={false}
   contentContainerStyle={{paddingBottom: 10}}>
    {/*Trending movies carousel*/}
    <TrendingMovies data={trending}/>
    
    </ScrollView>

    
    </View>
    
  );
}