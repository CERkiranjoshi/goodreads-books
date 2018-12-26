import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Books from './Books';
import Book from './Book';
import Card from '@material-ui/core/Card'

configure({adapter: new Adapter()});

describe('<Books />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Books />);
    });

    it('should render <Book /> elements', () => {
        expect(wrapper.find(Book));
    });

    it('should render no card if <Book /> elements value is null', () => {
        let bookWrapper = shallow(<Book />);
        bookWrapper.setProps({book: null});
        expect(bookWrapper.find(Card)).toHaveLength(0);
    });

    it('should not contain class `.cardlink` if book data not available', () => {
        let bookWrapper = shallow(<Book />);
        bookWrapper.setProps({book: null});
        expect(wrapper.find('.cardlink')).toHaveLength(0);
      });

});