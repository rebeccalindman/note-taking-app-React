import PropTypes from 'prop-types'

const ProductCardPropTypes = {
    product: PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    isAddedToCart: PropTypes.bool.isRequired,
    isRemovedFromCart: PropTypes.bool.isRequired,
}
