import * as React from 'react';
import { shallow } from 'enzyme';
import Body, { BodyProps } from '../popup/components/Body';
import LandingBox from '../popup/components/LandingBox';
import CodeDisplay from '../popup/components/CodeDisplay';
import { RecState } from '../constants';
import '../setupTests';

describe('Body', () => {
  let props: BodyProps;
  let wrapper;
  beforeAll(() => {
    props = {
      codeBlocks: [],
      isValidTab: true,
      destroyBlock: jest.fn(),
      moveBlock: jest.fn(),
      recStatus: RecState.OFF,
    };
  });
  it('Should render LandingBox when recStatus is off', () => {
    wrapper = shallow(<Body {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.exists(LandingBox)).toBe(true);
    expect(wrapper.exists(CodeDisplay)).toBe(false);
  });
  it('Should render CodeDisplay when recStatus is paused and has codeBlocks', () => {
    props.recStatus = RecState.PAUSED;
    props.codeBlocks = [
      {
        id: "2XSrhOx7E",
        value: "cy.visit('https://review.feedzai.com/D27821#change-IxGsRMpnU7Uu');"
      }
    ];
    wrapper = shallow(<Body {...props} />);
    expect(wrapper.exists(CodeDisplay)).toBe(true);
    expect(wrapper.exists(LandingBox)).toBe(false);
  });
  it('Should render CodeDisplay when recStatus is on', () => {
    props.recStatus = RecState.ON;
    props.codeBlocks = [
      {
        id: "2XSrhOx7E",
        value: "cy.visit('https://review.feedzai.com/D27821#change-IxGsRMpnU7Uu');"
      }
    ];
    wrapper = shallow(<Body {...props} />);
    expect(wrapper.exists(CodeDisplay)).toBe(true);
    expect(wrapper.exists(LandingBox)).toBe(false);
  });
});
