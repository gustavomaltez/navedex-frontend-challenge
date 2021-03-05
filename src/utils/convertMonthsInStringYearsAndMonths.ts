export default function convertMonthsInStringYearsAndMonths(
  value: number,
): string {
  const years = Math.floor(value / 12);
  const months = Math.floor(value % 12);

  if (years === 0) {
    return `${months} ${months === 1 ? 'Mês' : 'Meses'}`;
  }

  if (months === 0) {
    return `${years} ${years === 1 ? 'Ano' : 'Anos'}`;
  }

  return `${years} ${years === 1 ? 'Ano' : 'Anos'} e ${months} ${
    months === 1 ? 'Mês' : 'Meses'
  }`;
}
