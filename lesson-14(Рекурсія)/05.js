function getElementById(idToFind, parent = document.body) {
  function walker(parent) {
    for (const child of parent.children) {
      if (child.id === `${idToFind}`) {
        throw child;
      }
      walker(child);
    }
  }
  try {
    walker(parent);
  } catch (e) {
    return e;
  }
}
