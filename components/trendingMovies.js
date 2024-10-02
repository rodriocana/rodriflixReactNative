import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Carousel from 'react-native-snap-carousel';


export default function TrendingMovies(){
  return (
    <View className="mb-8">
      <Text className="text-orange-500 text-xl mx-4 mb-5">TENDENCIA</Text>
      <Carousel data={data} 
      renderItem={({item}) => <MovieCard item={item} />}
      firstItem={1}
      inactiveSlideOpacity={0.60}
      sliderWidth={600}
      itemWidth={400}
      slideStyle={{display: 'flex', alignment:'center'}}/>
    </View>
  );
};


const MovieCard = ({item}) => {
return (

  <TouchableWithoutFeedback>
    <Text className="text-white">Movie</Text>
  </TouchableWithoutFeedback>
)

}