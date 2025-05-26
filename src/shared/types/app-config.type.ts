import {Theme} from './theme.type';

export interface FeatureConfig {
  enabled: boolean;
  version: number;
}

export interface Features {
  landing: FeatureConfig;
  signin: FeatureConfig;
  signup: FeatureConfig;
  profile: FeatureConfig;
}

export interface AppConfig {
  app_name: string;
  bundle_id: string;
  theme: Theme;
  features: Features;
}
