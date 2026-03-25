import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
 
export default function App() {
  const testarAlerta = () => {
    Alert.alert(
      'Funcionou!',         // título
      'O projeto está pronto para começar.',  // mensagem
      [{ text: 'OK' }]      // botões
    );
  };
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>PostBoard</Text>
      <Text style={styles.subtitulo}>Módulo 1 — Ambiente pronto!</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={testarAlerta}
      >
        <Text style={styles.textoBotao}>Testar alerta</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a56db',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#1a56db',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
