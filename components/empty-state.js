import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmptyState({
  title = 'NOTHING FOUND',
    message = 'No titles match your search.',
    }) {
      return (
          <View style={styles.container}>
                <Text style={styles.icon}>✦</Text>

                      <Text style={styles.title}>{title}</Text>

                            <Text style={styles.message}>{message}</Text>
                                </View>
                                  );
                                  }

                                  const styles = StyleSheet.create({
                                    container: {
                                        alignItems: 'center',
                                            justifyContent: 'center',
                                                paddingVertical: 50,
                                                    paddingHorizontal: 20,
                                                      },

                                                        icon: {
                                                            color: '#555555',
                                                                fontSize: 28,
                                                                    marginBottom: 12,
                                                                      },

                                                                        title: {
                                                                            color: '#ffffff',
                                                                                fontSize: 14,
                                                                                    fontWeight: '900',
                                                                                        letterSpacing: 1.2,
                                                                                          },

                                                                                            message: {
                                                                                                color: '#666666',
                                                                                                    fontSize: 11,
                                                                                                        textAlign: 'center',
                                                                                                            marginTop: 7,
                                                                                                                lineHeight: 17,
                                                                                                                  },
                                                                                                                  })