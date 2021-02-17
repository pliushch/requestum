export const loadFromLocalStorage = () => {
  try {
    const serializedStorage = localStorage.getItem("store");
    if (serializedStorage === null) {
      return undefined;
    }
    return JSON.parse(serializedStorage);
  } catch (err) {
    return undefined;
  }
};

export const saveToLocalStorage = (store) => {
  try {
    const serializedStorage = JSON.stringify(store);
    localStorage.setItem("store", serializedStorage);
  } catch (err) {
    console.log(err);
  }
};
