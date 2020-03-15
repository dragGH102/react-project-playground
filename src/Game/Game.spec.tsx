import React from 'react';
import { mount } from 'enzyme';

import Game from './Game';

describe('Game component', () => {
    it('should match snapshot', () => {
        expect(mount(<Game />)).toMatchSnapshot();
    });
});
