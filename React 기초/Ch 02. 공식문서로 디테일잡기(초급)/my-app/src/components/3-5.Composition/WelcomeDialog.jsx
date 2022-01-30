// composition(합성) -> 컴포넌트에 컴포넌트 담기
// 담는 방법: Children / Custom

import React from 'react';
import CustomDialog from './CustomDialog';
// import Dialog from './Dialog';

// Dialog와 CustomDialog의 합성
export default function WelcomeDialog() {
  // return (
  //     <Dialog>
  //         <h1>Welcome</h1>
  //         <h5>Thank you!</h5>
  //     </Dialog>
  // );
  return <CustomDialog title={<button>welcome</button>} description="Thanks" />;
}
