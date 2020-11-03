import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

const PromptButton = (props) => {
  const getPrompts = () => {
    props.dispatch({ type: 'GET_PROMPTS' });
  };

  const [genre] = useState('');

  useEffect(() => {
    getPrompts();
  }, [genre]);

  const fantasyPrompts = [];
  const journalPrompts = [];
  const scifiPrompts = [];
  const romancePrompts = [];
  const thrillerPrompts = [];

  const getArray = (promptName) => {
    switch (promptName) {
      case 'journal':
        return journalPrompts;
      case 'fantasy':
        return fantasyPrompts;
      case 'scifi':
        return scifiPrompts;
      case 'romance':
        return romancePrompts;
      case 'thriller':
        return thrillerPrompts;
      default:
        break;
    }
  };

  const sortPrompts = (unsortedPrompts) => {
    unsortedPrompts.forEach((entry) => {
      if (entry.type_of_prompt === 2) {
        scifiPrompts.push(entry);
      } else if (entry.type_of_prompt === 6) {
        journalPrompts.push(entry);
      } else if (entry.type_of_prompt === 3) {
        fantasyPrompts.push(entry);
      } else if (entry.type_of_prompt === 8) {
        romancePrompts.push(entry);
      }
    });
  };

  const promptAlert = (prompt, lengthOfPromptArray, arr) => {
    swal(prompt, {
      buttons: {
        cancelButton: { text: 'Cancel', value: { value: 'cancel' } },
        pin: {
          text: 'Use this prompt',
          value: { value: 'pin' },
        },
        next: {
          value: { value: 'next', length: lengthOfPromptArray, arr },
        },
      },
    }).then((value) => {
      switch (value.value) {
        case 'next':
        { const { array } = value;
          promptAlert(
            array[Math.floor(Math.random() * Math.floor(value.length))].text,
            value.length,
            array,
          );
          break; }
        case 'pin': {
          const action = {
            type: 'PIN_PROMPT',
            payload: prompt,
          };
          props.dispatch(action);
          break;
        }
        default:
          break;
      }
    });
  };

  const showPrompt = () => {
    let array = [];

    swal('What kind of prompt would you like?', {
      buttons: {
        creative: {
          text: 'Creative Prompt',
          value: 'creative',
        },
        journal: {
          text: 'Journal Prompt',
          value: 'journal',
        },
        cancel: 'Cancel',
      },
    }).then((value) => {
      switch (value) {
        case 'journal': {
          array = getArray('journal');
          promptAlert(
            array[Math.floor(Math.random() * Math.floor(array.length))].text, array.length, array,
          );
          break; }
        case 'creative':
          swal('What genre are you looking for?', {
            buttons: {
              fantasy: {
                text: 'Fantasy',
                value: 'fantasy',
              },
              romance: {
                text: 'Romance',
                value: 'romance',
              },
              scifi: {
                text: 'Science Fiction',
                value: 'scifi',
              },
              thriller: {
                text: 'Thriller',
                value: 'thriller',
              },
              cancel: true,
            },
          }).then((val) => {
            switch (val) {
              case 'fantasy':
                array = getArray('fantasy');
                promptAlert(
                  array[Math.floor(Math.random() * Math.floor(array.length))].text,
                  array.length,
                  array,
                );
                break;
              case 'romance':
                array = getArray('romance');
                promptAlert(
                  array[Math.floor(Math.random() * Math.floor(array.length))]
                    .text,
                  array.length,
                  array,
                );
                break;
              case 'scifi':
                array = getArray('scifi');
                promptAlert(
                  array[Math.floor(Math.random() * Math.floor(array.length))]
                    .text,
                  array.length,
                  array,
                );
                break;
              case 'thriller':
                array = getArray('thriller');
                promptAlert(
                  array[Math.floor(Math.random() * Math.floor(array.length))]
                    .text,
                  array.length,
                  array,
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

  sortPrompts(props.prompt);

  return (
    <div>
      <button onClick={showPrompt} className="ph-button" type="button">
        I need a prompt!
      </button>
    </div>
  );
};

const mapStoreToProps = (state) => ({
  prompt: state.prompt,
});
export default connect(mapStoreToProps)(PromptButton);
