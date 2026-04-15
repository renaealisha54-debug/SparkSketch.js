// src/services/AetherService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AetherService = {
  async getVault() {
    const data = await AsyncStorage.getItem('@aether_vault');
    return data ? JSON.parse(data) : {};
  },

  async saveFile(fileId, content) {
    const vault = await this.getVault();
    vault[fileId] = { content, updatedAt: Date.now() };
    await AsyncStorage.setItem('@aether_vault', JSON.stringify(vault));
  }
};
