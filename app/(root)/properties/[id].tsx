import Comment from "@/components/Comment";
import { Property } from "@/lib/property";
import { Image, ScrollView, Text, View } from "react-native";

interface Props {
  item: Property;
}

const PropertyDetails = ({ item }: Props) => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 bg-white"
      >
        <Image source={{ uri: item.image }} className="h-60 w-full" />

        <Text className="text-2xl font-bold">{item.name}</Text>
        <Text>{item.type}</Text>

        <Text>{item.bedrooms} Beds</Text>
        <Text>{item.bathrooms} Baths</Text>
        <Text>{item.area} sqft</Text>

        {/* Agent */}
        <Image source={{ uri: item.agent.avatar }} className="size-14 rounded-full" />
        <Text>{item.agent.name}</Text>
        <Text>{item.agent.email}</Text>

        {/* Facilities */}
        {item.facilities.map((f) => (
          <Text key={f}>{f}</Text>
        ))}

        {/* Reviews */}
        {item.reviews.length > 0 && <Comment item={item.reviews[0]} />}
      </ScrollView>
    </View>
  );
};

export default PropertyDetails;
