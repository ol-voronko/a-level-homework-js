function gql(endpoint, query, variables) {
  return fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());
}
(async () => {
  const catQuery = `query cats($q: String){
                                        CategoryFind(query: $q){
                                            _id name
                                        }
                                    }`;
  const cats = await gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    catQuery,
    { q: "[{}]" }
  );
  console.log(cats); //список категорій з _id name та всім таким іншим

  const loginQuery = `query login($login:String, $password:String){
                            	login(login:$login, password:$password)
                        }`;

  const token = await gql(
    "http://shop-roles.node.ed.asmer.org.ua/graphql",
    loginQuery,
    { login: "test457", password: "123123" }
  );
  console.log(token);
})();
