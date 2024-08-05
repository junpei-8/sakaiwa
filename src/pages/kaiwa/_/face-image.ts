import AngerPath from './images/face/anger.webp?url';
import EmbarrassmentPath from './images/face/embarrassment.webp?url';
import HappinessPath from './images/face/happiness.webp?url';
import JoyPath from './images/face/joy.webp?url';
import SadnessPath from './images/face/sadness.webp?url';

export const faceImageMap = {
  joy: JoyPath,
  anger: AngerPath,
  sadness: SadnessPath,
  happiness: HappinessPath,
  embarrassment: EmbarrassmentPath,
} as const;
