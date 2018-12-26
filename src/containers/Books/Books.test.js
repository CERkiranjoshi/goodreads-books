import React from 'react';
import { configure, shallow  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Books from './Books';

configure({adapter: new Adapter()});

describe('<Books />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<Books />);
    });

    it('should render Error when receiving no books', () => {
        wrapper.setProps({books: []});
        wrapper.setProps({ errorMessage: 'Something went wrong please try agian later' });
        expect(wrapper.find('.errorMessages')).toHaveLength(0);
    });
});