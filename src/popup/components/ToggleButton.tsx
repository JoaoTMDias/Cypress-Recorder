import * as React from 'react';
import { ControlAction, RecState } from '../../constants';
import { IconRecord, IconStop, IconPause, IconWarning } from "./icons"

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

  function renderIconContent() {
    let options = {
      label: "Record",
      icon: <IconRecord />
    };

    switch (recStatus) {
      case RecState.ON:
        options = {
          label: "Stop",
          icon: <IconStop />
        };
        break;

      case RecState.PAUSED:
        options = {
          label: isValidTab ? "Resume" : "InvalidTab",
          icon: isValidTab ? <IconPause /> : <IconWarning />
        };
        break;

      case RecState.OFF:
      default:
        break;
    }

    return (
      <>
        <span className="span button__icon" role="img">
          {options.icon}
        </span>
        <span className="button__label">
          {options.label}
        </span>
      </>
    )
  }

  const buttonClass: string = (!isValidTab && (recStatus === RecState.OFF || recStatus === RecState.PAUSED))
    ? "button--is-disabled"
    : "";

  return (
    <div className="footer__toggle-wrap">
      <button
        type="button"
        className={`button button--primary ${buttonClass}`}
        onClick={handleClick}
        disabled={!isValidTab && (recStatus === RecState.OFF || recStatus === RecState.PAUSED)}
      >
        {renderIconContent()}
      </button>
    </div>
  );
};
