export function filterFormats(array) {
  return array.reduce((accum, element, index) => {
    const repeatedFormat = accum.find(
      accElement => accElement.label === element.label
    );

    if (repeatedFormat) {
      repeatedFormat.percentage += element.percentage;
    } else {
      accum.push(element);
    }
    return accum;
  }, []);
}
