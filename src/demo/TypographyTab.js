import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Icons from '../icons/Icons';
import Text from '../text/Text';

import Theme from '../theme';

export default class TypographyTab extends React.Component {
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
    //theme, size, variant, weight

    const theme = Theme.getCurrent();

    const containerLight = {
      backgroundColor: theme.getColorSet('light').gray_5,
      paddingVertical: 50,
      paddingHorizontal: 20,
    };

    const containerDark = {
      backgroundColor: theme.getColorSet('dark').brand_5,
      paddingVertical: 50,
      paddingHorizontal: 20,
    };

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={containerLight}>
          <Text.Headline>Headline </Text.Headline>
          <Text.Title>Title </Text.Title>
          <Text.Title2>Title2 </Text.Title2>
          <Text.Title3>Title3 </Text.Title3>

          <Text.Body>Body </Text.Body>
          <Text.Body className="bold">Body bold</Text.Body>
          <Text.Body className="featured">Body featured</Text.Body>
          <Text.Body className="featured bold">Body bold featured</Text.Body>

          <Text.AltBody>Secundary Body </Text.AltBody>
          <Text.AltBody className="bold">Secundary Body bold</Text.AltBody>
          <Text.AltBody className="featured">
            Secundary Body featured
          </Text.AltBody>
          <Text.AltBody className="featured bold">
            Secundary Body featured bold
          </Text.AltBody>

          <Text.LargeBody>LargeBody </Text.LargeBody>
          <Text.LargeBody className="bold">LargeBody bold</Text.LargeBody>
          <Text.LargeBody className="featured">
            LargeBody featured
          </Text.LargeBody>
          <Text.LargeBody className="featured bold">
            LargeBody featured bold
          </Text.LargeBody>

          <Text>Subtitle </Text>
          <Text.Subtitle className="featured">Subtitle Featured</Text.Subtitle>

          <Text.Subtitle className="success">Success</Text.Subtitle>
          <Text.Subtitle className="warning">Warning</Text.Subtitle>
          <Text.Subtitle className="danger">Error</Text.Subtitle>
        </View>

        <View style={containerDark}>
          <Text.Headline className="dark">Headline </Text.Headline>
          <Text.Title className="dark">Title </Text.Title>
          <Text.Title2 className="dark">Title2 </Text.Title2>
          <Text.Title3 className="dark">Title3 </Text.Title3>

          <Text.Body className="dark">Body </Text.Body>
          <Text.Body className="dark bold">Body bold</Text.Body>
          <Text.Body className="dark featured">Body featured</Text.Body>
          <Text.Body className="dark featured bold">
            Body bold featured
          </Text.Body>

          <Text.AltBody className="dark">Secundary Body </Text.AltBody>
          <Text.AltBody className="dark bold">Secundary Body bold</Text.AltBody>
          <Text.AltBody className="dark featured">
            Secundary Body featured
          </Text.AltBody>
          <Text.AltBody className="dark featured bold">
            Secundary Body featured bold
          </Text.AltBody>

          <Text.LargeBody className="dark">LargeBody </Text.LargeBody>
          <Text.LargeBody className="dark bold">LargeBody bold</Text.LargeBody>
          <Text.LargeBody className="dark featured">
            LargeBody featured
          </Text.LargeBody>
          <Text.LargeBody className="dark featured bold">
            LargeBody featured bold
          </Text.LargeBody>

          <Text.Subtitle className="dark">Subtitle </Text.Subtitle>
          <Text.Subtitle className="dark featured">
            Subtitle Featured
          </Text.Subtitle>

          <Text.Subtitle className="dark success">Success</Text.Subtitle>
          <Text.Subtitle className="dark warning">Warning</Text.Subtitle>
          <Text.Subtitle className="dark danger">Error</Text.Subtitle>
        </View>

        {/*
        <Text theme={ TextThemes.LIGHT_HEADLINE }>Headline</Text>
        <Text theme={ TextThemes.LIGHT_TITLE_1 }>Title 1</Text>
        <Text theme={ TextThemes.LIGHT_TITLE_2 }>Title 2</Text>
        <Text theme={ TextThemes.LIGHT_TITLE_3 }>Title 3</Text>

        <Text theme={ TextThemes.LIGHT_BODY }>Body</Text>
        <Text theme={ TextThemes.LIGHT_BODY_BOLD }>Body Bold</Text>
        <Text theme={ TextThemes.LIGHT_BODY_FEATURED }>Body Featured</Text>
        <Text theme={ TextThemes.LIGHT_BODY_FEATURED_BOLD }>Body Featured Bold</Text>

        <Text theme={ TextThemes.LIGHT_BODY_SECUNDARY }>Body Secundary</Text>
        <Text theme={ TextThemes.LIGHT_BODY_SECUNDARY_BOLD }>Body Secundary Bold</Text>
        <Text theme={ TextThemes.LIGHT_BODY_SECUNDARY_FEATURED }>Body Secundary Featured</Text>
        <Text theme={ TextThemes.LIGHT_BODY_SECUNDARY_FEATURED_BOLD }>Body Sec. Featured Bold</Text>


        <Text theme={ TextThemes.LIGHT_BODY_LARGE }>Body Large</Text>
        <Text theme={ TextThemes.LIGHT_BODY_LARGE_BOLD }>Body Large Bold</Text>
        <Text theme={ TextThemes.LIGHT_BODY_LARGE_FEATURED }>Body Large Featured</Text>
        <Text theme={ TextThemes.LIGHT_BODY_LARGE_FEATURED_BOLD }>Body Large Featured Bold</Text>


        <Text theme={ TextThemes.LIGHT_BODY_TRANSPARENT }>Body Transparent</Text>
        <Text theme={ TextThemes.LIGHT_SUBTITLE }>Subtitle</Text>
        <Text theme={ TextThemes.LIGHT_SUCCESS }>Success</Text>
        <Text theme={ TextThemes.LIGHT_ERROR }>Error</Text>
          */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 50,
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
