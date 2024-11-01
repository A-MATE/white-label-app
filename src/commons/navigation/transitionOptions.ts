import {
  StackCardInterpolationProps,
  TransitionPresets,
} from '@react-navigation/stack';

export const transitionOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  cardStyleInterpolator: ({
    current,
    layouts,
    closing,
  }: StackCardInterpolationProps) => ({
    cardStyle: {
      opacity: current.progress,
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [-1, 1],
            outputRange: [layouts.screen.width, 1],
          }),
        },
        {
          scale: closing
            ? current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.1, 1],
              })
            : 1,
        },
      ],
    },
  }),
};
