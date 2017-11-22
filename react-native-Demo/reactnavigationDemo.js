import React from 'react';
import { Button, ScrollView, Text, View} from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';


const MyNavScreen = ({ navigation, banner }) => (
    <SafeAreaView>
        <Text style={{textAlign:'center', color:'red'}}>{banner}</Text>
        <Button
            onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
            title="Go to a profile screen"
        />
        <Button
            onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
            title="Go to a photos screen"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </SafeAreaView>
);

const MyHomeScreen = ({ navigation }) => (
    <MyNavScreen banner="Home Screen" navigation={navigation} />
);

MyHomeScreen.navigationOptions = {
    title: 'Welcome',
};

const MyPhotosScreen = ({ navigation }) => (
    <MyNavScreen
        banner={`${navigation.state.params.name}'s Photos`}
        navigation={navigation}
    />
);
MyPhotosScreen.navigationOptions = {
    title: 'Photos',
};

const MyProfileScreen = ({ navigation }) => (
    <MyNavScreen
        banner={`${navigation.state.params.mode === 'edit'
            ? 'Now Editing '
            : ''}${navigation.state.params.name}'s Profile`}
        navigation={navigation}
    />
);

MyProfileScreen.navigationOptions = props => {
    const { navigation } = props;
    const { state, setParams } = navigation;
    const { params } = state;
    return {
        headerTitle: `${params.name}'s Profile!`,
        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode.
        headerRight: (
            <Button
                title={params.mode === 'edit' ? 'Done' : 'Edit'}
                onPress={() =>
                    setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
            />
        ),
        headerStyle: {
            backgroundColor: 'green'
        },
        headerTintColor:'red',
        
    };
};





const SimpleStack = StackNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Profile: {
        path: 'people/:name',
        screen: MyProfileScreen,
        navigationOptions:({
            headerTitle:'我是都躲着的标题'
        })
    },
    Photos: {
        path: 'photos/:name',
        screen: MyPhotosScreen,
    },
});

export default SimpleStack;
