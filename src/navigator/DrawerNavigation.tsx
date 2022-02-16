import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { color } from 'react-native-reanimated';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/rootReducers';
import { TouchableOpacity } from 'react-native-gesture-handler';
import generalTheme from '../theme/generalTheme';

const Drawer = createDrawerNavigator();

const CustomDrawerSidebar = (props: any) => {
  
  const {email} = useSelector((state: RootState) => state.auth.user);

    return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#0069d4'}}>
        <View style={{...styles.headerSidebar}}>
              <Image style={styles.headerSidebar__image} source={require('../assets/avatarImage.png')} />
              <View>
                  <Text style={styles.headerSidebar__title}> {email} </Text>
                  <Text style={styles.headerSidebar__subtitle}> Ciudad </Text>
              </View>
        </View>
        <DrawerItemList  {...props} />
        <View style={styles.footerSidebar}> 
          <TouchableOpacity>
            <Text style={generalTheme.buttonsText}> Cerrar sesión </Text>
          </TouchableOpacity>
        </View>

    </View>
    )
}

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: '#FFFFFF',
      drawerActiveBackgroundColor: '#0057d4',
      drawerActiveTintColor: '#FFFFFF',
      drawerItemStyle: {position: 'relative', paddingVertical: 10},
      drawerLabelStyle: {position: 'absolute', marginTop: -10, left: '50%'},
      drawerInactiveTintColor: '#FFFFFF',
      headerStyle: {backgroundColor: '#0069d4'},
    }}
    initialRouteName="home"
    drawerContent={(props) => <CustomDrawerSidebar {...props} />}
    >
      <Drawer.Screen  name="home" options={{ drawerLabel: 'Home' }} component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  sidebarTop: {
    margin: 0,
    padding: 0,
  },
  itemOfList: {
    color: '#FFFFFF',
  },
  headerSidebar: {
    backgroundColor: '#1f517d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20
  },
  footerSidebar: {
    backgroundColor: '#1f517d',
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerSidebar__image: {
      width: 50,
      height: 50,
      marginRight: 10
  },
  headerSidebar__title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFFFFF'
    },
    headerSidebar__subtitle: {
      fontSize: 12,
      color: '#FFFFFF'
  }
});