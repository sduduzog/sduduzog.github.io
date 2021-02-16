export default (context, inject) => {
  const foo = {
    bar: 7,
    resizeBlokImage(image, option = '768x0/smart') {
      const imageService = '//img2.storyblok.com/';
      const path = image.replace(/(http(s?):)?\/\/a.storyblok.com/, '');
      return imageService + option + path;
    },
  };
  inject('foo', foo);
  context.$foo = foo;
};
