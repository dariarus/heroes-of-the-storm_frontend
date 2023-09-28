export type TNavButton = {
  buttonName: string,
  id: string,
  onClick: (e: any) => void,
  isActive: string
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