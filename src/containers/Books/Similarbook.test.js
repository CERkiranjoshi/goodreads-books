import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Similarbook from './Similarbook'
import Card from '@material-ui/core/Card'

configure({adapter: new Adapter()});

describe('<BookDetails />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Similarbook />);
    });


    it('should render no card if <Similarbook /> elements value is null', () => {
        wrapper.setProps({book: null});
        expect(wrapper.find(Card)).toHaveLength(0);
    });

    it('should not contain class `.cardlink` if Similarbook data not available', () => {
        wrapper.setProps({book: null});
        expect(wrapper.find('.cardlink')).toHaveLength(0);
      });

});