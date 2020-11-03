import { getPromptGenreString, getPromptGenreInt } from '../services/promptTypeConverterService';

describe('promptTypeConverterService', () => {
  it('should should return the correct string', () => {
    const creativeInt = 1;
    const sciFiInt = 2;
    const fantasyInt = 3;
    const adviceInt = 4;
    const imageInt = 5;
    const journalInt = 6;
    const affirmationInt = 7;

    expect(getPromptGenreString(creativeInt)).toEqual('Creative');
    expect(getPromptGenreString(sciFiInt)).toEqual('Science Fiction');
    expect(getPromptGenreString(fantasyInt)).toEqual('Fantasy');
    expect(getPromptGenreString(adviceInt)).toEqual('Advice');
    expect(getPromptGenreString(imageInt)).toEqual('Image');
    expect(getPromptGenreString(journalInt)).toEqual('Journal');
    expect(getPromptGenreString(affirmationInt)).toEqual('Affirmation');
  });
  it('should should return the correct int', () => {
    const creativeString = 'Creative';
    const sciFiString = 'Science Fiction';
    const fantasyString = 'Fantasy';
    const adviceString = 'Advice';
    const imageString = 'Image';
    const journalString = 'Journal';
    const affirmationString = 'Affirmation';

    expect(getPromptGenreInt(creativeString)).toEqual(1);
    expect(getPromptGenreInt(sciFiString)).toEqual(2);
    expect(getPromptGenreInt(fantasyString)).toEqual(3);
    expect(getPromptGenreInt(adviceString)).toEqual(4);
    expect(getPromptGenreInt(imageString)).toEqual(5);
    expect(getPromptGenreInt(journalString)).toEqual(6);
    expect(getPromptGenreInt(affirmationString)).toEqual(7);
  });
});
