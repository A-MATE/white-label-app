import {Text, View, Dimensions} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './HeaderCarousel.styles';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

import {HeaderMatchCard} from '../HeaderMatchCard/HeaderMatchCard';

const data = [...new Array(6).keys()];
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HeaderCarousel = ({}) => {
  const styles = useStyle(styleSheet);
  const {_colors} = useTheme();
  const ref = React.useRef<ICarouselInstance>(null);

  

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        autoPlay={true}
        autoPlayInterval={6000}
        width={width}
        height={width / 1.4}
        data={data}
        renderItem={({index: _index}) => <HeaderMatchCard />}
      />
    </View>
  );
};

export default HeaderCarousel;
