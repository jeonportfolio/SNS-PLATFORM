import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { RootStackNavigation } from "./navigations/RootStackNavigation";
import { SplashView } from "./SplashView";



export const RootApp:React.FC = () => {
    const [intialize, setIntialize] = useState(false);

    if (!intialize) return (
        <SplashView
            onFinishLoad={() => {setIntialize(true)}}
        />
    );

    return(
        <NavigationContainer>
                <RootStackNavigation/>
        </NavigationContainer>
    )
}