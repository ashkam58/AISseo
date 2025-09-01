import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Base content directory
const contentDirectory = path.join(process.cwd(), 'content');

// Get all files from a directory
export function getFilesFromDirectory(dir) {
  const fullPath = path.join(contentDirectory, dir);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  return fs.readdirSync(fullPath).filter(file => file.endsWith('.mdx'));
}

// Parse MDX file
export function parseMDXFile(filePath) {
  const fullPath = path.join(contentDirectory, filePath);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontMatter: data,
    content
  };
}

// Get all courses
export function getAllCourses() {
  const courseFiles = getFilesFromDirectory('courses');
  
  return courseFiles.map(file => {
    const slug = file.replace('.mdx', '');
    const courseData = parseMDXFile(`courses/${file}`);
    
    if (!courseData) return null;
    
    return {
      slug,
      ...courseData.frontMatter,
      content: courseData.content
    };
  }).filter(Boolean);
}

// Get single course by slug
export function getCourseBySlug(slug) {
  const courseData = parseMDXFile(`courses/${slug}.mdx`);
  
  if (!courseData) return null;
  
  return {
    slug,
    ...courseData.frontMatter,
    content: courseData.content
  };
}

// Get all blog posts
export function getAllBlogPosts() {
  const blogFiles = getFilesFromDirectory('blog');
  
  return blogFiles.map(file => {
    const slug = file.replace('.mdx', '');
    const blogData = parseMDXFile(`blog/${file}`);
    
    if (!blogData) return null;
    
    return {
      slug,
      ...blogData.frontMatter,
      content: blogData.content
    };
  }).filter(Boolean);
}

// Get single blog post by slug
export function getBlogPostBySlug(slug) {
  const blogData = parseMDXFile(`blog/${slug}.mdx`);
  
  if (!blogData) return null;
  
  return {
    slug,
    ...blogData.frontMatter,
    content: blogData.content
  };
}

// Calculate reading time
export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  
  return `${readingTime} min read`;
}

// Get related posts based on tags
export function getRelatedPosts(currentSlug, tags, limit = 3) {
  const allPosts = getAllBlogPosts().filter(post => post.slug !== currentSlug);
  
  if (!tags || tags.length === 0) {
    return allPosts.slice(0, limit);
  }
  
  // Score posts based on matching tags
  const scoredPosts = allPosts.map(post => {
    const postTags = post.tags || [];
    const matchingTags = postTags.filter(tag => tags.includes(tag));
    return {
      ...post,
      score: matchingTags.length
    };
  });
  
  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
