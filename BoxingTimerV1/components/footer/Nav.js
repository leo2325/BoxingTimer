import React from 'react';
import { View, Text, Pressable, } from 'react-native';
import styles from '../../styles/footer.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Nav = () => {
  	return (
		<View style={styles.navContainer}>

			<Pressable>
				<Icon name="trophy" style={styles.navIcon} />
				<Text style={styles.menuItemText}>Home</Text>
			</Pressable>
			
			<Pressable>
				<Icon name="volume-off" style={styles.navIcon} />
				<Text style={styles.menuItemText}>Audio</Text>
			</Pressable>

			<Pressable>
				<Icon name="clock-o" style={styles.navIcon} />
				<Text style={styles.menuItemText}>Timer</Text>
			</Pressable>

			<Pressable>
				<Icon name="list" style={styles.navIcon} />
				<Text style={styles.menuItemText}>Programs</Text>
			</Pressable>

			<Pressable>
				<Icon name="gear" style={styles.navIcon} />
				<Text style={styles.menuItemText}>Options</Text>
			</Pressable>

		</View>
  );
};

export default Nav;
