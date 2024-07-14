export enum RATING_TYPES {
  SELF = 'self',
  STAR = 'star',
}
export interface IRatingProps {
  rating: number
  type: RATING_TYPES
}
