import { join } from 'path';
import { readdirSync, copyFileSync, mkdirSync } from 'fs';

const ASSETS_PATH = join(process.cwd(), 'src/assets/bookcovers');
const CONTENT_PATH = join(process.cwd(), 'src/content/media-library');

async function restoreCovers() {
  try {
    // Get all cover images from assets folder
    const coverFiles = readdirSync(ASSETS_PATH);

    // For each cover file
    coverFiles.forEach(file => {
      // Get the content folder name (remove the extension from cover file)
      const folderName = file.replace(/\.(jpg|png|webp)$/, '');
      const contentFolder = join(CONTENT_PATH, folderName);
      
      try {
        // Create content folder if it doesn't exist
        mkdirSync(contentFolder, { recursive: true });
        
        // Copy the cover file back
        copyFileSync(
          join(ASSETS_PATH, file),
          join(contentFolder, file)
        );
        
        console.log(`✅ Restored cover for: ${folderName}`);
      } catch (err) {
        console.error(`❌ Error restoring ${file}:`, err);
      }
    });

  } catch (error) {
    console.error('Error reading directories:', error);
  }
}

restoreCovers(); 