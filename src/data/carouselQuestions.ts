export interface CarouselQuestion {
  text: string;
  tag: string;
}

export const row1Questions: CarouselQuestion[] = [
  { text: "Is Sadar Bazar open today?", tag: "Markets" },
  { text: "Shatut / mulberry kahan mil rahi hai abhi?", tag: "Seasonal" },
  { text: "Koi 10 Amul candy bar ghar deliver kar sakta hai?", tag: "Delivery" },
  { text: "CNG available hai kya nearest pump pe?", tag: "Fuel" },
  { text: "Sunday bazaar aaj chal raha hai?", tag: "Markets" },
  { text: "Nearest ATM mein cash hai kya?", tag: "Finance" },
  { text: "Chole bhature wala open hai kya abhi?", tag: "Food" },
  { text: "Ice cream delivery hogi kya — 2 km ke andar?", tag: "Delivery" },
];

export const row2Questions: CarouselQuestion[] = [
  { text: "Subzi mandi mein aaj gobhi ka rate kya hai?", tag: "Markets" },
  { text: "Petrol pump pe queue hai kya abhi?", tag: "Fuel" },
  { text: "Koi grocery deliver karega — 2 kg daal chahiye", tag: "Delivery" },
  { text: "Medical store khuli hai kya raat ko paas mein?", tag: "Health" },
  { text: "Phool wala open hai mandir ke paas?", tag: "Markets" },
  { text: "Is the main market closed for the holiday?", tag: "Markets" },
  { text: "Auto stand khali hai kya abhi?", tag: "Transport" },
  { text: "Doodh wala aaya kya aaj colony mein?", tag: "Delivery" },
];
