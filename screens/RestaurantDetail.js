import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
  {
      title: 'Lasagna',
      description: "With Butter lettuce",
      price: "$13.5",
      image: 
      "https://media.istockphoto.com/photos/restaurant-plates-picture-id104704117?b=1&k=20&m=104704117&s=170667a&w=0&h=ey87ESdQq9Gv0r_hmTuVLpF9H1hb0S3xcOBVOSWcZiw="
  },
  {
      title: 'Tandoori Chicken',
      description: "With Butter lettuce",
      price: "$19.5",
      image: 
      "http://orsimages.unileversolutions.com/ORS_Images/Knorr_en-LK/Quick-Tandoori-chicken_43_1.1.61_326X580.Jpeg"
  },
  {
    title: 'Lasagna2',
    description: "With Butter lettuce",
    price: "$13.5",
    image: 
    "https://media.istockphoto.com/photos/restaurant-plates-picture-id104704117?b=1&k=20&m=104704117&s=170667a&w=0&h=ey87ESdQq9Gv0r_hmTuVLpF9H1hb0S3xcOBVOSWcZiw="
},
{
    title: 'Tandoori Chicken2',
    description: "With Butter lettuce",
    price: "$19.5",
    image: 
    "http://orsimages.unileversolutions.com/ORS_Images/Knorr_en-LK/Quick-Tandoori-chicken_43_1.1.61_326X580.Jpeg"
},

];


export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{
      backgroundColor: "#FEF4F4"
  }}>
      <View>
        <About route={route} />
        <Divider width={1.8} style={{marginVertical: 10}} />
        <MenuItem restaurantName={route.params.name} foods={foods} />
        <ViewCart navigation={navigation} />
      </View>
    </View>

  );
}
