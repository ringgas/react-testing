import React from 'react';
import { shallow, mount } from 'enzyme';
//  import toJson from "enzyme-to-json";

import App from './App';
import Card from './components/card/Card';


it('Pages App running without crash', () => {
  shallow(<App />);
});

it('Render account header', () => {
  const wrapper = shallow(<Card />);
  const header = <h1>Hacktiv8 Meetup</h1>
  expect(wrapper.contains(header)).toEqual(true);
})


describe('content description test', () => {
  it('location', () => {
    const wrapper = shallow(<Card />);
    const location = wrapper.find("#location").text();
    expect(location).toEqual("location : ");
  });

  it('Members', () => {
    const wrapper = shallow(<Card />);
    const members = wrapper.find("#members").text();
    expect(members).toEqual("members : ");
  });

  it('Organizer', () => {
    const wrapper = shallow(<Card />);
    const organizer = wrapper.find("#organizer").text();
    expect(organizer).toEqual("organizer : ");
  });
})

 

