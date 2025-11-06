import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Index() {
  const [nome, setNome] = useState('');

  const mostrarAlerta = () => {
    Alert.alert('Olá!', `Bem-vindo(a), ${nome || 'usuário(a)'}!`);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}> React Native + Expo</Text>

      <Text style={estilos.texto}>Digite seu nome:</Text>
      <TextInput
        style={estilos.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Button title="Cumprimentar" onPress={mostrarAlerta} />

      <TouchableOpacity style={estilos.botao} onPress={() => Alert.alert('Toque!', 'Você tocou no botão!')}>
        <Text style={estilos.textoBotao}>Botão com TouchableOpacity</Text>
      </TouchableOpacity> 
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#0077cc',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rodape: {
    marginTop: 30,
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});
