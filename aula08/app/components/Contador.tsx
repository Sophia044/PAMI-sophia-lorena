import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{contador}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={incrementar}>
          <Text style={styles.textoBotao}>Aumentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao2} onPress={decrementar}>
          <Text style={styles.textoBotao}>Diminuir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  texto: {
    fontSize: 40,
    marginBottom: 30,
  },
  botoes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  botao: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
  },
  botao2: {
    backgroundColor: "#FF5252",
    padding: 15,
    borderRadius: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
  },
});
