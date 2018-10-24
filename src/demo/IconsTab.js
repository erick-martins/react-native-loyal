import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Icon from '../icons/Icon';
import iconList from '../icons/iconList.json';

export default class IconsTab extends React.Component {
  renderIcon(icon) {
    return <View style={styles.itemContainer} key={icon.id}><Icon name={icon.name} /></View>;
  }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.listContainer}>
              { iconList.map(this.renderIcon) }
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    width: '100%',
  },
  listContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: '25%',
    padding: 10,
  },
  itemContainer50: {
    width: '50%',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
