import React from 'react'
import { SplashScreen } from 'expo'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NetInfo from '@react-native-community/netinfo'

import rootReducer from './reducers/root-reducer'

import BottomTabNavigator from './navigation/BottomTabNavigator'
import WelcomeStack from './screens/stacks/WelcomeStack'
import LoadingScreen from './screens/LoadingScreen'
import useLinking from './navigation/useLinking'

import { SET_NETWORK_STATUS } from './actions/network-actions'

const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator()

const networkListener = () => {
	NetInfo.addEventListener(state => {
		store.dispatch({
			type: SET_NETWORK_STATUS,
			payload: {
				networkStatus: state.isConnected
			}
		})
		console.log('Is connected?', state.isConnected);
	})
}

export default function App(props) {

	networkListener()

	const [isLoadingComplete, setLoadingComplete] = React.useState(false)
	const [initialNavigationState, setInitialNavigationState] = React.useState()
	const containerRef = React.useRef()
	const { getInitialState } = useLinking(containerRef)

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHide()
				setInitialNavigationState(await getInitialState())

				// Load fonts
				// await Font.loadAsync({
				//  ...Ionicons.font,
				//   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
				// })
			} catch (e) {
				console.warn(e)
			} finally {
				setLoadingComplete(true)
				SplashScreen.hide()
			}
		}

		loadResourcesAndDataAsync()
	}, [])

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return null
	} else {
		return (
			<Provider store={store}>
				<NavigationContainer ref={containerRef} initialState={initialNavigationState}>
					<Stack.Navigator initialRouteName={'Welcome'}>
						<Stack.Screen name='Welcome' component={WelcomeStack} options={{ headerShown: false }} />
						<Stack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false }} />
						<Stack.Screen name='Root' component={BottomTabNavigator} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		)
	}
}