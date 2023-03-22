import React from 'react'
import { Image } from 'react-native'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={iconUrl} resizeMode='cover'
      style={{width: dimension, height: dimension}}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn