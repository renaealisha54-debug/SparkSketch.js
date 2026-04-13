/**
 * aetherLink.ts
 * Connective utility to tag files before they are sent to the Vault.
 */
export const aetherLink = {
  /**
   * wrap: Adds a hidden metadata header to the code.
   */
  wrap: (code: string, tier: string = 'SKETCH') => {
    return `/** !AETHER_LINK tier:${tier} **/\n${code}`;
  },
  
  /**
   * parseTier: Identifies which app created the file.
   */
  parseTier: (content: string) => {
    const match = content.match(/!AETHER_LINK tier:(\w+)/);
    return match ? match : 'UNKNOWN';
  }
};
