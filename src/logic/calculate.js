const Calculate = ({ total, next, operation }, button) => {
  let data = { total, next, operation };

  if (button === 'AC') {
    data = { total: null, next: null, operation: null };
  }

  return data;
};

export default Calculate;
