export function campaignDateFormat(start_date, end_date) {
  // const year = start_date.slice(0,5)
  const smonth = start_date.slice(5, 7)
  const sdate = start_date.slice(8, 10)
  const emonth = end_date.slice(5, 7)
  const edate = end_date.slice(8, 10)

  const final_date = sdate + "/" + smonth + "-" + edate + "/" + emonth
  return final_date;
}

export function saleDateFormat(purchase_date) {
  // const year = start_date.slice(0,5)
  const smonth = purchase_date.slice(5, 7)
  const sdate = purchase_date.slice(8, 10)
  const syear = purchase_date.slice(0, 4)

  const final_date = sdate + "/" + smonth + "/" + syear
  return final_date;
}

export function filterDateFormat(filter_date) {
  if (filter_date === null)
  {
    return filter_date;
  }
  // const year = start_date.slice(0,5)
  const date = filter_date.getDate()
  const month = filter_date.getMonth()+1
  const year = filter_date.getYear()+1900

  const final_date = date + "/" + month + "/" + year
  return final_date;
}
