import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import  App  from '../src/containers/App'
import ObserverContainer from "../src/containers/ObserverContainer";
import Headers from '../src/containers/Headers';
import Home from '../src/components/Home';
// import msgToBackground from '../src/Utility/msgToBackground'
import * as renderer from "react-test-renderer";

it("Subject App renders correctly", () => {

  
  // const props = { className: "test", value: true, onSelectChanged: (value: boolean) => { return; } };
//   const tree = renderer
//     .create(<App  />)
//     .toJSON();
//   expect(tree).toBeTruthy();
//   //('object');
// });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

// describe('App', () => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper = shallow(<App />);
//     });
//     it('Should render Header, Body, and Footer', () => {
//       expect(wrapper.exists(ObserverContainer)).toBe(true);
//       expect(wrapper.exists(Headers)).toBe(true);
//       expect(wrapper.exists(Home)).toBe(true);
//     });
});