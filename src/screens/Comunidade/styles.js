import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f4f4f6',
    padding: 15
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6c63ff'
  },

  sub: {
    fontSize: 12,
    color: '#777'
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50
  },

  select: {
    backgroundColor: '#fff',
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  banner: {
    backgroundColor: '#6c63ff',
    borderRadius: 15,
    padding: 15,
    marginTop: 15
  },

  bannerTitulo: {
    color: '#fff',
    fontWeight: 'bold'
  },

  bannerDesc: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5
  },

  bannerInfo: {
    color: '#ddd',
    fontSize: 11,
    marginTop: 5
  },

  btnEntrar: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'flex-start'
  },

  postBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginTop: 15
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  avatarSmall: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10
  },

  input: {
    flex: 1
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  btnMid: {
    backgroundColor: '#6c63ff',
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 5
  },

  btnText: {
    color: '#fff'
  },

  btnPostar: {
    backgroundColor: '#6c63ff',
    padding: 8,
    borderRadius: 8
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },

  infoCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    width: '32%'
  },

  infoText: {
    fontSize: 11,
    color: '#777'
  },

  section: {
    marginTop: 20,
    fontWeight: 'bold'
  },

  alertRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  alertCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 12,
    padding: 10
  },

  avatarMini: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 5
  },

  nome: {
    fontSize: 12,
    fontWeight: 'bold'
  },

  tipo: {
    fontSize: 10,
    color: '#6c63ff'
  },

  alertText: {
    fontSize: 11,
    marginTop: 5
  },

  imgBox: {
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },

  btnVer: {
    marginTop: 5,
    alignItems: 'center'
  },

  cameraRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  cameraCard: {
    backgroundColor: '#fff',
    width: '32%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },

  cameraText: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center'
  }

});