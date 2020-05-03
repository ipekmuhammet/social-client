import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import ConnectionPopup from '../components/popups/ConnectionPopup'
import NeedToLoginPopup from '../components/popups/NeedToLoginPopup'
import ClearCartPopup from '../components/popups/ClearCartPopup'
import GlobalMessagePopup from '../components/popups/GlobalMessagePopup'


const GlobalScreen = () => (
	<>
		<ConnectionPopup />
		<NeedToLoginPopup />
		<ClearCartPopup />
		<GlobalMessagePopup>
			<Ionicons name="md-warning" size={48} color="red" />
		</GlobalMessagePopup>
	</>
)

export default GlobalScreen
