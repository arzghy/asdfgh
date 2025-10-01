import { API_BASE_URL, API_ENDPOINTS } from '../lib/config';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const blogService = {
  // Get all blogs
  getBlogs: async () => {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BLOGS}`, {
      cache: 'no-store', // Untuk client-side fetching
    });
    return handleResponse(response);
  },

  // Get blog by ID
  getBlogById: async (id) => {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BLOGS}/${id}`, {
      cache: 'no-store',
    });
    return handleResponse(response);
  },
};

export const blogCategoryService = {
  // Get all blog categories
  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BLOG_CATEGORIES}`, {
      cache: 'no-store',
    });
    return handleResponse(response);
  },

  // Get category by ID
  getCategoryById: async (id) => {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.BLOG_CATEGORIES}/${id}`, {
      cache: 'no-store',
    });
    return handleResponse(response);
  },
};