import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    padding: 15
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  subtitulo: {
    fontSize: 12,
    color: '#777'
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50
  },

  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15
  },

  input: {
    marginLeft: 10,
    flex: 1
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10
  },

  nome: {
    fontWeight: 'bold'
  },

  pergunta: {
    color: '#666'
  },

  actions: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10
  },

  btn: {
    backgroundColor: '#6c63ff',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },

  btnText: {
    color: '#fff'
  },

  btnOutline: {
    borderWidth: 1,
    borderColor: '#6c63ff',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },

  btnOutlineText: {
    color: '#6c63ff'
  },

  local: {
    fontSize: 12,
    color: '#777'
  },

  badge: {
    marginLeft: 'auto',
    backgroundColor: '#6c63ff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6
  },

  badgeText: {
    color: '#fff',
    fontSize: 10
  },

  tituloCard: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#6c63ff'
  },

  desc: {
    fontSize: 13,
    marginTop: 5,
    color: '#555'
  },

  info: {
    fontSize: 12,
    color: '#777',
    marginTop: 3
  },

  actionsBottom: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10
  },

  smallBtn: {
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 6
  },

  smallText: {
    fontSize: 12
  },

  section: {
    marginTop: 15,
    fontWeight: 'bold'
  },

  activity: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginTop: 5
  }
});