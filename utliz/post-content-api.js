import fs from "fs";
import path from "path";

//Third part libaray
import matter from "gray-matter";

export function getAllPosts() {
  //Array for storing All posts data
  const postsData = [];
  //create the dir/path to /posts folder and read all posts/.md files
  const dir = path.join(process.cwd(), "posts");
  const dirFiles = fs.readdirSync(dir, "utf-8");

  //loop throw /posts folder files
  dirFiles.map((file) => {
    const path = `${dir}/${file}`;

    const fileData = fs.readFileSync(path, "utf-8");
    const { data, content } = matter(fileData);
    const postData = {
      ...data,
      content,
    };
    postsData.push(postData);
  });

  return postsData;
}

export function getSinglePost(slug) {
  // post direction, read and filter all files in the folder
  const dir = path.join(process.cwd(), "posts");
  const dirFile = fs
    .readdirSync(dir, "utf-8")
    .filter((f) => f === slug + ".md");

  //post direction
  const postPath = `${dir}/${dirFile[0]}`;
  const fileData = fs.readFileSync(postPath, "utf-8");

  const { data, content } = matter(fileData);

  const postData = {
    ...data,
    content,
  };
  return postData;
}

export function getPostsTitles() {
  const dir = path.join(process.cwd(), "posts");

  const posts = fs
    .readdirSync(dir, "utf-8")
    .filter((p) => p.replace(/\.md$/, ""));
  return fs.readdirSync(dir, "utf-8");
}
