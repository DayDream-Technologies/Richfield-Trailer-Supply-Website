import catalog from "@/data/catalog.json";
import {
  categories,
  getCategory,
  getSubcategory,
  type Category,
  type Subcategory,
} from "@/data/taxonomy";

export type Product = {
  sku: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  summary?: string;
  image?: string;
};

const products = catalog as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.category === categorySlug);
}

export function getProductsBySubcategory(
  categorySlug: string,
  subcategorySlug: string,
): Product[] {
  return products.filter(
    (product) =>
      product.category === categorySlug &&
      product.subcategory === subcategorySlug,
  );
}

export function getProduct(
  categorySlug: string,
  subcategorySlug: string,
  slug: string,
): Product | undefined {
  return products.find(
    (product) =>
      product.category === categorySlug &&
      product.subcategory === subcategorySlug &&
      product.slug === slug,
  );
}

export function getCategoryWithCount(slug: string) {
  const category = getCategory(slug);
  if (!category) return undefined;
  return {
    ...category,
    productCount: getProductsByCategory(slug).length,
  };
}

export function getSubcategoryWithCount(
  categorySlug: string,
  subcategorySlug: string,
) {
  const subcategory = getSubcategory(categorySlug, subcategorySlug);
  if (!subcategory) return undefined;
  return {
    ...subcategory,
    productCount: getProductsBySubcategory(categorySlug, subcategorySlug).length,
  };
}

export { categories, getCategory, getSubcategory };
export type { Category, Subcategory };
