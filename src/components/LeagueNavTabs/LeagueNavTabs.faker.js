import React from 'react';
import faker from 'faker';

export default (value, idx) => {
  const index = idx + 1;
  const paragraphs = Array(3).fill().map(() =>
    <p>
      {faker.lorem.paragraph()}
    </p>
  );

  return {
    label: faker.lorem.word(),
    component: () => {
      return (
        <div>
          <h1>
            Tab {index}
          </h1>
          {paragraphs}
        </div>
      );
    }
  };
};
