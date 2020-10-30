import * as React from 'react';

export interface ClipboardButtonProps {
  copyToClipboard: () => Promise<void>,
}

export default ({ copyToClipboard }: ClipboardButtonProps) => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const handleClick = async (): Promise<void> => {
    try {
      await copyToClipboard();
      setSuccess(true);
    } catch (error) {
      throw new Error(error);
    }
  };

  const buttonText = success ? 'Copied!' : 'Copy to Clipboard';
  const buttonTitle = success ? 'Content copied to clipboard!' : 'Click to copy to Clipboard'

  return (
    <div className="footer__copy-wrap">
      <button
        type="button"
        className="footer__copy button"
        onClick={handleClick}
        title={buttonTitle}
      >
        {buttonText}
      </button>
    </div>
  );
};
