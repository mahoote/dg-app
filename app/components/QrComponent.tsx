import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import AppText from '@/app/components/text/AppText'

export default function QrComponent() {
    const webUrl = 'http://192.168.197.117:8081/join' // TODO: Change to actual URL

    return (
        <View className="flex-1 items-center justify-between">
            <AppText size="display-sm-regular">Martin's spill</AppText>
            <View className="gap-8 items-center">
                <View className="bg-white p-3 rounded-md">
                    <QRCode
                        value={webUrl}
                        size={200}
                        color="black"
                        backgroundColor="white"
                    />
                </View>
                <AppText>Scan QR med mobilkamera</AppText>
            </View>
            <View className="h-[1px] w-24 bg-accent" />
            <View className="items-center gap-5 pb-10">
                <AppText>Eller skriv inn koden</AppText>
                <AppText size="display-lg-bold" style={{ letterSpacing: 10 }}>
                    12345
                </AppText>
                <Link href={webUrl}>
                    <AppText className="underline">www.splashd.no/join</AppText>
                </Link>
            </View>
        </View>
    )
}
