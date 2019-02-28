# React Quiz Test

Your task is to write a quiz app using the api available at http://jservice.io.

+ Each round the user is presented with a question selected at random using the method http://jservice.io/api/random
The results of calling that method look like this:
```
[
  {
    "id": 58971,
    "answer": "extradition",
    "question": "The handing over of a criminal to another country or state",
    "value": 600,
    "airdate": "2004-06-08T12:00:00.000Z",
    "created_at": "2014-02-11T23:22:58.890Z",
    "updated_at": "2014-02-11T23:22:58.890Z",
    "category_id": 7547,
    "game_id": null,
    "invalid_count": null,
    "category": {
      "id": 7547,
      "title": "\"extra\" helpings",
      "created_at": "2014-02-11T23:22:58.425Z",
      "updated_at": "2014-02-11T23:22:58.425Z",
      "clues_count": 5
    }
  }
]
```
+ The same question should not be asked twice in a single game
+ The text of the question field and the category.title field should be displayed to the user.
+ A text box and a submit button should be provided to allow the user to answer the question.
+ The answer should not be case sensitive.
+ When an answer is displayed a timer is started. The user has 30 seconds to answer, otherwise the game is over (see details for an incorrect answer for how to handle this)
+ If the user gets an answer correct their score is incremented by the number of points for the current round and a new question is fetched and displayed
+ If the user gets an answer wrong then the correct answer, a "game over" message and a restart button should be displayed to the user
+ If the user clicks the restart button then their points are reset to zero and the round is re-set to 1.
+ The number of points rewarded doubles each round. The points rewarded for the first round is 1, the second round is 2, the third round is 4, the fourth round is 8 and so on.
+ The maximum number of rounds a user can complete is 30. After answering the 30th question a "You Won!" message and a restart button should be displayed to the user. The restart button behaves in the same way as the restart button displayed when the game is over.
+ At all times the user's current score, the points for the current round, the time remaining and the user's high score should be displayed, along with the current question. The time remaining should be updated once per second
+ Your solution should be implemented with React and preferably would use Redux for state management but feel free to use an alternative state manager - or just the built in React state management - if you are not currently familiar with Redux.
+ Javascript flavour is up to you. We're currently using Flow on the front end but for the test vanilla JS or ES[whatever] or Typescript are all fine.
+ Feel free to use an app seed such as Create-React-App to save you time setting up the app.