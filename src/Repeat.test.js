import React from 'react';
import { mount } from 'enzyme';

import Repeat from './Repeat';

test('Repeat N elements in ascending order', () => {
  const wrapper = mount(
    <Repeat times={100} className="repeater">
    {(i) => <span key={i}>⚛️ {i}</span>}
    </Repeat>
  );

  const parent = wrapper.find('.repeater');
  const elements = wrapper.find('span');

  expect(parent).toHaveLength(1);
  expect(elements).toHaveLength(100);
  expect(parent.type()).toEqual('div');
  expect(parent.childAt(0).type()).toEqual('span');
  expect(parent.childAt(0).text()).toEqual('⚛️ 0');
});

test('Repeat N elements in descending order', () => {
  const wrapper = mount(
    <Repeat times={100} order="desc" wrapper="section" className="repeater">
    {(i) => <span key={i}>⚛️ {i}</span>}
    </Repeat>
  );

  const parent = wrapper.find('.repeater');
  const elements = wrapper.find('span');

  expect(parent).toHaveLength(1);
  expect(elements).toHaveLength(100);
  expect(parent.type()).toEqual('section');
  expect(parent.childAt(0).type()).toEqual('span');
  expect(parent.childAt(0).text()).toEqual('⚛️ 99');
});
