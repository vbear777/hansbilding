import { Models } from "react-native-appwrite";

export interface Property extends Models.Document {
  name: string;
  address: string;
  type: string;
  rating: number;
  description: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  facilities: string[];
  image: string;
  geolocation: string;
  agent: string;
  gallery: string[];
}
