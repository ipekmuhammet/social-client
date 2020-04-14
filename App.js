import React from 'react'
import { AppState, AsyncStorage } from 'react-native'
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
import GlobalScreen from './screens/GlobalScreen'
import useLinking from './navigation/useLinking'

import axiosMiddleware from './utils/axios'

import { SET_NETWORK_STATUS } from './actions/network-actions'
import { SET_CONNECTION_POPUP_STATE } from './actions/global-actions'

//	const networkMiddleWare = store => next => action => {
//		console.log(store.getState().networkReducer.networkStatus)
//		console.log(action.type === SET_NETWORK_STATUS || store.getState().networkReducer.networkStatus)
//		if (action.type === SET_NETWORK_STATUS || store.getState().networkReducer.networkStatus) {
//			next(action)
//		} else {
//			next({
//				type: SET_CONNECTION_POPUP_STATE, payload: {
//					connectionPopupState: true
//				}
//			})
//		}
//	}

const store = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator()

axiosMiddleware(store)

const networkListener = () => {
	NetInfo.addEventListener(state => {
		store.dispatch({
			type: SET_NETWORK_STATUS,
			payload: {
				networkStatus: state.isConnected
			}
		})
	})
}

const handleAppStateChange = (nextAppState) => {
	if (nextAppState.match(/inactive|background/)) {
		AsyncStorage.setItem('cart', JSON.stringify(store.getState().reducer1.cart))
	}
}

export default function App(props) {

	networkListener()
	AppState.addEventListener('change', handleAppStateChange)

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
				<GlobalScreen />
				<NavigationContainer ref={containerRef} initialState={initialNavigationState}>
					<Stack.Navigator initialRouteName={'Loading'}>
						<Stack.Screen name='Welcome' component={WelcomeStack} options={{ headerShown: false }} />
						<Stack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false }} />
						<Stack.Screen name='Root' component={BottomTabNavigator} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		)
	}
}