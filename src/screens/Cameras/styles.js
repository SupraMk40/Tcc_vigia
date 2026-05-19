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
    color: '#777',
  },

  profile: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },

  dicasBox: {
    flexDirection: 'row',
    backgroundColor: '#EAEAFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },

  dicasTitulo: {
    fontWeight: 'bold',
    color: '#6C63FF',
  },

  dicasTexto: {
    fontSize: 12,
    color: '#555',
  },

  section: {
    marginBottom: 10,
    color: '#6C63FF',
    fontWeight: 'bold',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    padding: 10,
  },

  image: {
    width: 90,
    height: 70,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  nome: {
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 5,
  },

  text: {
    fontSize: 12,
    color: '#555',
  },

  botaoVer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  verTexto: {
    color: '#6C63FF',
    fontSize: 12,
  },

  addBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#6C63FF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
  },

  addText: {
    color: '#6C63FF',
    marginTop: 5,
  },

  form: {
  backgroundColor: '#fff',
  borderRadius: 15,
  padding: 15,
  marginTop: 10,
},

label: {
  fontSize: 12,
  marginTop: 10,
  color: '#555',
},

input: {
  backgroundColor: '#eee',
  borderRadius: 10,
  padding: 10,
  marginTop: 5,
},

uploadBox: {
  borderWidth: 1,
  borderStyle: 'dashed',
  borderColor: '#6C63FF',
  borderRadius: 10,
  padding: 20,
  alignItems: 'center',
  marginTop: 15,
},

uploadText: {
  color: '#6C63FF',
  fontSize: 12,
  marginTop: 5,
},

button: {
  backgroundColor: '#6C63FF',
  padding: 15,
  borderRadius: 20,
  marginTop: 20,
  alignItems: 'center',
},

buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},

successContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
},

circleOuter: {
  width: 180,
  height: 180,
  borderRadius: 100,
  backgroundColor: '#C8F7C5',
  alignItems: 'center',
  justifyContent: 'center',
},

circleInner: {
  width: 120,
  height: 120,
  borderRadius: 100,
  backgroundColor: '#4CAF50',
  alignItems: 'center',
  justifyContent: 'center',
},

check: {
  fontSize: 50,
  color: '#fff',
},

successTitle: {
  marginTop: 20,
  fontSize: 18,
  fontWeight: 'bold',
},

successSub: {
  marginTop: 5,
  color: '#777',
},
});