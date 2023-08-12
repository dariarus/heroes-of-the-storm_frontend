export enum ButtonType {
  MAIN = 'main',
  GUIDE = 'guide',
  TIER = 'tier',
  RANDOMIZER = 'randomizer'
}

export type TButton = {
  buttonName: string,
  buttonType?: 'main' | 'guide' | 'tier' | 'randomizer'
}