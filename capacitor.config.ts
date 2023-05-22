import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins:{
    GoogleAuth:{
      scopes:['profile','email'],
      androidClientId:'1073709398626-5937cqodhd9e9sv7led83tvi11fon8p9.apps.googleusercontent.com',
      serverClientId:'1073709398626-5937cqodhd9e9sv7led83tvi11fon8p9.apps.googleusercontent.com',
      forceCodeForRefreshToken:true
    },
  },

  appId: 'com.IonicInspiration.app',
  appName: 'InspirationApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
