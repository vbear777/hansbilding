import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import { logout } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import React from "react";
import { Alert, Image, ImageSourcePropType, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
    const { user, refetch } = useGlobalContext();
    console.log("Avatar URL:", user?.avatar);
    const handleLogout = async () => {
        const result = await logout();

        if(result) {
            Alert.alert("Success", "You have been logged out successfully");
            refetch();
        } else {
            Alert.alert("Error", "An error occured while logging out")
        }
    };

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 px-7"
            >
                <View className="flex flex-row items-center justify-between mt-5">
                    <Text className="text-xl font-rubik-medium">
                        Profile
                    </Text>
                    <Image source={icons.bell} className="size-5" />
                </View>

                <View className="flex-row justify-center flex">
                    <View className="flex flex-col items-center relative mt-5">
                        <Image
                            // Cek jika avatar adalah string dan tidak mengandung "[object"
                            source={{ 
                                uri: typeof user?.avatar === 'string' && !user?.avatar.includes('[object') 
                                    ? user?.avatar 
                                    : `https://ui-avatars.com/api/?name=${user?.name}` 
                            }}
                            className="size-44 relative rounded-full"
                        />
                        <TouchableOpacity className="absolute bottom-11 right-2">
                            <Image source={icons.edit} className="size-9 mb-3 mr-5" />
                        </TouchableOpacity>
                        <Text className="text-2xl font-rubik-bold mt-5">{user?.name}</Text>
                    </View>
                </View>

                <View className="flex flex-col mt-10">
                    <SettingsItem icon={icons.calendar} title="My Bookings"/>
                    <SettingsItem icon={icons.wallet} title="Payments"/>
                </View>

                <View className="flex flex-col mt-5 border-t pt-5 border-beige">
                    {settings.slice(2).map((item, index) => (
                        <SettingsItem key={index} {...item} />
                    ))}
                </View>

                <View className="flex flex-col mt-5 border-t pt-5 border-beige">
                    <SettingsItem icon={icons.logout} title="Logout" textStyle="text-red-300" showArrow={false} onPress={handleLogout} />
                </View>
     
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile;