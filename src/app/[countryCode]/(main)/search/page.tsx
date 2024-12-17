import SearchModal from "@modules/search/templates/search-modal"
import { getRegion } from "@lib/data/regions"

export default async function SearchModalRoute(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)

  return <SearchModal countryCode={countryCode} region={region} />
}
