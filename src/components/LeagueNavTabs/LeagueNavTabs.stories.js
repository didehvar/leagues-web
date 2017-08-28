import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker/locale/en_GB';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';

import LeagueNavTabs from './index';

const tabs = Array(2).fill().map((value, idx) => {
  const index = idx + 1;
  const paragraphs = Array(3).fill().map(() =>
    <p>
      {faker.lorem.paragraph()}
    </p>
  );

  return {
    label: faker.lorem.word(),
    children: (
      <div>
        <h1>
          Tab {index}
        </h1>
        {paragraphs}
      </div>
    )
  };
});

const data = Array(5).fill().map(() => ({
  id: faker.random.number(),
  name: faker.commerce.productName(),
  calories: faker.random.number(),
  fat: faker.random.number(),
  carbs: faker.random.number(),
  protein: faker.random.number()
}));

const tableTabs = [
  ...tabs,
  {
    label: 'Table',
    children: (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
            <TableCell numeric>Fat (g)</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>
                  {n.name}
                </TableCell>
                <TableCell numeric>
                  {n.calories}
                </TableCell>
                <TableCell numeric>
                  {n.fat}
                </TableCell>
                <TableCell numeric>
                  {n.carbs}
                </TableCell>
                <TableCell numeric>
                  {n.protein}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    )
  }
];

storiesOf('LeagueNavTabs', module)
  .add('default', () => <LeagueNavTabs tabs={tabs} />)
  .add('table', () => <LeagueNavTabs tabs={tableTabs} />);
