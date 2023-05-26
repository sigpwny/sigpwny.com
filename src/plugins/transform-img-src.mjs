import { visit } from 'unist-util-visit';

const imgDirInsidePublic = 'images';

export default function transformImgSrc() {
  return (tree, file) => {
    const slug = file.data.rawDocumentData.sourceFileDir;

    visit(tree, 'paragraph', node => {
      const image = node.children.find(child => child.type === 'image');

      if (image) {
        const fileName = image.url.replace('./', '');
        image.url = `/${imgDirInsidePublic}/${slug}/${fileName}`;
      }
    });
  };
}