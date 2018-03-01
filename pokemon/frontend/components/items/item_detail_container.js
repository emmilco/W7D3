import { connect } from 'react-redux';
import ItemDetail from './item_detail.jsx';
import { selectPokemonItem } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.itemId;
  return {
    itemDetails: selectPokemonItem(state, itemId)
  };
};

export default connect(mapStateToProps)(ItemDetail);
