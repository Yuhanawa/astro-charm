/**
 * Calculate similarity between two strings using cosine similarity of character frequency.
 * This is a performance-optimized version that trades some accuracy for speed.
 *
 * @param str1 First string to compare
 * @param str2 Second string to compare
 * @returns Similarity score between 0 and 1, where 1 means identical
 */
export function calculateStringSimilarity(str1: string, str2: string): number {
  // Quick checks for identical or empty strings
  if (str1 === str2) return 1;
  if (str1.length === 0 || str2.length === 0) return 0;

  // Convert strings to lowercase for case-insensitive comparison
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Create character frequency maps
  const freqMap1: { [key: string]: number } = {};
  const freqMap2: { [key: string]: number } = {};

  // Count characters in first string
  for (let char of str1) {
    freqMap1[char] = (freqMap1[char] || 0) + 1;
  }

  // Count characters in second string
  for (let char of str2) {
    freqMap2[char] = (freqMap2[char] || 0) + 1;
  }

  // Calculate dot product
  let dotProduct = 0;
  for (let char in freqMap1) {
    if (freqMap2[char]) {
      dotProduct += freqMap1[char] * freqMap2[char];
    }
  }

  // Calculate magnitudes
  let magnitude1 = 0;
  let magnitude2 = 0;
  for (let char in freqMap1) {
    magnitude1 += freqMap1[char] * freqMap1[char];
  }
  for (let char in freqMap2) {
    magnitude2 += freqMap2[char] * freqMap2[char];
  }

  // Avoid division by zero
  if (magnitude1 === 0 || magnitude2 === 0) return 0;

  // Calculate cosine similarity
  return dotProduct / (Math.sqrt(magnitude1) * Math.sqrt(magnitude2));
}
