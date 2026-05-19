import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

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

  const handleLogin = () => {
    setError('');

    if (!isValid) {
      setError('Preencha email e senha corretamente.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (email === 'user@example.com' && password === 'password') {
        navigation.replace('App');
      } else {
        setError('Credenciais inválidas.');
      }
    }, 1200);
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
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/*SENHA*/}
      <Text style={styles.label}>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
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