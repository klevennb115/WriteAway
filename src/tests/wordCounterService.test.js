import { countWords } from '../services/wordCounterService';

describe('Word Counter Service', () => {
  it('should count the words correctly', () => {
    const wordSample = { blocks: [{ text: 'One Two Three Four Five' }] };

    expect(countWords(wordSample)).toEqual(5);
  });

  it('should return null if no words', () => {
    const wordSample = { blocks: [{ text: '' }] };

    expect(countWords(wordSample)).toEqual(0);
  });
});
