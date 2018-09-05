import React from 'react';
import App from '../src/components/App.jsx';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

describe('App', () => {

    it('should be defined', () => {
        expect(App).toBeDefined();
    });

    it('renders without crashing', () => {
        mount( < App / > );
    });

    it('Test when user enters value 10', () => {
        let wrapper = mount( < App / > );
        wrapper.find('input').first().getDOMNode().value = "10";
        wrapper.find('form').simulate('submit');
        let result = wrapper.find('label').at(1).text();
        expect(result).toEqual('ten');
    });

    it('Test when user enters value 105', () => {
        let wrapper = mount( < App / > );
        wrapper.find('input').first().getDOMNode().value = "105";
        wrapper.find('form').simulate('submit');
        let result = wrapper.find('label').at(1).text();
        expect(result).toEqual('one hundred and five');
    });

    it('Test when user enters value 35,000', () => {
        let wrapper = mount( < App / > );
        wrapper.find('input').first().getDOMNode().value = "35,000";
        wrapper.find('form').simulate('submit');
        let result = wrapper.find('label').at(1).text();
        expect(result).toEqual('thirty five thousand');
    });

    it('Test when user enters value 56748561', () => {
        let wrapper = mount( < App / > );
        wrapper.find('input').first().getDOMNode().value = "56748561";
        wrapper.find('form').simulate('submit');
        let result = wrapper.find('label').at(1).text();
        expect(result).toEqual('fifty six million, seven hundred and forty eight thousand, five hundred and sixty one');
    });

    it('Test when user enters value 999,999,999', () => {
        let wrapper = mount( < App / > );
        wrapper.find('input').first().getDOMNode().value = "999,999,999";
        wrapper.find('form').simulate('submit');
        let result = wrapper.find('label').at(1).text();
        expect(result).toEqual('nine hundred and ninety nine million, nine hundred and ninety nine thousand, nine hundred and ninety nine');
    });

   it('Test when user enters negative value', () => {
        let wrapper = mount( < App / > );
        wrapper.find('input').first().getDOMNode().value = "-5";
        wrapper.find('form').simulate('submit');
        let result = wrapper.find('label').at(1).text();
        expect(result).toEqual('Incorrect value');
    });

    it('Test when user enters alpha numeric value', () => {
        let wrapper = mount( < App / > );
        wrapper.find('input').first().getDOMNode().value = "5abc";
        wrapper.find('form').simulate('submit');
        let result = wrapper.find('label').at(1).text();
        expect(result).toEqual('Incorrect value');
    });
});