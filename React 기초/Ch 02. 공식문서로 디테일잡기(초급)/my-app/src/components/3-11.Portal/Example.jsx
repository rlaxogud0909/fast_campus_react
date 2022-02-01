// createPortal -> 부모 컴포넌트 dom 트리로부터 벗어나기
// 이벤트 -> Portal에 있더라도 Event는 트리로 전파
import React from 'react';
import { createPortal } from 'react-dom';
import ThankyouDialog from '../3-6.Composition2/ThankyouDialog';

const Portal = (props) => {
  return createPortal(props.children, document.getElementById('portal'));
};

export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: 'absolute' }}>
        <button>하하하</button>
      </div>
    </div>
  );
}
