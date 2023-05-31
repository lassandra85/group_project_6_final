const ageDeterminationFunc = bd => {
  const dateArray = bd.split('.');
  const date = [dateArray[2], dateArray[1], dateArray[0]].join('-');
  const now = new Date();
  const birthdate = Date.parse(date);

  const diff = now.getTime() - birthdate;
  console.log('diff', diff);
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  console.log('years', years);
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * (365.25 / 12))
  );

  let termin = '';

  if (years) {
    termin = years === 1 ? 'year' : 'years';
  } else {
    termin = months === 1 ? 'month' : 'months';
  }

  const age = years ? `${years} ${termin}` : `${months} ${termin}`;

  return age;
};

export default ageDeterminationFunc;
