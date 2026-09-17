import AsyncStorage from '@react-native-async-storage/async-storage';

const WATCHLIST_KEY = 'marvelvault_watchlist';

export async function getWatchlist() {
  try {
    const saved = await AsyncStorage.getItem(WATCHLIST_KEY);

    if (!saved) {
      return [];
    }

    return JSON.parse(saved);
  } catch (error) {
    console.log('Failed to load watchlist:', error);
    return [];
  }
}

export async function addToWatchlist(item) {
  try {
    const currentList = await getWatchlist();

    const alreadyExists = currentList.some(
      (savedItem) =>
        savedItem.id === item.id &&
        savedItem.type === item.type
    );

    if (alreadyExists) {
      return currentList;
    }

    const updatedList = [...currentList, item];

    await AsyncStorage.setItem(
      WATCHLIST_KEY,
      JSON.stringify(updatedList)
    );

    return updatedList;
  } catch (error) {
    console.log('Failed to add to watchlist:', error);
    return [];
  }
}

export async function removeFromWatchlist(id, type) {
  try {
    const currentList = await getWatchlist();

    const updatedList = currentList.filter(
      (item) =>
        !(item.id === id && item.type === type)
    );

    await AsyncStorage.setItem(
      WATCHLIST_KEY,
      JSON.stringify(updatedList)
    );

    return updatedList;
  } catch (error) {
    console.log('Failed to remove from watchlist:', error);
    return [];
  }
}

export default {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
}