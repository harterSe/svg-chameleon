
import { isAbsolute, join } from 'path';


/**
 * Convert path to absolute path
 * 
 * @param {string} path
 */
export const getAbsolutePath = (path: string): string => isAbsolute(path) === true ? path : join(process.cwd(), path);