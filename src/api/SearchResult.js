// Search Result Section
export const getSearchResult = async (email, name, phone, age) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/search-result?location=${email}&from=${name}&to=${phone}&total_guest=${age}`
    )
    const data = await response.json()
    return data
  }