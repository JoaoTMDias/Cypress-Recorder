import * as React from 'react';
import { IconInfo, IconBack } from './icons/index';

export interface InfoButtonProps {
  toggleInfoDisplay: () => void,
  shouldInfoDisplay: boolean,
}

export default ({ shouldInfoDisplay, toggleInfoDisplay }: InfoButtonProps) => {
  const handleClick = (): void => {
    toggleInfoDisplay();
  };

  const button = {
    label: shouldInfoDisplay ? 'Back to Recording' : 'Info',
    icon: shouldInfoDisplay ? <IconBack /> : <IconInfo />,
  };

  return (
    <>
      <button type="button" className="button button--anchor" onClick={handleClick}>
        <span className="button__icon">{button.icon}</span>
        <span className="button__label">{button.label}</span>
      </button>
    </>
  );
};
