import * as React from 'react';
import { ControlAction, RecState } from '../../constants';

export interface ToggleButtonProps {
  isValidTab: boolean,
  recStatus: RecState,
  handleToggle: (action: ControlAction) => void,
}

export default ({ recStatus, handleToggle, isValidTab }: ToggleButtonProps) => {
  const handleClick = (): void => {
    let action: ControlAction;
    if (recStatus === RecState.OFF || recStatus === RecState.PAUSED) action = ControlAction.START;
    else if (recStatus === RecState.ON) action = ControlAction.STOP;
    handleToggle(action);
  };

  const buttonClass: string = (!isValidTab && (recStatus === RecState.OFF || recStatus === RecState.PAUSED))
    ? 'disabled-button'
    : 'button';

  return (
    <div className="footer__toggle-wrap">
      <button
        type="button"
        className={`${buttonClass} footer__toogle`}
        onClick={handleClick}
        disabled={!isValidTab && (recStatus === RecState.OFF || recStatus === RecState.PAUSED)}
      >
        {(recStatus === RecState.OFF || recStatus === RecState.PAUSED) && !isValidTab && 'Invalid Tab'}
        {recStatus === RecState.OFF && isValidTab && 'Start Recording'}
        {recStatus === RecState.PAUSED && isValidTab && 'Resume'}
        {recStatus === RecState.ON && 'Stop Recording'}
      </button>
    </div>
  );
};
