function loadStories() {
    require('../src/stories/Card.story');
    require('../src/stories/CardList.story');
    require('../src/stories/IconButton.story');

  }

const stories = [
    '../src/stories/Card.story',
    '../src/stories/CardList.story',
    '../src/stories/IconButton.story',
];

export {
    loadStories,
    stories,
};