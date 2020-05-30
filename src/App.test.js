import React from 'react';
import { shallow } from 'enzyme';
import TestFile from './testFile';

it('snapshot test',() => {
 const wrapper =  shallow(<TestFile name = "regith"></TestFile>);
 const title = wrapper.find("p.testNameHeader").text();
 expect(title).toBe("regith");

 const clickButton = wrapper.find("button");
 clickButton.simulate("Click");
}) 
