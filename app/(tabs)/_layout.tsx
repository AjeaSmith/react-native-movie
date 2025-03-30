import React from "react";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const TabIcon = ({
	isFocused,
	title,
	icon,
}: {
	isFocused: any;
	title: string;
	icon: any;
}) => {
	if (isFocused) {
		return (
			<ImageBackground
				source={images.highlight}
				className="flex flex-row w-full min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
			>
				<Image source={icon} tintColor="#151312" className="size-5" />
				<Text className="text-secondary font-semibold text-base ml-2">
					{title}
				</Text>
			</ImageBackground>
		);
	}
	return (
		<View className="size-full justify-center items-center mt-4 rounded-full">
			<Image source={icon} className="size-5" tintColor="#a8b5db" />
		</View>
	);
};
const _layout = () => {
	// headerShown:false hides the screen title. Test: remove headerShown on one of the tabs to see.
	return (
		<Tabs
			screenOptions={{
				tabBarItemStyle: {
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				},
				tabBarStyle: {
					backgroundColor: "#0f0d23",
					borderRadius: 50,
					marginHorizontal: 10,
					marginBottom: 36,
					height: 52,
					position: "absolute",
					overflow: "hidden",
					borderWidth: 1,
					borderColor: "#0f0d23",
				},
				tabBarShowLabel: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "index",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon title="Home" icon={icons.home} isFocused={focused} />
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: "search",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon isFocused={focused} title="Search" icon={icons.search} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "profile",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon isFocused={focused} title="Profile" icon={icons.person} />
					),
				}}
			/>
			<Tabs.Screen
				name="saved"
				options={{
					title: "saved",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon isFocused={focused} title="Saved" icon={icons.save} />
					),
				}}
			/>
		</Tabs>
	);
};

export default _layout;
