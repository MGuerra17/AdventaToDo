import React from 'react';
import {Image, Text, View} from 'react-native';
import {headerStyles} from './headerStyles';

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.mainContentContainer}>
        <View style={headerStyles.textContainer}>
          <Text style={headerStyles.dateText}>
            {new Date().toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          <Text style={headerStyles.titleText}>{title}</Text>
        </View>
        <Image
          style={headerStyles.logo}
          source={require('../../../assets/images/logo-adventa.png')}
        />
      </View>
      <View style={headerStyles.decorationCircle} />
    </View>
  );
}
