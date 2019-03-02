import React from 'react';
import renderer from 'react-test-renderer';
import Question from './Question';

describe('Question component', () => {

  test('renders correctly without props', () => {
    const QuestionComponent = renderer.create(<Question/>).toJSON();
    expect(QuestionComponent).toMatchSnapshot();
  });

  test('renders with props', () => {
    const question = {
      "id": 5129,
      "answer": "SALT II",
      "question": "Acronym used to refer to the treaty signed by Brezhnev \u0026 Carter in Vienna in June",
      "value": 100,
      "airdate": "1988-11-10T12:00:00.000Z",
      "created_at": "2014-02-11T22:49:55.954Z",
      "updated_at": "2014-02-11T22:49:55.954Z",
      "category_id": 711,
      "game_id": null,
      "invalid_count": null,
      "category": {
        "id": 711,
        "title": "1979",
        "created_at": "2014-02-11T22:49:55.844Z",
        "updated_at": "2014-02-11T22:49:55.844Z",
        "clues_count": 10
      }
    };
    const props = {
      question: question,
      onSubmit: () => {
      },
      userAnswerState: () => {
      }
    };
    const QuestionComponent = renderer.create(<Question {...props}/>).toJSON();
    expect(QuestionComponent).toMatchSnapshot();
  });
});