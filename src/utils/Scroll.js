export function handleScroll(id) {
  const element = document.getElementById(id);

  if(element) {
    element.scrollIntoView({behavior: "smooth"});
  }
}