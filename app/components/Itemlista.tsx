import React from 'react';
import { View, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';
import Label from './Label';

export default function ItemLista({
  texto,
  concluido,
  onToggle,
}: {
  texto: string;
  concluido: boolean;
  onToggle: () => void;
}) {
  return (
    <View style={styles.item}>
      <Checkbox checked={concluido} onToggle={onToggle} />
      <Label>{texto}</Label>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
});
