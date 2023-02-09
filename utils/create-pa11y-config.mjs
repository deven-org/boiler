import fs from 'fs';
import extract from '../storybook-static/stories.json' assert { type: 'json' };
import CustomPa11yConfigs from '../src/components/pa11y-custom.config.js';

const storyUrls = (stringArr) => stringArr.map((str) => `http://localhost:1337/iframe.html?id=${str}&viewMode=story`);
const customStoryUrls = (customArr) =>
  customArr.map(
    (custom) =>
      `http://localhost:1337/iframe.html?id=${custom.story}&args=${custom.parameters.join(';')}&viewMode=story`
  );

const modifyPa11yConfig = (storiesObj) => {
  const pa11yFilePath = '.pa11yci';
  const pa11yconfig = fs.readFileSync(pa11yFilePath, 'utf-8');

  const pa11yconfigObj = JSON.parse(pa11yconfig);
  delete pa11yconfigObj['urls'];

  const stories = storiesObj.stories;
  const componentStories = Object.values(stories).map((story) => story.id);

  const completeStoryArray = storyUrls(componentStories).concat(customStoryUrls(CustomPa11yConfigs));

  const updatedStoryUrls = {
    urls: completeStoryArray,
  };

  const newPa11yConfig = {
    ...pa11yconfigObj,
    ...updatedStoryUrls,
  };

  const newPa11yConfigString = JSON.stringify(newPa11yConfig, null, 4);

  fs.writeFileSync(pa11yFilePath, newPa11yConfigString, 'utf-8');
};

modifyPa11yConfig(extract);
