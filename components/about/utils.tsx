export function formatDegreeTitle(degree: string, institution: string): string {
  return `${degree} — ${institution}`;
}

export function getYearsSince(startYear: number): number {
  return new Date().getFullYear() - startYear;
}

export function truncateBio(bio: string, maxWords: number = 25): string {
  const words = bio.split(" ");
  if (words.length <= maxWords) return bio;
  return words.slice(0, maxWords).join(" ") + "...";
}
