import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import series from '../data/series';
import StatusBadge from '../components/status-badge';
import {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from '../constants/watchlist';
import {
  isWatched,
  markAsWatched,
  markAsUnwatched,
} from '../constants/watched';

export default function SeriesDetailsScreen() {
  const { id } = useLocalSearchParams();

  const selectedSeries = series.find(
    (item) => item.id === id
  );

  const [saved, setSaved] = useState(false);
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    loadStatus();
  }, []);

  async function loadStatus() {
    if (!selectedSeries) {
      return;
    }

    const list = await getWatchlist();

    const exists = list.some(
      (item) =>
        item.id === selectedSeries.id &&
        item.type === 'series'
    );

    setSaved(exists);

    const watchedStatus = await isWatched(
      selectedSeries.id,
      'series'
    );

    setWatched(watchedStatus);
  }

  async function handleWatchlist() {
    if (!selectedSeries) {
      return;
    }

    if (saved) {
      await removeFromWatchlist(
        selectedSeries.id,
        'series'
      );

      setSaved(false);
    } else {
      await addToWatchlist({
        id: selectedSeries.id,
        title: selectedSeries.title,
        year: selectedSeries.year,
        universe: selectedSeries.universe,
        phase: selectedSeries.phase,
        seasons: selectedSeries.seasons,
        type: 'series',
      });

      setSaved(true);
    }
  }

  async function handleWatched() {
    if (!selectedSeries) {
      return;
    }

    if (watched) {
      await markAsUnwatched(
        selectedSeries.id,
        'series'
      );

      setWatched(false);
    } else {
      await markAsWatched({
        id: selectedSeries.id,
        title: selectedSeries.title,
        year: selectedSeries.year,
        universe: selectedSeries.universe,
        phase: selectedSeries.phase,
        seasons: selectedSeries.seasons,
        type: 'series',
      });

      setWatched(true);
    }
  }

  if (!selectedSeries) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>
            SERIES NOT FOUND
          </Text>

          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>
              GO BACK
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹ BACK</Text>
        </Pressable>

        <Text style={styles.title}>
          {selectedSeries.title}
        </Text>

        <Text style={styles.meta}>
          {selectedSeries.year} • {selectedSeries.universe} •{' '}
          {selectedSeries.phase}
        </Text>

        <Pressable
          style={[
            styles.watchlistButton,
            saved && styles.watchlistButtonSaved,
          ]}
          onPress={handleWatchlist}
        >
          <Text
            style={[
              styles.watchlistText,
              saved && styles.watchlistTextSaved,
            ]}
          >
            {saved
              ? '✓ IN MY LIST'
              : '+ ADD TO MY LIST'}
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.watchedButton,
            watched && styles.watchedButtonActive,
          ]}
          onPress={handleWatched}
        >
          <Text
            style={[
              styles.watchedText,
              watched && styles.watchedTextActive,
            ]}
          >
            {watched
              ? '✓ MARKED AS WATCHED'
              : '○ MARK AS WATCHED'}
          </Text>
        </Pressable>

        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>
            CURRENT STATUS
          </Text>

          <StatusBadge
            text={watched ? 'WATCHED' : 'UNWATCHED'}
          />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>RELEASE YEAR</Text>

          <Text style={styles.value}>
            {selectedSeries.year}
          </Text>

          <Text style={styles.label}>SEASONS</Text>

          <Text style={styles.value}>
            {selectedSeries.seasons || 'N/A'}
          </Text>

          <Text style={styles.label}>UNIVERSE</Text>

          <Text style={styles.value}>
            {selectedSeries.universe || 'N/A'}
          </Text>

          <Text style={styles.label}>PHASE</Text>

          <Text style={styles.value}>
            {selectedSeries.phase || 'N/A'}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            SERIES OVERVIEW
          </Text>

          <Text style={styles.description}>
            Explore {selectedSeries.title} as part of the{' '}
            {selectedSeries.universe} universe.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            WATCH OPTIONS
          </Text>

          <View style={styles.watchCard}>
            <Text style={styles.watchTitle}>
              Official Platforms
            </Text>

            <Text style={styles.watchText}>
              Check legal streaming or digital purchase options
              available in your region.
            </Text>
          </View>
        </View>
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

  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#121212',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#222222',
    paddingHorizontal: 14,
    paddingVertical: 9,
    marginBottom: 25,
  },

  backText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },

  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1,
  },

  meta: {
    color: '#777777',
    fontSize: 11,
    marginTop: 8,
    marginBottom: 20,
  },

  watchlistButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 10,
  },

  watchlistButtonSaved: {
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderColor: '#444444',
  },

  watchlistText: {
    color: '#080808',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },

  watchlistTextSaved: {
    color: '#ffffff',
  },

  watchedButton: {
    backgroundColor: '#121212',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#292929',
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 22,
  },

  watchedButtonActive: {
    backgroundColor: '#1c1c1c',
    borderColor: '#555555',
  },

  watchedText: {
    color: '#888888',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },

  watchedTextActive: {
    color: '#ffffff',
  },

  statusRow: {
    marginBottom: 22,
  },

  statusLabel: {
    color: '#555555',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 8,
  },

  infoCard: {
    backgroundColor: '#121212',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#222222',
    padding: 18,
    marginBottom: 28,
  },

  label: {
    color: '#555555',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 8,
  },

  value: {
    color: '#ffffff',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 8,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1.2,
    marginBottom: 10,
  },

  description: {
    color: '#888888',
    fontSize: 12,
    lineHeight: 20,
  },

  watchCard: {
    backgroundColor: '#121212',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#222222',
    padding: 16,
  },

  watchTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },

  watchText: {
    color: '#666666',
    fontSize: 11,
    lineHeight: 18,
    marginTop: 6,
  },

  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  errorTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 20,
  },
})