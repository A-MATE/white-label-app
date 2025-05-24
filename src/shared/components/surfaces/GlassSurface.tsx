import {BlurView} from '@react-native-community/blur';
import {Canvas, Rect, SweepGradient, vec} from '@shopify/react-native-skia';
import React, {FC, useState} from 'react';
import {View} from 'react-native';
import useStyle from 'src/shared/hooks/useStyle';
import styleSheet from './GlassSurface.styles';

export interface DimensionsType {
  height: number;
  width: number;
}

type GlassSurfaceProps = {
  children: React.ReactNode;
  colors: string[];
};

const GlassSurface: FC<GlassSurfaceProps> = ({children, colors}) => {
  const styles = useStyle(styleSheet);
  const [dimensions, setDimensions] = useState<DimensionsType | null>(null);

  return (
    <View
      style={styles.container}
      onLayout={e =>
        setDimensions({
          height: e.nativeEvent.layout.height,
          width: e.nativeEvent.layout.width,
        })
      }>
      {dimensions && (
        <Canvas
          style={[
            styles.canva,
            {height: dimensions.height, width: dimensions.width},
          ]}>
          <Rect
            x={30}
            y={30}
            width={dimensions.width - (200 * 30) / 100}
            height={dimensions.height - (200 * 30) / 100}>
            {/* <BlurMask blur={12} style="normal" /> */}
            <SweepGradient
              start={0}
              end={360}
              c={vec(dimensions.width / 2, dimensions.height / 2)}
              colors={colors}
            />
          </Rect>
        </Canvas>
      )}

      <BlurView
        style={styles.blurView}
        blurType="thinMaterialDark"
        blurAmount={30}
      />

      <View>{children}</View>
    </View>
  );
};

export default GlassSurface;
