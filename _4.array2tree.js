const list = [
  {
    id: 1,
    parent_id: null,
  },
  {
    id: 2,
    parent_id: 1,
  },
  {
    id: 3,
    parent_id: 2,
  },
  {
    id: 4,
    parent_id: null,
  },
  {
    id: 5,
    parent_id: 6,
  },
];

function toTree(list, parent = null) {
  return list
    .filter((item, index) => {
      if (item.parent_id === parent) {
        list.splice(index, 1);
        return true;
      }
    })
    .map((item) => {
      item.children = toTree(list, item.id);
      return item;
    });
}

console.log(JSON.stringify(toTree(list), null, 2));
