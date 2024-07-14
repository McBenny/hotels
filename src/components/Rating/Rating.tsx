import { IRatingProps, RATING_TYPES } from './interface'
import './rating.scss'

const Rating = (props: IRatingProps) => {
  const { rating, type } = props
  const percent = { '--percent': `${rating / 5 * 100}%` } as React.CSSProperties
  return (
    <meter
      min={0}
      max={5}
      value={rating}
      className={`rating ${type === RATING_TYPES.SELF ? 'rating--self' : 'rating--star'}`}
      style={percent}
      title={`${rating} out of 5`}
    />
  )
}

export default Rating
