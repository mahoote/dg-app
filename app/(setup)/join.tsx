import React from 'react'
import { TextInput, View } from 'react-native'
import AppText from '@/app/components/AppText'
import NavButtons from '@/app/components/buttons/NavButtons'
import AppView from '@/app/components/views/AppView'

export default function Join() {
    return (
        <AppView isRoot={true} className="items-center">
            <AppView className="items-center px-10">
                <NavButtons />
                <AppText size="display-sm-regular">Bli med i spill</AppText>
                <View className="w-full mt-20">
                    <View className="gap-4">
                        <View className="items-center gap-2">
                            <AppText>Spill som gjest</AppText>
                            <View className="w-full ">
                                <TextInput
                                    className="bg-foreground text-background rounded-full w-full px-6 text-lg-regular h-16"
                                    placeholder="Skriv inn navn"
                                    multiline={false}
                                    textAlignVertical="center"
                                    maxLength={20}
                                />
                            </View>
                        </View>
                        <View className="items-center gap-2">
                            <AppText>Kode</AppText>
                            <View className="w-40">
                                <TextInput
                                    className="bg-primary-300 text-background text-lg-semibold rounded-full w-full px-4 text-center tracking-[6px] h-16"
                                    placeholder="-"
                                    keyboardType="number-pad"
                                    multiline={false}
                                    textAlignVertical="center"
                                    maxLength={6}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </AppView>
        </AppView>
    )
}
