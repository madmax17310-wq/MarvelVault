import AsyncStorage from '@react-native-async-storage/async-storage';

const WATCHED_KEY = 'marvelvault_watched';

export async function getWatched() {
  try {
    const saved = await AsyncStorage.getItem(WATCHED_KEY);

    if (!saved) {
      return [];
    }

    return JSON.parse(saved);
  } catch (error) {
    console.log('Failed to load watched list:', error);
    return [];
  }
}

export async function isWatched(id, type) {
  const watched = await getWatched();

  return watched.some(
    (item) =>
      item.id === id &&
      item.type === type
  );
}

export async function markAsWatched(item) {
  try {
    const currentList = await getWatched();

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
      WATCHED_KEY,
      JSON.stringify(updatedList)
    );

    return updatedList;
  } catch (error) {
    console.log('Failed to mark as watched:', error);
    return [];
  }
}

export async function markAsUnwatched(id, type) {
  try {
    const currentList = await getWatched();

    const updatedList = currentList.filter(
      (item) =>
        !(item.id === id && item.type === type)
    );

    await AsyncStorage.setItem(
      WATCHED_KEY,
      JSON.stringify(updatedList)
    );

    return updatedList;
  } catch (error) {
    console.log('Failed to mark as unwatched:', error);
    return [];
  }
}

export default {
  getWatched,
  isWatched,
  markAsWatched,
  markAsUnwatched,
}