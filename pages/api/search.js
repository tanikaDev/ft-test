export default async function handler(req, res) {

  const searchQuery = req.body.queryString;

  const dataFetch = await fetch(`https://api.ft.com/content/search/v1?`,  {method: "POST",
      headers: {
      "X-Api-Key": process.env.API_KEY,
      "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "queryString": searchQuery,
        "queryContext" : {
          "curations" : [ "ARTICLES"]
       },
       "resultContext" : {
        "aspects" :[  "title","lifecycle","location", "images", "metadata", "summary", "editorial", "master" ]
     }})
    })

    const searchData = await dataFetch.json();

  res.status(200).json(searchData)
}