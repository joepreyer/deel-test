export const fetchCities = async (searchTerm: string) => {
  try {
    const response = await fetch(`https://api.teleport.org/api/cities/?search=${searchTerm}`)
    if (response.ok) {
      const data = await response.json()
      const cities = data._embedded['city:search-results'].map((city: any) => city.matching_full_name)
      return cities
    }
    else {
      console.error(response.status + response.statusText)
    }
  }
  catch (error) {
    console.error("There was an issue fetching the list of cities", error)
  }
}