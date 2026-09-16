import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({
  value,
    onChangeText,
      placeholder = 'Search Marvel titles...',
      }) {
        return (
            <View style={styles.container}>
                  <TextInput
                          style={styles.input}
                                  value={value}
                                          onChangeText={onChangeText}
                                                  placeholder={placeholder}
                                                          placeholderTextColor="#555555"
                                                                  selectionColor="#ffffff"
                                                                          autoCapitalize="none"
                                                                                  autoCorrect={false}
                                                                                        />
                                                                                            </View>
                                                                                              );
                                                                                              }

                                                                                              const styles = StyleSheet.create({
                                                                                                container: {
                                                                                                    backgroundColor: '#121212',
                                                                                                        borderRadius: 14,
                                                                                                            borderWidth: 1,
                                                                                                                borderColor: '#222222',
                                                                                                                    marginBottom: 18,
                                                                                                                      },

                                                                                                                        input: {
                                                                                                                            color: '#ffffff',
                                                                                                                                fontSize: 13,
                                                                                                                                    paddingHorizontal: 16,
                                                                                                                                        paddingVertical: 13,
                                                                                                                                          },
                                                                                                                                          })