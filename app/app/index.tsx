import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Titulo from '../components/Titulo';
import InputTexto from '../components/InputTexto';
import Botao from '../components/Botao';
import ItemLista from '../components/Itemlista';


export default function Index() {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState<{ texto: string; concluido: boolean }[]>([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setLista([...lista, { texto: tarefa, concluido: false }]);
      setTarefa('');
    }
  };

  const alternarTarefa = (index: number) => {
    const novaLista = [...lista];
    novaLista[index].concluido = !novaLista[index].concluido;
    setLista(novaLista);
  };

  return (
    <View style={styles.container}>
      <Titulo>Lista de Tarefas</Titulo>
      <InputTexto value={tarefa} onChangeText={setTarefa} />
      <Botao titulo="Adicionar" onPress={adicionarTarefa} />
      <FlatList
        data={lista}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <ItemLista
            texto={item.texto}
            concluido={item.concluido}
            onToggle={() => alternarTarefa(index)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'white',
  },
});
