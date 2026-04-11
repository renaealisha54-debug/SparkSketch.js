// src/services/aetherBridge.ts
import { projectService } from './projectService';
import { Project } from '../types/project';
import { Alert } from 'react-native';

export const aetherBridge = {
  async deploy(project: Project): Promise<boolean> {
    if (!project.files || project.files.length === 0) {
      Alert.alert("Empty Project", "Add some files before deploying!");
      return false;
    }

    const success = await projectService.deployToAether(project);
    if (success) {
      Alert.alert("🚀 Deployed to Aether!", `${project.name} is now ready in Aether Engine.`);
    } else {
      Alert.alert("Deploy Error", "Could not push to Aether vault.");
    }
    return success;
  }
};
