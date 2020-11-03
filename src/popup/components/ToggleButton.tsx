import * as React from 'react';
import { ControlAction, RecState } from '../../constants';
import * as Icons from "./icons"

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
    const invalid = {
      label: "Invalid Tab",
      icon: <Icons.IconWarning />
    };

    switch (recStatus) {
      case RecState.ON:
        return {
          label: "Stop",
          icon: <Icons.IconStop />
        };

      case RecState.PAUSED:
        return isValidTab ? {
          label: "Resume",
          icon: <Icons.IconPause />
        } : invalid;

      case RecState.OFF:
      default:
        return isValidTab ? {
          label: "Record",
          icon: <Icons.IconRecord />
        } : invalid;
    }
  }

  const disabled = !isValidTab && (recStatus === RecState.OFF || recStatus === RecState.PAUSED);
  const buttonClass: string = disabled
    ? "button--is-disabled"
    : "";

  const { icon, label } = renderIconContent();

  return (
    <div className="footer__toggle-wrap">
      <button
        type="button"
        className={`button button--primary ${buttonClass}`}
        onClick={handleClick}
        disabled={disabled}
      >
        <span className="span button__icon" role="img">
          {icon}
        </span>
        <span className="button__label">
          {label}
        </span>
      </button>
    </div>
  );
};
