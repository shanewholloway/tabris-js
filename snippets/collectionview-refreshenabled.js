let items = [];

let view = new tabris.CollectionView({
  left: 0, top: 0, right: 0, bottom: 0,
  cellHeight: 25,
  refreshEnabled: true,
  createCell: () => new tabris.TextView(),
  updateCell: (cell, index) => cell.text = items[index]
}).on('refresh', loadItems)
  .appendTo(tabris.ui.contentView);

loadItems();

function loadItems() {
  view.refreshIndicator = true;
  view.refreshMessage = 'loading...';
  setTimeout(() => {
    createNewItems(25);
    view.insert(0, 25);
    view.refreshIndicator = false;
    view.refreshMessage = '';
  }, 1000);
}

function createNewItems(count) {
  for (let i = 0; i < count; i++) {
    items.unshift('Item ' + (items.length + 1));
  }
}
