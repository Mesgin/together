import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListItem from '../ListItem/ListItem'

const PlaceList = (props) => {
  const placesOutput = props.places.map((place,i)=>{
    return <ListItem key={i} placeName={place} />
  })
  return (
    <View style={styles.listContainer}>{placesOutput}</View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: 10
  }
})

export default PlaceList