import { Models } from "react-native-appwrite";

/* ====== SUB TYPES ====== */
export interface Agent {
  name: string;
  email: string;
  avatar: string;
}

export interface Review {
  name: string;
  avatar: string;
  review: string;
  rating: number;
}

export interface Gallery extends Models.Document {
  image: string;
}

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


/*
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


*/