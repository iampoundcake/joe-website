const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = './src/content';

// Helper function to format date as YYYYMMDD
function formatDateForFilename(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date: ${dateStr}`);
    }
    return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  } catch (error) {
    console.error(`Error formatting date ${dateStr}:`, error);
    return 'unknown-date';
  }
}

async function migrateFiles(): Promise<void> {
  try {
    const contentDirs = await fs.readdir(CONTENT_DIR);
    
    for (const dir of contentDirs) {
      const dirPath = path.join(CONTENT_DIR, dir);
      const stats = await fs.stat(dirPath);
      
      if (!stats.isDirectory()) continue;
      
      const files = await fs.readdir(dirPath);
      const mdFiles = files.filter((f: string) => f.endsWith('.md'));
      
      for (const file of mdFiles) {
        const filePath = path.join(dirPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const { data } = matter(content);
        
        if (!data.publishDate) {
          console.warn(`Warning: No publishDate found in ${filePath}`);
          continue;
        }
        
        const dateStr = formatDateForFilename(data.publishDate);
        const newName = `${file.replace('.md', '')}-${dateStr}.md`;
        const newPath = path.join(dirPath, newName);
        
        await fs.rename(filePath, newPath);
        console.log(`Renamed: ${file} → ${newName}`);
      }
    }
    
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrateFiles(); 