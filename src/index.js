function main () {
  addButtonToDOM(createButton());
  createStyles();
}

function createStyles () {
  const styles = [`
    .sidebar-tree-list-item {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      height: 44px;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 3px;
      border-radius: 8px;
    }
  `, `
    .sidebar-tree-list-item__link {
      height: 100%;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: center;
      align-items: center;
      height: auto;
      -ms-flex-positive: 2;
      flex-grow: 2;
      padding: 0 13px;
    }
  `, `
    .sidebar-tree-list-item .icon {
      position: static;
      color: #595959;
      stroke-color: currentColor;
      margin-right: 12px;
    }
  `, `
    .sidebar-tree-list-item__name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 111px;
    }
  `]
  
  const stylesheet = document.createElement('style');
  document.head.appendChild(stylesheet);
  
  styles.forEach(rule => {
    stylesheet.sheet.insertRule(rule);
  })
}

function createButton () {
  const button = document.createElement('div');
  button.classList.add('sidebar-tree-list-item');
  
  const link = document.createElement('a');
  link.setAttribute('href', '/u/me/favorites');
  link.classList.add('sidebar-tree-list-item__link');
  link.innerHTML = `
    <svg height="24" width="24" class="sidebar-tree-list-item__icon icon">
      <use xlink:href="#v_favorite"/>
    </svg>
    <p class="sidebar-tree-list-item__name">Закладки</p>
  `
  button.appendChild(link);
  
  return button;
}

function addButtonToDOM (button) {
  const timer = setInterval(() => {
    const sidebarList = document.getElementsByClassName('sidebar-tree-list')[0];
    if (sidebarList) {
      sidebarList.appendChild(button);
      clearInterval(timer);
    }
  }, 100)
  
}

main();
