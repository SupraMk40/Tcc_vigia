import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import api from '../../../services/api';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

// usa um api compartilhado (axios) assim como outras telas (ex: Perfil)

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const valid = email.includes('@') && password.trim().length >= 6;
    setIsValid(valid);
    if (error) setError('');
  }, [email, password]);

  const handleLogin = async () => {
    setError('');

    if (!isValid) {
      setError('Preencha email e senha corretamente.');
      return;
    }

    // bypass para login de teste
    const bypassEmail = 'user@example.com';
    const bypassPassword = 'password';
    if (email.trim().toLowerCase() === bypassEmail && password === bypassPassword) {
      navigation.replace('App');
      return;
    }

    setLoading(true);
    try {
      const res = await api.post('http://localhost:8081/TCC_BD/auth.php', {
        action: 'login',
        email,
        password,
      });

      if (res.data?.success) {
        navigation.replace('App');
      } else {
        setError(res.data?.mensagem || 'Credenciais inválidas.');
      }
    } catch (e) {
      setError('Erro de conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      <Image
         source={require('../../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Bem-vindo de volta!</Text>
      <Text style={styles.subtitle}>
        Faça login para acessar sua conta
      </Text>

      {/*EMAIL*/}
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        testID="login-email"
        accessibilityLabel="login-email"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
        style={styles.input}
      />

      {/*SENHA*/}
      <Text style={styles.label}>Senha</Text>
      <TextInput
        testID="login-password"
        accessibilityLabel="login-password"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCorrect={false}
        style={styles.input}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/*BOTÃO*/}
      <TouchableOpacity
        style={[
          styles.button,
          (!isValid || loading) && styles.buttonDisabled
        ]}
        onPress={handleLogin}
        disabled={!isValid || loading}
      >
        {loading
          ? <ActivityIndicator color="#fff" />
          : <Text style={styles.buttonText}>Entrar</Text>}
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>ou</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleText}>Entre com Google</Text>
      </TouchableOpacity>

      {/*CADASTRO*/}
      <TouchableOpacity onPress={() => alert('Tela de cadastro ainda não criada')}>
        <Text style={styles.footerText}>
          Ainda não tem conta? <Text style={styles.link}>Faça já seu cadastro</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
}