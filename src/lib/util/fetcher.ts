export default async function fetcher(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      "x-publishable-api-key":
        "pk_41dbe9bc46aa2d71862a6178f2b927647481cdeba12cc6305a4c892f978ac259",
    },
  })
  return response.json()
}
