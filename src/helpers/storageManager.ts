class StorageManager {


  static setItem = (key: Required<string>, data: string ) => {
        const serializedState = JSON.stringify(data);

        localStorage.setItem(key, serializedState);

  };

  static getItem = (key: Required<string>): string |null => {
    if (typeof window !== 'undefined') {
        const serializedState = localStorage.getItem(key);

        if (serializedState === null) {
          return null;
        }

        return JSON.parse(serializedState);

    }
    return null;
  };

  static removeItem = (key: Required<string>) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
      }
  };

  static clear = () => {
    if (typeof window !== 'undefined') {
        localStorage.clear();
      }
    }
  };

export default StorageManager;
