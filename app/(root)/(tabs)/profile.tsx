import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: any;
    showArrow?: boolean;
}

{/* Settings Item Below Avatar */}
const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps ) => (
    <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3">
        <View className="flex flex-row items-center gap-3">
            <Image source={icon} className="size-6" />
            <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
        </View>

        {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
)

{/* Profile Bio Avatar */}
const Profile = () => {
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 px-7"
            >
                <View className="flex flex-row items-center justify-between mt-5">
                    <Text className="text-xl font-bbh-bogle">
                        Profile
                    </Text>
                    <Image source={icons.bell} className="size-5" />
                </View>

                <View className="flex-row justify-center flex">
                    <View className="flex flex-col items-center relative mt-5">
                        <Image source={images.avatar} className="size-44 relative rounded-full" />
                        <TouchableOpacity className="absolute bottom-11 right-2">
                            <Image source={icons.edit} className="size-9" />
                        </TouchableOpacity>
                        <Text className="text-2xl font-bbh-bogle mt-2">oblivion | VBear777 </Text>
                    </View>
                </View>

                <View className="flex flex-col mt-10">
                    <SettingsItem icon={icons.calendar} title="My Bookings"/>
                    <SettingsItem icon={icons.wallet} title="Payment"/>
                </View>

                <View className="flex flex-col mt-5 border-t pt-5 border-teal">
                    {settings.slice(2).map((item, index) => (
                        <SettingsItem key={index} {...item} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;