import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatusBadge({ text = 'UNWATCHED' }) {
  return (
      <View style={styles.badge}>
            <Text style={styles.text}>{text}</Text>
                </View>
                  );
                  }

                  const styles = StyleSheet.create({
                    badge: {
                        alignSelf: 'flex-start',
                            backgroundColor: '#1a1a1a',
                                borderRadius: 8,
                                    paddingHorizontal: 10,
                                        paddingVertical: 6,
                                            borderWidth: 1,
                                                borderColor: '#292929',
                                                  },

                                                    text: {
                                                        color: '#888888',
                                                            fontSize: 9,
                                                                fontWeight: '900',
                                                                    letterSpacing: 1,
                                                                      },
                                                                      })