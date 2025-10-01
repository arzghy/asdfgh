// hooks/useBlog.js
import { useQuery } from '@tanstack/react-query';
import { blogService, blogCategoryService } from '../services/blogService';

// Query Keys
export const BLOG_QUERY_KEYS = {
  ALL: ['blogs'],
  DETAIL: (id) => ['blogs', id],
  CATEGORIES: ['blog-categories'],
  CATEGORY_DETAIL: (id) => ['blog-categories', id],
};

// ========== BLOG QUERIES ==========

// Hook untuk get all blogs (Client-side)
export const useBlogs = () => {
  return useQuery({
    queryKey: BLOG_QUERY_KEYS.ALL,
    queryFn: blogService.getBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime)
  });
};

// Hook untuk get blog by ID (Client-side)
export const useBlogDetail = (id) => {
  return useQuery({
    queryKey: BLOG_QUERY_KEYS.DETAIL(id),
    queryFn: () => blogService.getBlogById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

// ========== BLOG CATEGORY QUERIES ==========

// Hook untuk get all categories (Client-side)
export const useBlogCategories = () => {
  return useQuery({
    queryKey: BLOG_QUERY_KEYS.CATEGORIES,
    queryFn: blogCategoryService.getCategories,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};

// Hook untuk get category by ID (Client-side)
export const useBlogCategoryDetail = (id) => {
  return useQuery({
    queryKey: BLOG_QUERY_KEYS.CATEGORY_DETAIL(id),
    queryFn: () => blogCategoryService.getCategoryById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  });
};