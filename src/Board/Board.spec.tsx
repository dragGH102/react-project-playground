import React from 'react';
import { mount } from 'enzyme';

import Board from './Board';

describe('Board component', () => {
    it('should match snapshot', () => {
        expect(mount(<Board />)).toMatchSnapshot();
    });
});
