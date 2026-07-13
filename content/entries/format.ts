const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

/**
 * "2026-07-08" -> "08 JUL 2026". Parsed as plain fields, so no timezone drift.
 *
 * Kept apart from `./index` on purpose: the timeline is a client component, and
 * importing this from the registry would pull every post body into the browser
 * bundle along with it.
 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-')
  return `${day} ${MONTHS[Number(month) - 1]} ${year}`
}
