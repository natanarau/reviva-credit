export const fetchUser = (id: any) => {
  const response = fetch(`https://reviva-credit-api.herokuapp.com/users/?id=${id}`)
  return response
}
export const fetchCard = (id: any) => {
  const response = fetch(`https://reviva-credit-api.herokuapp.com/cards?userId=${id}`)
  return response
}
// export const fetchTransation = (id: any) => {
//   const response = fetch(`https://reviva-credit-api.herokuapp.com/transactions/${id}`)
//   return response
// }