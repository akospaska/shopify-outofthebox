import { Heading, Page } from "@shopify/polaris";
const getRequest = () => {
  fetch("./api/test")
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React Hurray!$!🎉</Heading>
    <button onClick={(e) => getRequest()}>Test request</button>
  </Page>
);

export default Index;
