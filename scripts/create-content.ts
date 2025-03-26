const fs = require('fs').promises;
const path = require('path');
const readline = require('readline');

const TEMPLATES_DIR = './src/templates/content';
const CONTENT_DIR = './src/content';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

type MediaSubtype = 'book' | 'tv' | 'music';
type ContentType = 'post' | 'media-library' | 'weeklies' | 'training';

interface MediaTypeConfig {
  emoji: string;
  defaultCover: string;
  template: string;
}

const VALID_TYPES: ContentType[] = ['post', 'media-library', 'weeklies', 'training'];
const MEDIA_SUBTYPES: Record<MediaSubtype, MediaTypeConfig> = {
  'book': {
    emoji: '📚',
    defaultCover: '@/assets/defaults/book-cover.png',
    template: `## author

## genre

## my one sentence synop

## rating

## longer review

`
  },
  'tv': {
    emoji: '📺',
    defaultCover: '../../../assets/defaults/tv-cover.png',
    template: `## creator

## genre

## my one sentence synop

## rating

## longer review

`
  },
  'music': {
    emoji: '💿',
    defaultCover: '../../../assets/defaults/music-cover.png',
    template: `## artist

## genre

## my one sentence synop

## slap rating

## longer review

`
  }
};

async function prompt(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function isContentType(value: string): value is ContentType {
  return VALID_TYPES.includes(value as ContentType);
}

function isMediaSubtype(value: string): value is MediaSubtype {
  return Object.keys(MEDIA_SUBTYPES).includes(value as MediaSubtype);
}

async function createContent() {
  try {
    // Show numbered content types
    const typeOptions = VALID_TYPES.map((type, index) => `${index + 1} (${type})`).join('/');
    const typeInput = await prompt(`Content type (${typeOptions}): `);
    
    // Convert number input to type and validate
    const typeIndex = parseInt(typeInput) - 1;
    if (isNaN(typeIndex) || typeIndex < 0 || typeIndex >= VALID_TYPES.length) {
      console.error(`Invalid choice. Must be a number between 1 and ${VALID_TYPES.length}`);
      rl.close();
      return;
    }
    
    const type = VALID_TYPES[typeIndex];
    if (type === undefined || !isContentType(type)) {
      console.error(`Invalid content type: ${type}`);
      rl.close();
      return;
    }

    let subtype: MediaSubtype | undefined;
    let subtypeEmoji = '';
    let subtypeTemplate = '';

    // If media-library, show numbered subtypes
    if (type === 'media-library') {
      const subtypeList = Object.keys(MEDIA_SUBTYPES) as MediaSubtype[];
      const subtypeOptions = subtypeList.map((type, index) => `${index + 1} (${type})`).join('/');
      const subtypeInput = await prompt(`Media type (${subtypeOptions}): `);
      
      // Convert number input to subtype and validate
      const subtypeIndex = parseInt(subtypeInput) - 1;
      if (isNaN(subtypeIndex) || subtypeIndex < 0 || subtypeIndex >= subtypeList.length) {
        console.error(`Invalid choice. Must be a number between 1 and ${subtypeList.length}`);
        rl.close();
        return;
      }

      subtype = subtypeList[subtypeIndex];
      if (subtype === undefined || !isMediaSubtype(subtype)) {
        console.error(`Invalid media type: ${subtype}`);
        rl.close();
        return;
      }

      subtypeEmoji = MEDIA_SUBTYPES[subtype].emoji;
      subtypeTemplate = MEDIA_SUBTYPES[subtype].template;
    }

    // Get title
    const title = await prompt('Title: ');
    
    // Get description
    const description = await prompt('Description: ');
    
    // Generate date string
    const date = new Date();
    const dateStr = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    
    // Create frontmatter based on type
    let content = '';
    if (type === 'media-library' && subtype) {
      content = `---
title: "${title}"
description: "${description}"
publishDate: "${dateStr}"
coverImage:
  src: "@/assets/defaults/placeholder.jpg"
  alt: "${title} cover"
tags: ["${subtypeEmoji}"]
draft: true
---

currently reading...

${subtypeTemplate}`;
    } else {
      content = `---
title: "${title}"
description: "${description}"
publishDate: "${dateStr}"
tags: []
draft: true
---

`;
    }

    // Generate filename
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    let filePath;
    if (type === 'media-library') {
      // Create a directory for the media item
      const dirPath = path.join(CONTENT_DIR, type, slug);
      await fs.mkdir(dirPath, { recursive: true });
      filePath = path.join(dirPath, 'index.md');
    } else {
      const dateFormatted = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
      const filename = `${slug}-${dateFormatted}.md`;
      const contentPath = path.join(CONTENT_DIR, type);
      await fs.mkdir(contentPath, { recursive: true });
      filePath = path.join(contentPath, filename);
    }
    
    // Write file
    await fs.writeFile(filePath, content.replace(/\n/g, '\r\n'), { encoding: 'utf8' });
    
    console.log(`Created ${filePath}`);
    
    rl.close();
  } catch (error) {
    console.error('Error:', error);
    rl.close();
  }
}

createContent();