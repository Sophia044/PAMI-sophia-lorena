import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';

export default function Index() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const mostrarMensagem = (texto) => {
    if (Platform.OS === 'web') {
      setMensagem(texto);
      setTimeout(() => setMensagem(''), 3000);
    } else {
      Alert.alert('Mensagem', texto);
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>👋 React Native + Expo</Text>

      <Text style={estilos.texto}>Digite seu nome:</Text>

      <TextInput
        style={estilos.input}
        placeholder="Ex: Sophia"
        value={nome}
        onChangeText={setNome}
        placeholderTextColor="#aaa"
      />

      <View style={estilos.areaBotoes}>
        <Button
          title="Cumprimentar"
          color="#0077cc"
          onPress={() => mostrarMensagem(`Bem-vindo(a), ${nome || 'usuário(a)'}!`)}
        />

        <TouchableOpacity
          style={estilos.botao}
          onPress={() => mostrarMensagem('Você tocou no botão TouchableOpacity!')}
        >
          <Text style={estilos.textoBotao}>Botão com TouchableOpacity</Text>
        </TouchableOpacity>
      </View>

      {mensagem ? <Text style={estilos.mensagem}>{mensagem}</Text> : null}

      <Text style={estilos.rodape}>Desenvolvido com ❤️ usando Expo</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f1fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#004a99',
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#aac4e0',
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 16,
  },
  areaBotoes: {
    width: '85%',
    alignItems: 'center',
    gap: 12,
  },
  botao: {
    backgroundColor: '#005fa3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  mensagem: {
    marginTop: 25,
    color: '#004a99',
    fontSize: 16,
    textAlign: 'center',
  },
  rodape: {
    marginTop: 40,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
