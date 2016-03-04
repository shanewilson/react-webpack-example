import * as counter from './counter';
const reducer = counter.default;

describe('counter', () => {
  describe('actions', () => {
    it('should create action to increment count', () => {
      expect(counter.increment()).to.deep.equal({ type: counter.COUNTER_INCREMENT });
    });
    it('should create action to decrement count', () => {
      expect(counter.decrement()).to.deep.equal({ type: counter.COUNTER_DECREMENT });
    });
    it('should create action to reset count', () => {
      expect(counter.reset()).to.deep.equal({ type: counter.COUNTER_RESET });
    });
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {})).to.deep.equal(counter.INITIAL_STATE);
    });
    it('should handle COUNTER_INCREMENT', () => {
      expect(
        reducer(counter.INITIAL_STATE, { type: counter.COUNTER_INCREMENT })
      ).to.deep.equal(
        { operation: counter.COUNTER_INCREMENT, count: 1 }
      );
    });
    it('should handle COUNTER_DECREMENT', () => {
      expect(
        reducer(counter.INITIAL_STATE, { type: counter.COUNTER_DECREMENT })
      ).to.deep.equal(
        { operation: counter.COUNTER_DECREMENT, count: -1 }
      );
    });
    it('should handle COUNTER_RESET', () => {
      expect(
        reducer({ count: 55 }, { type: counter.COUNTER_RESET })
      ).to.deep.equal(
        { operation: counter.COUNTER_RESET, count: 0 }
      );
    });
  });
});
