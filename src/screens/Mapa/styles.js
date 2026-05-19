import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
    padding: 16,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5a5a9f',
  },

  subtitle: {
    fontSize: 13,
    color: '#777',
    marginBottom: 12,
  },

  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },

  filterButton: {
    marginLeft: 8,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5a5a9f',
    marginBottom: 8,
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  card: {
    width: '48%',
    backgroundColor: '#e9e9fb',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  cardNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },

  cardLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#444',
  },

  cardSub: {
    fontSize: 11,
    color: '#666',
  },

  /*MAPA*/
  map: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden', 
    marginBottom: 16,
    backgroundColor: '#ddd',

    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  mapImage: {
    width: '100%',
    height: '100%',
  },

  cameraItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',

    elevation: 2,
  },

  cameraIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  cameraText: {
    fontSize: 13,
    fontWeight: '500',
  },

  live: {
    fontSize: 11,
    color: '#6a5acd',
  },
});