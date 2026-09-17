import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useFocusEffect, router } from 'expo-router';

import EmptyState from '../components/empty-state';
import {
  getWatched,
  markAsUnwatched,
} from '../constants/watched';

export default function WatchedHistoryScreen() {
  const [watchedList, setWatchedList] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadWatched();
    }, [])
  );

  async function loadWatched() {
    const savedItems = await getWatched();
    setWatchedList(savedItems);
  }

  async function handleRemove(item) {
    const updatedList = await markAsUnwatched(
      item.id,
      item.type
    );

    setWatchedList(updatedList);
  }

  function openItem(item) {
    if (item.type === 'movie') {
      router.push({
        pathname: '/movie-details',
        params: { id: item.id },
      });
    }

    if (item.type === 'series') {
      router.push({
        pathname: '/series-details',
        params: { id: item.id },
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>
          WATCHED HISTORY
        </Text>

        <Text style={styles.subtitle}>
          YOUR WATCHED MARVEL TITLES
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            WATCH HISTORY
          </Text>

          <Text style={styles.infoText}>
            Movies and series you mark as watched will
            appear here.
          </Text>
        </View>

        {watchedList.length === 0 ? (
          <EmptyState
            title="NO WATCHED TITLES"
            message="Mark a movie or series as watched and it will appear here."
          />
        ) : (
          watchedList.map((item) => (
            <View
              key={`${item.type}-${item.id}`}
              style={styles.item}
            >
              <Pressable
                style={styles.itemContent}
                onPress={() => openItem(item)}
              >
                <View style={styles.typeBox}>
                  <Text style={styles.typeText}>
                    {item.type === 'movie'
                      ? 'MOVIE'
                      : 'SERIES'}
                  </Text>
                </View>

                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.itemMeta}>
                    {item.year} • {item.universe}
                  </Text>
                </View>

                <Text style={styles.check}>
                  ✓
                </Text>
              </Pressable>

              <Pressable
                style={styles.removeButton}
                onPress={() => handleRemove(item)}
              >
                <Text style={styles.removeText}>
                  MARK UNWATCHED
                </Text>
              </Pressable>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  heading: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 20,
  },

  subtitle: {
    color: '#666666',
    fontSize: 10,
    letterSpacing: 1.5,
    marginTop: 5,
    marginBottom: 25,
  },

  infoCard: {
    backgroundColor: '#151515',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#292929',
    marginBottom: 18,
  },

  infoTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1.2,
  },

  infoText: {
    color: '#777777',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 7,
  },

  item: {
    backgroundColor: '#121212',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#222222',
    padding: 14,
    marginBottom: 10,
  },

  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  typeBox: {
    width: 58,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  typeText: {
    color: '#888888',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.8,
  },

  itemInfo: {
    flex: 1,
  },

  itemTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },

  itemMeta: {
    color: '#666666',
    fontSize: 10,
    marginTop: 5,
  },

  check: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
    marginLeft: 8,
  },

  removeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#292929',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 12,
  },

  removeText: {
    color: '#777777',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
})