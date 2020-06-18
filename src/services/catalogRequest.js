const catalogApi = {
  url:
    process.env.CATALOG_API ||
    'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog',
  config: {
    method: 'GET',
    mode: 'cors'
  }
}

export default function catalogRequest () {
  const { url, config } = catalogApi

  function handleError (failedResponse) {
    const { statusText: message, status } = failedResponse

    return {
      error: {
        message,
        status
      },
      products: []
    }
  }

  async function handleSuccess (productsList) {
    return {
      error: false,
      products: [...productsList]
    }
  }

  return window.fetch(url, config).then(async response => {
    const data = await response.json()

    return response.ok ? handleSuccess(data) : handleError(response)
  })
}
