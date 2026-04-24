import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12
  },
  button: {
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8
  },
  buttonDisabled: {
    backgroundColor: '#7aa7ff'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600'
  },
  link: {
    marginTop: 12,
    alignItems: 'center'
  },
  linkText: {
    color: '#007bff'
  },
  error: {
    color: 'red',
    marginBottom: 8,
    textAlign: 'center'
  }
});
