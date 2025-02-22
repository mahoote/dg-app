import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import AppText from '@/app/components/text/AppText'

interface AppButtonProps extends TouchableOpacityProps {
    title: string
    size?: 'small' | 'large'
    color?: 'primary-400' | 'secondary-900'
    fullWidth?: boolean
}

/**
 * Displays a custom button with a title.
 * Two different sizes are available: small and large.
 * - Default size: large
 * - Default color: secondary-900
 * @param title
 * @param size
 * @param color
 * @param fullWidth
 * @param props
 * @constructor
 */
export default function AppButton({
    title,
    size = 'large',
    color = 'secondary-900',
    fullWidth = true,
    ...props
}: AppButtonProps) {
    const buttonBackgroundColor =
        color === 'primary-400' ? 'bg-primary-400' : 'bg-secondary-900'

    const buttonTextColor =
        color === 'primary-400' ? 'text-background' : 'text-foreground'

    const width = fullWidth ? 'w-full' : 'w-fit'

    let buttonStyles = 'rounded-xl p-1 ios:p-2'
    let textSize = 'text-xl-semibold'

    if (size === 'large') {
        buttonStyles = 'rounded-2xl p-2 ios:p-3'
        textSize = 'display-sm-semibold'
    }

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            className={`${buttonStyles} ${buttonBackgroundColor} ${width} justify-center`}
            {...props}
        >
            <AppText
                size={textSize}
                className="text-center"
                verticalAlign={true}
                color={buttonTextColor}
            >
                {title}
            </AppText>
        </TouchableOpacity>
    )
}
