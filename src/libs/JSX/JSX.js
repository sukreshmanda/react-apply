const JSXExample = () => {
  if (window.location.pathname.startsWith("/hello/")) {
    var path = window.location.pathname.split("/hello/")[1];
    const variable = <h1>Hello {path}! How are you</h1>;
    return variable;
  }
};
export default JSXExample;
