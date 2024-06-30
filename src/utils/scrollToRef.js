export const scrollToRef = (ref) => {
    const position = ref.current.offsetTop;
    window.scrollTo({top: position, behavior: "smooth"});
}