import { connect } from 'react-redux';
import { h } from 'react-hyperscript-helpers';
import Counter from 'components/Counter';

const CounterContainer = (props) => h(Counter, props);

const mapStateToProps = ({ counter: { count, operation } }) => ({ count, operation });

export default connect(mapStateToProps)(CounterContainer);
