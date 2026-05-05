import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Largura do card: tela - padding lateral - "peek" do próximo card
export const ITEM_SPACING = 12;
export const ITEM_WIDTH = SCREEN_WIDTH - 48; // 16px de cada lado + 16px de peek

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },

  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e8eaed',
  },
  logo: {
    width: 160,
    height: 40,
    resizeMode: 'contain',
  },
  backButton: {
    padding: 4,
  },

  Title: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 4,
    gap: 10,
  },
  titleIconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#1a73e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleText: {
    fontSize: 20,
    color: '#202124',
    fontWeight: '700',
    letterSpacing: -0.3,
  },

  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 6,
    marginBottom: 16,
  },
  counterText: {
    fontSize: 13,
    color: '#80868b',
    fontWeight: '500',
  },
  onlineIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  onlineDotSmall: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#34a853',
  },
  onlineCountText: {
    fontSize: 13,
    color: '#34a853',
    fontWeight: '600',
  },

  flatListContent: {
    paddingLeft: 16,
    paddingRight: 4, // 16 - ITEM_SPACING = peek
  },

  carouselItem: {
    width: ITEM_WIDTH,
    height: 240,
    marginRight: ITEM_SPACING,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1c1c1e',
    // Sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },

  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },

  topRow: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // Badge "AO VIVO" com pulsação
  liveBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 5,
  },
  pulseDot: {
    position: 'absolute',
    left: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(234,67,53,0.4)',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ea4335',
  },
  liveText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // Badge offline
  offlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  offlineText: {
    color: '#aaa',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // Badge de resolução
  resolutionBadge: {
    backgroundColor: 'rgba(26,115,232,0.85)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  resolutionText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },

  carouselOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
    gap: 4,
  },
  carouselTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  locationText: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
    fontWeight: '500',
  },

  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 24,
    backgroundColor: '#1a73e8',
  },
  dotInactive: {
    width: 8,
    backgroundColor: '#dadce0',
  },
});