import {API_URL, CLIENT_NAME, ENVIRONMENT} from '@env';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getClientConfig} from '../clients';

const App = () => {
  const [config, setConfig] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const clientConfig = getClientConfig(CLIENT_NAME);
    if (clientConfig) {
      setConfig(clientConfig);
    } else {
      setError(`No config found for client: ${CLIENT_NAME}`);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.centeredView}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredView}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  const {theme, feature_flags} = config;

  // Styles dynamiques basés sur le thème
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme?.primaryColor || '#FFFFFF', // Couleur primaire par défaut si non définie
    },
    text: {
      color: theme?.secondaryColor || '#000000', // Couleur secondaire par défaut si non définie
      fontFamily: theme?.font || 'Arial', // Police par défaut
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.text}>API_URL: {API_URL}</Text>
      <Text style={dynamicStyles.text}>CLIENT_NAME: {CLIENT_NAME}</Text>
      <Text style={dynamicStyles.text}>ENVIRONMENT: {ENVIRONMENT}</Text>
      <Text style={dynamicStyles.text}>Config App Name: {config?.appName}</Text>

      {/* Affichage conditionnel basé sur les feature flags */}
      {feature_flags?.feature1 && (
        <Text style={dynamicStyles.text}>Feature 1 is enabled</Text>
      )}
      {!feature_flags?.feature2 && (
        <Text style={dynamicStyles.text}>Feature 2 is disabled</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
