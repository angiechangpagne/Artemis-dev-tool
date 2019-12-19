import React from 'react';
import ReactDOM from "react-dom";
import { shallow, mount, render} from 'enzyme';
import HistoryBox from '../src/components/HistoryBox';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('<HistoryBox />', () => {
  let wrapper=shallowClone(<App)
  it('renders the QueryResponse Component without crashing', () => {
    const response = shallow(<HistoryBox{...props}/>);
    expect(response.contains(<div id="queryBox"></div>)).toEqual(true);
  });


});