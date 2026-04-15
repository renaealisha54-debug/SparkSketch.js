// src/services/aetherBridge.ts
import { AetherService } from './AetherService'; // Import the new service

export const aetherBridge = {
  async deploy(files: ProjectFile[]): Promise<boolean> {
    try {
      // Loop through files and save via AetherService
      for (const file of files) {
        await AetherService.saveFile(file.id, file.content);
      }
      return true;
    } catch (e) {
      return false;
    }
  }
};
