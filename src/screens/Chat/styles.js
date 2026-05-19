import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C63FF',
  },

  subtitle: {
    fontSize: 12,
    color: '#888',
  },

  profile: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  card: {
    width: 90,
    height: 70,
    backgroundColor: '#eaeaff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  cardText: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },

  chatBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
  },

  chatTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  message: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },

  messageBox: {
    marginLeft: 8,
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 10,
    maxWidth: '80%',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 12,
  },

  time: {
    fontSize: 10,
    color: '#999',
  },

  text: {
    fontSize: 12,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  input: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 8,
  },

  send: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 10,
    marginLeft: 5,
  },
});