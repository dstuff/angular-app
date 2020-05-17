export enum Type {
  systemHealth,
  preCalving,
  distress,
  systemHeat,
  changeGroup,
  calving,
  herdEntry,
  birth,
  breeding,
  dryOff
}

export const mapEventType = {
  [Type.systemHealth]: 'systemHealth',
  [Type.preCalving]: 'preCalving',
  [Type.distress]: 'distress',
  [Type.systemHeat]: 'systemHeat',
  [Type.changeGroup]: 'changeGroup',
  [Type.calving]: 'calving',
  [Type.herdEntry]: 'herdEntry',
  [Type.birth]: 'birth',
  [Type.breeding]: 'breeding',
  [Type.dryOff]: 'dryOff',
};

