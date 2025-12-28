import images from "@/constants/images";
import { Image, Text, View } from "react-native";

const NoResults = () => {
    return (
        <View className="flex items-center justify-center my-5">
            <Image source={images.noResult} className="w-11/12 h-80" resizeMode="contain" />
            <Text className="text-teal text-2xl font-bbh-bogle mt-5">No Results...</Text>
            <Text className="text-base text-black-100 mt-2">Sorry, we could not find any results about that</Text>
        </View>
    )
}

export default NoResults;