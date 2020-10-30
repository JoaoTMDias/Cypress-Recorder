import * as React from 'react';
import { ControlAction } from '../../constants';

export interface ResetButtonProps {
  handleToggle: (action: ControlAction) => void,
}

export default ({ handleToggle }: ResetButtonProps) => (
  <div className="footer__reset-wrap">
    <button
      type="button"
      className="footer__reset button"
      title="Reset the contents of this recording"
      onClick={() => handleToggle(ControlAction.RESET)}
    >
      Reset
    </button>
  </div>
);
