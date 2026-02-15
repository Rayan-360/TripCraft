export default function normalizeTripInput(rawInput) {
  const destination = rawInput.destination.trim();
  const startDate = new Date(rawInput.startDate);
  const endDate = new Date(rawInput.endDate);
  const diffInMs = endDate - startDate;
  const days = diffInMs / (1000 * 60 * 60 * 24);
  const budget = Number(rawInput.budget);
  const interestsMap = {
    "Nature/Outdoors": "nature",
    "Museums/Culture": "culture",
    "Adventure activities": "adventure",
    "Nightlife": "nightlife",
    "Shopping": "shopping",
    "Scenic/Photography": "scenic",
  }
  
  const interests = Array.isArray(rawInput.interests) ? rawInput.interests : [rawInput.interests]



  const allowedPaces = ["relaxed", "balanced", "packed"];
  const pace = allowedPaces.includes(rawInput.pace) ? rawInput.pace : "balanced";

  const notes = rawInput.notes.trim();

  return {
    destination,
    days,
    budget,
    preferences: {
      interests,
      pace
    },
    notes,
    createdAt: new Date().toISOString(),
  };

}