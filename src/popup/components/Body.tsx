import * as React from 'react';
import type { Block } from '../../types';
import { RecState } from '../../constants';
import CodeDisplay from './CodeDisplay';
import LandingBox from './LandingBox';
import Pulsar from './Pulsar';

export interface BodyProps {
  isValidTab: boolean,
  recStatus: RecState,
  codeBlocks: Block[],
  destroyBlock: (index: number) => void,
  moveBlock: (dragIdx: number, dropIdx: number) => void,
}

export default ({
  recStatus,
  codeBlocks,
  isValidTab,
  destroyBlock,
  moveBlock,
}: BodyProps) => {
  function renderContent() {
    switch (recStatus) {
      case RecState.OFF:
        return <LandingBox isValidTab={isValidTab} />;

      default:
        return codeBlocks && codeBlocks.length > 0 ? <CodeDisplay codeBlocks={codeBlocks} destroyBlock={destroyBlock} moveBlock={moveBlock} /> : <Pulsar />;
    }
  }

  return (
    <section className="body">
      {renderContent()}
    </section>
  );
};
