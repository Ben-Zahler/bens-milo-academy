import {readFile} from '@web/test-runner-commands';
import {expect} from '@esm-bundle/chai';
import initButtonsGroup from '../../../blocks/buttongroup/buttongroup.js';
import {setLibs} from '../../../scripts/utils.js';

document.body.innerHTML = await readFile({path: './mocks/body.html'});
setLibs('/libs');

describe('The buttongroup block', () => {

  it('check for the buttons', async () => {

    const buttonGroup = document.querySelector('.buttongroup');
    await initButtonsGroup(buttonGroup);

    const buttons = document.querySelectorAll('.con-button');
    expect(buttons.length).to.equal(5);
  });
});
