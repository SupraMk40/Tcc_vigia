import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2F4C9A',
    marginBottom: 15,
  },

  label: {
    marginTop: 15,
    marginBottom: 8,
    color: '#333',
    fontWeight: '600',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D0D5DD',

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  cardSelected: {
    backgroundColor: '#2F4C9A',
    borderColor: '#2F4C9A',
  },

  cardText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
    color: '#2F4C9A',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    height: 90,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    textAlignVertical: 'top',
  },

  row: {
    flexDirection: 'row',
    gap: 10,
  },

  btnPerigo: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
  },

  btnPerigoAtivo: {
    backgroundColor: '#F87171',
    borderColor: '#F87171',
  },

  btnNaoAtivo: {
    backgroundColor: '#E5E7EB',
    borderColor: '#D1D5DB',
  },

  localBox: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D5DD',
  },

  botao: {
    marginTop: 25,
    backgroundColor: '#D62828',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  /*HEADER*/
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2F4C9A',
  },

  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#D0D5DD',
  },

  /*ALERTA*/
  alertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE8E8',
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#D62828',
  },

  alertText: {
    marginLeft: 8,
    color: '#A94442',
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },

  centerArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  outerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#FDECEC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middleCircle: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#FAD4D4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#D62828',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emergencyText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14,
    marginTop: 5,
    letterSpacing: 1,
  },

  bottomText: {
    marginTop: 25,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  subText: {
    marginTop: 6,
    fontSize: 12,
    color: '#777',
  },
});
