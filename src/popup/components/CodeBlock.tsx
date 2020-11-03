import * as React from 'react';
import * as Icons from "./icons";

export interface CodeBlockProps {
  index: number,
  text: string,
  dragStatus: string,
  destroyBlock: (i: number) => void,
  onDragStart: (e: React.DragEvent, i: number) => void,
  onDragOver: (e: React.DragEvent, i: number) => void,
  onDragEnd: () => void,
  onDrop: (e: React.DragEvent, i: number) => void,
}

export default ({
  index,
  text,
  destroyBlock,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDrop,
  dragStatus,
}: CodeBlockProps) => {
  const i = text.startsWith('cy.url()')
    ? text.lastIndexOf('\'', text.length - 4)
    : text.indexOf('\'');
  const j = text.lastIndexOf('\'') + 1;
  const preSelector = text.slice(0, i);
  const selector = text.slice(i, j);
  const postSelector = text.slice(j);

  const buttonText = 'Delete this line';

  return (
    <li
      className={dragStatus}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
    >
      <span className="code-block__content">
        {preSelector}
        <mark className="code-block__selector">
          {selector}
        </mark>
        {postSelector}
      </span>
      <button
        type="button"
        className="code-block__delete"
        onClick={() => destroyBlock(index)}
      >
        <span><Icons.IconClose /></span>
        <span className="sr-only">{buttonText}</span>
      </button>
    </li>
  );
};
