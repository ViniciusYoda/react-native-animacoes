import React, { useEffect, useRef } from 'react';
import { View, FlatList, Image } from 'react-native';
import styles from './styles';

export function Carrossel({ data }){
   const carrosselRef = useRef();

   useEffect(() => {
      
   })

   carrosselRef.current.scrollToIndex({ index: 0 })

   return(
      <View style={styles.container}>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Image
                  source={item.imagem}
                  style={styles.image}
                  resizeMode="contain"
                />
              )}
              ref={carrosselRef}
            />
      </View>
   )
}