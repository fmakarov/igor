// src/lib/pocketbase.js
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function getProjectsFromPocketBase(options = {}) {
  const {
    category = '',
    featured = false,
    page = 1,
    perPage = 12,
    sort = '-created'
  } = options;

  let filter = '';

  if (category) {
    filter = `category = "${category}"`;
  }

  if (featured) {
    filter = filter ? `${filter} && featured = true` : 'featured = true';
  }

  try {
    const result = await pb.collection('projects').getList(page, perPage, {
      sort,
      filter,
      expand: 'category', // если нужно
    });

    return {
      items: result.items,
      totalItems: result.totalItems,
      totalPages: result.totalPages,
      currentPage: result.page
    };
  } catch (error) {
    console.error('Ошибка при загрузке проектов:', error);
    return { items: [], totalItems: 0, totalPages: 0, currentPage: 1 };
  }
}

// Получить один проект по slug
export async function getProjectBySlug(slug) {
  try {
    return await pb.collection('projects').getFirstListItem(`slug="${slug}"`);
  } catch (error) {
    return null;
  }
}