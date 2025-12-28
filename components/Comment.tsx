import icons from "@/constants/icons";
import { Review } from "@/lib/property";
import { Image, Text, View } from "react-native";

interface Props {
    item: Review;
}

const Comment = ({ item }: Props) => {
    return (
        <View className="flex flex-col items-start">
            <View className="flex flex-row items-center">
                <Image source={{ uri: item.avatar }} className="size-14 rounded-full" />
                <Text className="text-base text-black-300 text-start font-rubik-bold ml-3">
                    {item.name}
                </Text>
            </View>

            <Text className="text-black-200 text-base font-rubik mt-2">
                {item.review}
            </Text>

            <View className="flex flex-row items-center w-full justify-between mt-4">
                <View className="flex flex-row items-center">
                    <Image 
                        source={icons.heart}
                        className="size-5"
                        tintColor={"teal"}
                    />
                    <Text className="text-black-300 text-sm font-rubik-medium ml-2">
                        120
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Comment;