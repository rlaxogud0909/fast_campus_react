import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

export default function Comments({ commentList }) {
  const handleClick = useCallback(() => {
    console.log('눌림');
  }, []);

  // 비효율적 (하나 생길때마다 전체가 다시 생김)->Profiler
  // React Developer Tools 확인 해보기
  // export default function Comments({ commentList }) {
  //   const handleClick = () => {
  //     console.log('눌림');
  //   };

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
