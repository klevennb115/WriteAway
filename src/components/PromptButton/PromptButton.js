import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

const PromptButton = (props) => {
	const [genre] = useState("");
	useEffect(() => {
		getPrompts();
	}, [genre]);

		let fantasyPrompts = [];
		let journalPrompts = [];
		let scifiPrompts = [];
		let romancePrompts = [];
		let thrillerPrompts = [];

	const getArray = (promptName) => {
		switch (promptName) {
			case "journal":
				return journalPrompts;
			case "fantasy":
				return fantasyPrompts;
			case "scifi":
				return scifiPrompts;
			case "romance":
				return romancePrompts;
			case "thriller":
				return thrillerPrompts;
			default:
				break;
		}
	}
	const getPrompts = () => {
		props.dispatch({ type: "GET_PROMPTS" });
	};
	const sortPrompts = (unsortedPrompts) => {
		for (const entry of unsortedPrompts) {
			//sorts prompts by type
			if (entry.type_of_prompt === 2) {
				scifiPrompts.push(entry);
			} else if (entry.type_of_prompt === 6) {
				journalPrompts.push(entry);
			} else if (entry.type_of_prompt === 3) {
				fantasyPrompts.push(entry);
			} else if (entry.type_of_prompt === 8) {
				romancePrompts.push(entry);
			}
		}
	}

	const showPrompt = () => {
		swal("What kind of prompt would you like?", {
			buttons: {
				creative: {
					text: "Creative Prompt",
					value: "creative",
				},
				journal: {
					text: "Journal Prompt",
					value: "journal",
				},
				cancel: "Cancel",
			},
		}).then((value) => {
			switch (value) {
				case "journal":
					let array = getArray("journal");
					promptAlert(
						array[Math.floor(Math.random() * Math.floor(array.length))].text, array.length, array
					);
					break;
				case "creative":
					swal("What genre are you looking for?", {
						buttons: {
							fantasy: {
								text: "Fantasy",
								value: "fantasy",
							},
							romance: {
								text: "Romance",
								value: "romance",
							},
							scifi: {
								text: "Science Fiction",
								value: "scifi",
							},
							thriller: {
								text: "Thriller",
								value: "thriller",
							},
							cancel: true,
						},
					}).then((value) => {
						switch (value) {
							case "fantasy":
								array = getArray("fantasy");
								promptAlert(
									array[Math.floor(Math.random() * Math.floor(array.length))].text,
									array.length,
									array
								);
								break;
							case "romance":
								array = getArray("romance");
								promptAlert(
									array[Math.floor(Math.random() * Math.floor(array.length))]
										.text,
									array.length,
									array
								);
								break;
							case "scifi":
								array = getArray("scifi");
								promptAlert(
									array[Math.floor(Math.random() * Math.floor(array.length))]
										.text,
									array.length,
									array
								);
								break;
							case "thriller":
								array = getArray("thriller");
								promptAlert(
									array[Math.floor(Math.random() * Math.floor(array.length))]
										.text,
									array.length,
									array
								);
								break;
							default:
								break;
						}
					});
					break;
				default:
					break;
			}
		});
	};
	const promptAlert = (prompt, lengthOfPromptArray, array) => {
		swal(prompt, {
			buttons: {
				cancelButton: {text: "Cancel", value: {value:"cancel"}},
				pin: {
					text: "Use this prompt",
					value: {value:"pin"},
				},
				next: {
					value: { value: "next", length: lengthOfPromptArray, array: array },
				},
			},
		}).then((value) => {
			switch (value.value) {
				case "next":
					let array = value.array;
					promptAlert(
						array[Math.floor(Math.random() * Math.floor(value.length))].text, value.length, array
					);
					break;

				case "pin":
					let action = {
						type: "PIN_PROMPT",
						payload: prompt,
					};
					props.dispatch(action);
					break;

				default:
					break;
			}
		});
	};
	sortPrompts(props.prompt);

	return (
		<div>
			<button onClick={showPrompt} className="ph-button">
				I need a prompt!
			</button>
		</div>
	);
};
 
const mapStoreToProps = state => ({
    prompt: state.prompt,
});
export default connect(mapStoreToProps)(PromptButton);