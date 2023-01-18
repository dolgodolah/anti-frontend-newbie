/**
 * 1000 > 1,000
 * @param value
 * @param maximumFractionDigits 표시할 소수점 이하 개수
 */
export function getFormattedNumber(
  value: number,
  maximumFractionDigits: number = 0
): string {
  return value.toLocaleString(undefined, { maximumFractionDigits });
}

export function isNumber(value: any): boolean {
  return !Number.isNaN(value);
}
