/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Debounce
 *
 * @param func the function to be called
 * @param wait time to wait before call the function
 * @param immediate
 */
export const debounce = (func: Function, wait: number, immediate: boolean) => {
  let timeout: any;
  return (...args: any) => {
    const later = () => {
      timeout = null;
      if (!immediate) {
        func(...args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func(...args);
    }
  };
};
