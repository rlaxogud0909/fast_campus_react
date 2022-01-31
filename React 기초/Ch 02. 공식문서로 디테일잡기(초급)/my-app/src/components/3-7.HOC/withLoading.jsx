// HOC(고차 컴퍼넌트) -> 함수를 받아서 함수를 리턴

import React, { useEffect, useState } from 'react';

export default function withLoading(Component) {
  const WithLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);

      return () => clearTimeout(timer);
    }, []);
    return loading ? <p>Loading...</p> : <Component />;
  };

  return WithLoadingComponent;
}
