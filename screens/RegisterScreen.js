import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RegisterScreen extends React.Component {
    render () {
        return (
            <view>
                <text> Register Screen</text>
            </view>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

