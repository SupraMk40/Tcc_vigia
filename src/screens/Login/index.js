import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/core';

// Tela de Login simples com validação básica usando useState e useEffect
export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Validação básica: email contém '@' e senha com ao menos 6 caracteres
  useEffect(() => {
    const valid = email.includes('@') && password.trim().length >= 6;
    setIsValid(valid);
    if (error) setError('');
  }, [email, password]);

  // Simula autenticação
  const handleLogin = () => {
    setError('');
    if (!isValid) {
      setError('Preencha email e senha corretamente (senha >= 6 caracteres).');
      return;
    }

    setLoading(true);
    // Simula chamada assíncrona
    setTimeout(() => {
      setLoading(false);

      // Exemplo de credenciais válidas para demo
      if (email === 'user@example.com' && password === 'password') {
        // Redireciona para a página principal (dashboard / Home)
        // Usamos reset para evitar voltar para a tela de login
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      } else {
        // Credenciais inválidas
        setError('Credenciais inválidas. Use user@example.com / password para demo.');
      }
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={[styles.button, !isValid || loading ? styles.buttonDisabled : null]}
        onPress={handleLogin}
        disabled={!isValid || loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Entrar</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, !isValid || loading ? styles.buttonDisabled : null]}
        onPress={handleLogin}
        disabled={!isValid || loading}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Criar Conta</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.link}
        onPress={() => Alert.alert('Esqueci a senha', 'Implementação de recuperação não disponível nesta demo.')}
      >
        <Text style={styles.linkText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}
