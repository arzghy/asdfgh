export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  BLOGS: '/blogs',
  BLOG_CATEGORIES: '/blog-categories',
};

// Revalidate time untuk ISR (dalam detik)
export const REVALIDATE_TIME = {
  BLOGS: 300,
  BLOG_DETAIL: 300,
  CATEGORIES: 600,
};