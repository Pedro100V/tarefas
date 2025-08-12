import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Checkbox({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.caixa}>
      {checked && <View style={styles.marcado} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  caixa: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  marcado: {
    width: 12,
    height: 12,
    backgroundColor: '#1aff22ff',
  },
});
