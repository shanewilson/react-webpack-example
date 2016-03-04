import { div, h } from 'react-hyperscript-helpers';

import IncrementContainer from 'containers/IncrementContainer';
import DecrementContainer from 'containers/DecrementContainer';
import ResetContainer from 'containers/ResetContainer';
import CounterContainer from 'containers/CounterContainer';


const App = () => (
  div({
    children: [
      h(IncrementContainer),
      h(DecrementContainer),
      h(ResetContainer),
      h(CounterContainer),
    ],
  })
);

export default App;
