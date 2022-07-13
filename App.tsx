import { SafeAreaView, Text } from "react-native";
import stylesheets from "./styles/stylesheets";

const App = () => (
	<SafeAreaView style={stylesheets.androidSafeAreaView}>
		<Text>Youniq App</Text>
	</SafeAreaView>
);

export default App;
