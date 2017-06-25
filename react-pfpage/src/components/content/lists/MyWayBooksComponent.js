import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';


const content = [
  {
    name: '',
    properties: '',
  },
];

const MyWayBooksComponent = props => {
  return (
    <div>
      {content.map(one =>
        <List>
          <ListItem>
            <ListItemText />
          </ListItem>
        </List>
      )}
    </div>
  );
}

export default MyWayBooksComponent;
