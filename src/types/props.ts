export type TNavButton = {
  buttonName: string,
}

export type TShowRotationCheckbox = {
  label: any[] | string,
}

export type TComplexityCheckbox = {
  complexity: string,
  isActive: boolean,
  onChange: () => void;
}

export type TRoleCheckbox = {
  role: string,
  isActive: boolean,
  onChange: () => void
}

export type THeroCard = {
  name: string,
  image: string,
  icon: string
}