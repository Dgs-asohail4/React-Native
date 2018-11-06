function loadStories() {
    require('../src/stories/Card.story');
    require('../src/stories/CardList.story');
    require('../src/stories/IconButton.story');
    require('../src/stories');

  }

const stories = [
    '../src/stories/Card.story',
    '../src/stories/CardList.story',
    '../src/stories/IconButton.story',
    '../src/stories/'
];

export {
    loadStories,
    stories,
};