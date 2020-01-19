import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainStack from './MainStack';

export default createBrowserApp(MainStack, { history: 'hash' });