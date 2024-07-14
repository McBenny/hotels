enum IMAGE_TYPES {
  PRIMARY = 'PRIMARY',
}

enum RATING_TYPES {
  SELF = 'self',
  STAR = 'star',
}

enum OFFER_TYPES {
  MEMBER = 'MEMBER',
}

enum CANCELLATION_TYPES {
  FREE_CANCELLATION = 'FREE_CANCELLATION',
  NOT_REFUNDABLE = 'NOT_REFUNDABLE',
}

export interface IHotelProps {
  id: string
  property: {
    propertyId: string
    title: string
    address: string[]
    previewImage: {
      url: string
      caption: string
      imageType: IMAGE_TYPES.PRIMARY
    },
    rating: {
      ratingValue: number
      ratingType: RATING_TYPES.SELF
    }
  },
  offer: {
    promotion: {
      title: string
      type: OFFER_TYPES.MEMBER
    },
    name: string
    displayPrice: {
      amount: number
      currency: string
    },
    savings: {
      amount: number
      currency: string
    } | null,
    cancellationOption: {
      cancellationType: CANCELLATION_TYPES.NOT_REFUNDABLE
    }
  }
}
