// https://www.codeconcisely.com/posts/nextjs-storing-images-next-to-markdown/
// https://www.codeconcisely.com/posts/nextjs-relative-image-paths-in-markdown/

import fs from 'fs';
import path from 'path';
import fsExtra from 'fs-extra';

const fsPromises = fs.promises;
const postsDir = './content/meetings';
const targetDir = './public/images';

export async function emptyTargetDir() {
  await fsExtra.emptyDir(targetDir);
}

async function copyImagesToPublic(images, slug) {
  for (const image of images) {
    await fsPromises.copyFile(
      `${postsDir}/${slug}/${image}`,
      `${targetDir}/${slug}/${image}`
    );
  }
}

export async function createPostImageFoldersForCopySlug(slug) {
  const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

  // Read all files inside current post folder
  const postDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`);

  // Filter out files with allowed file extension (images)
  const images = postDirFiles.filter(file =>
    allowedImageFileExtensions.includes(path.extname(file)),
  );

  if (images.length) {
    // Iteratively create slug folder inside public
    const split_slug = slug.split('/');
    for (let i = 0; i < split_slug.length; i++) {
      // if folder doesn't exist, create it
      if (!fs.existsSync(`${targetDir}/${split_slug.slice(0, i + 1).join('/')}`))
      await fsPromises.mkdir(`${targetDir}/${split_slug.slice(0, i + 1).join('/')}`);
    }
    // await fsPromises.mkdir(`${targetDir}/${slug}`);

    await copyImagesToPublic(images, slug);
  }
}

async function createPostImageFoldersForCopy() {
  // Get every post folder: post-one, post-two etc.
  const postSlugs = await fsPromises.readdir(postsDir);

  for (const slug of postSlugs) {
    const allowedImageFileExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

    // Read all files inside current post folder
    const postDirFiles = await fsPromises.readdir(`${postsDir}/${slug}`);

    // Filter out files with allowed file extension (images)
    const images = postDirFiles.filter(file =>
      allowedImageFileExtensions.includes(path.extname(file)),
    );

    if (images.length) {
      // Create a folder for images of this post inside public
      await fsPromises.mkdir(`${targetDir}/${slug}`);

      await copyImagesToPublic(images, slug);
    }
  }
}

// await fsExtra.emptyDir(targetDir);
// await createPostImageFoldersForCopy();