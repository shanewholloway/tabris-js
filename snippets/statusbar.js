const THEMES = ['default', 'light', 'dark'];
const DISPLAY_MODES = ['default', 'float', 'hide'];
const BACKGROUNDS = [tabris.ui.statusBar.background, 'rgba(0, 0, 0, 0.25)', 'red', 'green', 'blue'];

createTextView('Theme');

new tabris.Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  itemCount: THEMES.length,
  itemText: index => THEMES[index]
}).on({
  select: ({index}) => tabris.ui.statusBar.theme = THEMES[index]
}).appendTo(tabris.ui.contentView);

createTextView('Display mode', 'displayMode');

new tabris.Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  itemCount: DISPLAY_MODES.length,
  itemText: index => DISPLAY_MODES[index]
}).on({
  select: ({index}) => tabris.ui.statusBar.displayMode = DISPLAY_MODES[index]
}).appendTo(tabris.ui.contentView);

createTextView('Background');

new tabris.Picker({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  itemCount: BACKGROUNDS.length,
  itemText: index => BACKGROUNDS[index]
}).on({
  select: ({index}) => tabris.ui.statusBar.background = BACKGROUNDS[index]
}).appendTo(tabris.ui.contentView);

createTextView('Height');

new tabris.TextView({
  left: '#displayMode 16', baseline: 'prev()', right: 16,
  text: tabris.ui.statusBar.height
}).appendTo(tabris.ui.contentView);

function createTextView(text, id) {
  new tabris.TextView({
    id: id,
    left: 16, top: 'prev() 16',
    text: text
  }).appendTo(tabris.ui.contentView);
}
