import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  if (!path) return path;
  if (path.startsWith('http')) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
