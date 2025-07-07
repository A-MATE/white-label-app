import config from 'src/config/config';

type Feature = keyof typeof config.features;

const useFeatureFlag = (feature: Feature) => {
  const isEnabled = config.features[feature].enabled;
  const version = config.features[feature].version;

  return {isEnabled, version};
};

export default useFeatureFlag;
