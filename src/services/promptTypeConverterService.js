export const getPromptGenreString = (number) => {
	switch (number) {
		case 1:
			return 'Creative'
		case 2:
			return 'Science Fiction'
		case 3:
			return 'Fantasy'
		case 4:
			return 'Advice'
		case 5:
			return 'Image'
		case 6:
			return 'Journal'
		case 7:
			return 'Affirmation'
		default:
			break;
	}
};

export const getPromptGenreInt = (string) => {
	switch (string) {
		case "Creative":
			return 1;
		case "Science Fiction":
			return 2 ;
		case "Fantasy":
			return 3;
		case "Advice":
			return 4;
		case "Image":
			return 5;
		case "Journal":
			return 6;
		case "Affirmation":
			return 7;
		default:
			break;
	}};

