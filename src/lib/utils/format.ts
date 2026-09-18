const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const dayFormatter = new Intl.DateTimeFormat('en-GB', { day: '2-digit' });
const monthFormatter = new Intl.DateTimeFormat('en-GB', { month: 'short' });

export const formatDate = (iso: string) => dateFormatter.format(new Date(iso));
export const formatDay = (iso: string) => dayFormatter.format(new Date(iso));
export const formatMonth = (iso: string) => monthFormatter.format(new Date(iso));
