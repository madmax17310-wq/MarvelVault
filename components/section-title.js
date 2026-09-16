import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SectionTitle({ title, subtitle }) {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

                  {subtitle ? (
                          <Text style={styles.subtitle}>{subtitle}</Text>
                                ) : null}
                                    </View>
                                      );
                                      }

                                      const styles = StyleSheet.create({
                                        container: {
                                            marginBottom: 14,
                                              },

                                                title: {
                                                    color: '#ffffff',
                                                        fontSize: 18,
                                                            fontWeight: '900',
                                                                letterSpacing: 1,
                                                                  },

                                                                    subtitle: {
                                                                        color: '#666666',
                                                                            fontSize: 10,
                                                                                marginTop: 5,
                                                                                    letterSpacing: 0.8,
                                                                                      },
                                                                                      })