import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import maps from './maps';
import SetLocationinfo from './SetLocationinfo';

const AppNavigator = createStackNavigator(
	{
		First: maps,
		second: SetLocationinfo,
	},
	{
		initialRouteName: 'First',
	},
);

export default createAppContainer(AppNavigator);
