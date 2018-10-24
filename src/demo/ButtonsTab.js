import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Button from '../buttons/Button';
import Icons from '../icons/Icons';

export default class ButtonsTab extends React.Component {
  renderIcon(icon) {
    return <View style={styles.itemContainer}>{icon}</View>;
  }

  renderAllIcons() {
    var list = [];

    for (var p in Icons) {
      if (Icons.hasOwnProperty(p)) {
        //console.log('Icons.' + p + '()');
        list.push(this.renderIcon(Icons[p]));
      }
    }

    return <View style={styles.listContainer}>{list}</View>;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.listContainer}>
          {/* LARGE FEATURED */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large featured" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large featured" disabled />
          </View>
          {/* LARGE FEATURED - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large featured"
              icon={<Icons.Cart />}
            />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large featured"
              icon={<Icons.Cart />}
              disabled
            />
          </View>
          {/* LARGE DEFAULT */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large" disabled />
          </View>
          {/* LARGE DEFAULT - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large" icon={<Icons.Cart />} />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large"
              icon={<Icons.Cart />}
              disabled
            />
          </View>

          {/* SMALL FEATURED */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="small featured" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="Button" className="small featured" disabled />
          </View>
          {/* SMALL DEFAULT */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="small" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="Button" className="small" disabled />
          </View>

          {/* FLAT FEATURED */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="flat featured" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="Button" className="flat featured" disabled />
          </View>
          {/* FLAT FEATURED - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="flat featured"
              icon={<Icons.Cart />}
            />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="flat featured"
              icon={<Icons.Cart />}
              disabled
            />
          </View>
          {/* FLAT DEFAULT */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="flat" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="Button" className="flat" disabled />
          </View>
          {/* FLAT DEFAULT - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="flat" icon={<Icons.Cart />} />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="flat"
              icon={<Icons.Cart />}
              disabled
            />
          </View>

          {/* LARGE  FEATURED SUCCESS */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large success featured" />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large success featured"
              disabled
            />
          </View>
          {/* LARGE FEATURED SUCCESS - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large success featured"
              icon={<Icons.CheckAlt />}
            />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large success featured"
              icon={<Icons.CheckAlt />}
              disabled
            />
          </View>
          {/* LARGE DEFAULT SUCCESS */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large success" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large success" disabled />
          </View>
          {/* LARGE DEFAULT SUCCESS - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large success"
              icon={<Icons.CheckAlt />}
            />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large success"
              icon={<Icons.CheckAlt />}
              disabled
            />
          </View>

          {/* LARGE  FEATURED Warning */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large Warning featured" />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large Warning featured"
              disabled
            />
          </View>
          {/* LARGE FEATURED Warning - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large Warning featured"
              icon={<Icons.Warning />}
            />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large Warning featured"
              icon={<Icons.Warning />}
              disabled
            />
          </View>
          {/* LARGE DEFAULT Warning */}
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large Warning" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="Button" className="large Warning" disabled />
          </View>
          {/* LARGE DEFAULT Warning - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large Warning"
              icon={<Icons.Warning />}
            />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="Button"
              className="large Warning"
              icon={<Icons.Warning />}
              disabled
            />
          </View>

          {/* LARGE  FEATURED ERROR */}
          <View style={styles.itemContainer50}>
            <Button title="error" className="large danger featured" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="error" className="large danger featured" disabled />
          </View>
          {/* LARGE FEATURED ERROR - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button
              title="error"
              className="large danger featured"
              icon={<Icons.Close />}
            />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="error"
              className="large danger featured"
              icon={<Icons.Close />}
              disabled
            />
          </View>
          {/* LARGE DEFAULT ERROR */}
          <View style={styles.itemContainer50}>
            <Button title="error" className="large danger" />
          </View>
          <View style={styles.itemContainer50}>
            <Button title="error" className="large danger" disabled />
          </View>
          {/* LARGE DEFAULT ERROR - WITH ICON */}
          <View style={styles.itemContainer50}>
            <Button
              title="error"
              className="large danger"
              icon={<Icons.Close />}
            />
          </View>
          <View style={styles.itemContainer50}>
            <Button
              title="error"
              className="large danger"
              icon={<Icons.Close />}
              disabled
            />
          </View>

          {/* ICON FEATURED */}
          <View style={styles.itemContainer}>
            <Button className="justIcon featured" icon={<Icons.Cloud />} />
          </View>
          <View style={styles.itemContainer}>
            <Button
              className="justIcon featured"
              icon={<Icons.Cloud />}
              disabled
            />
          </View>
          {/* ICON DEFAULT */}
          <View style={styles.itemContainer}>
            <Button className="justIcon" icon={<Icons.Cloud />} />
          </View>
          <View style={styles.itemContainer}>
            <Button className="justIcon" icon={<Icons.Cloud />} disabled />
          </View>
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
