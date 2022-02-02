import formatRelative from 'date-fns/formatRelative'

const formatDateRelative = (time) => {
  let datetime = typeof time === 'string' ? Date.parse(time) : time;
  return formatRelative(datetime, new Date(), 'dd/MM/yyyy');
};

export default formatDateRelative;