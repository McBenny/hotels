import Rating from '../Rating/Rating'
import { IHotelProps } from './interface'
import './hotel-card.scss'

const cancellations = {
  FREE_CANCELLATION: 'Free cancellation',
  NOT_REFUNDABLE: null,
}

const HotelCard = (props: IHotelProps) => {
  const {
    property: {
      title,
      address,
      previewImage: { url, caption },
      rating: { ratingValue, ratingType },
    },
    offer: {
      name = '',
      promotion: { title: promotionTitle },
      displayPrice: { amount, currency = 'AUD' },
      savings = '',
      cancellationOption: { cancellationType },
    },
  } = props

  if (title !== '' && amount) {
    return (
      <div className='hotel'>
        <div className='hotel__visual'>
          {url && (
            <>
              <img src={url} alt={caption} className='hotel__image' />
              <span className='hotel__deal'>{promotionTitle}</span>
            </>
          )}
        </div>
        <div className='hotel__info'>
          <h2 className='hotel__name'>
            <span className='hotel__title'>{title}</span>
            {ratingValue && <Rating rating={ratingValue} type={ratingType} />}
          </h2>
          {address && address.length > 0 && <p className='hotel__address'>{address.map((addressLine) => `${addressLine} `)}</p>}
          <div className='hotel__details'>
            <div className='hotel__conditions'>
              {name !== '' && <p className='hotel__offer'><a href='#offerLink' className='hotel__link'>{name}</a></p>}
              {cancellations[cancellationType] && <p className='hotel__cancellation'>{cancellations[cancellationType]}</p>}
            </div>
            <div className='hotel__amounts'>
              <p className='hotel__night'>
                1 night total ({currency})
              </p>
              <div className='hotel__price'>
                <span className='hotel__currency'>$</span>
                <span className='hotel__value'>{amount}</span>
              </div>
              {savings && savings.amount && <p className='hotel__saving'>Save ${savings.amount}</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export default HotelCard
