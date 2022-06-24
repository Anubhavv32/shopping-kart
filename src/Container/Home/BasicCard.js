import * as React from 'react';

export default function BasicCard({category}) {
  const img = require(`../../${category.imageUrl}`);
  return (
    <div className="card" style={{backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
        <div className="card-body" style={{height: '400px'}}>
          This is some text within a card body.
        </div>
      </div>
  );
}