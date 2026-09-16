import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function SeriesCard({ series, onPress }) {
  return (
      <Pressable style={styles.card} onPress={onPress}>
            <View style={styles.numberBox}>
                    <Text style={styles.number}>{series.year}</Text>
                          </View>

                                <View style={styles.info}>
                                        <Text style={styles.title}>{series.title}</Text>

                                                <Text style={styles.meta}>
                                                          {series.universe} • {series.seasons} Season
                                                                  </Text>
                                                                        </View>

                                                                              <Text style={styles.arrow}>›</Text>
                                                                                  </Pressable>
                                                                                    );
                                                                                    }

                                                                                    const styles = StyleSheet.create({
                                                                                      card: {
                                                                                          backgroundColor: '#121212',
                                                                                              borderRadius: 14,
                                                                                                  padding: 14,
                                                                                                      marginBottom: 10,
                                                                                                          borderWidth: 1,
                                                                                                              borderColor: '#222222',
                                                                                                                  flexDirection: 'row',
                                                                                                                      alignItems: 'center',
                                                                                                                        },

                                                                                                                          numberBox: {
                                                                                                                              width: 58,
                                                                                                                                  height: 42,
                                                                                                                                      borderRadius: 10,
                                                                                                                                          backgroundColor: '#1c1c1c',
                                                                                                                                              alignItems: 'center',
                                                                                                                                                  justifyContent: 'center',
                                                                                                                                                      marginRight: 12,
                                                                                                                                                        },

                                                                                                                                                          number: {
                                                                                                                                                              color: '#888888',
                                                                                                                                                                  fontSize: 11,
                                                                                                                                                                      fontWeight: '800',
                                                                                                                                                                        },

                                                                                                                                                                          info: {
                                                                                                                                                                              flex: 1,
                                                                                                                                                                                },

                                                                                                                                                                                  title: {
                                                                                                                                                                                      color: '#ffffff',
                                                                                                                                                                                          fontSize: 14,
                                                                                                                                                                                              fontWeight: '800',
                                                                                                                                                                                                },

                                                                                                                                                                                                  meta: {
                                                                                                                                                                                                      color: '#666666',
                                                                                                                                                                                                          fontSize: 10,
                                                                                                                                                                                                              marginTop: 5,
                                                                                                                                                                                                                },

                                                                                                                                                                                                                  arrow: {
                                                                                                                                                                                                                      color: '#777777',
                                                                                                                                                                                                                          fontSize: 25,
                                                                                                                                                                                                                              marginLeft: 8,
                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                })