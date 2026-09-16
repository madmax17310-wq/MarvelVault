const themeOptions = [
      {
          id: 'dark',
              label: 'Dark Mode',
                  description: 'Use the dark cinematic interface',
                    },
                      {
                          id: 'device',
                              label: 'Device Default',
                                  description: 'Follow your phone system theme',
                                    },
                                      {
                                          id: 'light',
                                              label: 'Light Mode',
                                                  description: 'Use a light interface',
                                                    },
                                                    ];

                                                    const settings = {
                                                      themeOptions,
                                                        defaultTheme: 'dark',
                                                        };

                                                        export { themeOptions };

                                                        export default settings;