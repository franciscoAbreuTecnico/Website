import fs from 'fs';
import path from 'path';

const TEAM_DIR = path.join(process.cwd(), 'public/images/team');

export function getAvailableYears() {
  if (!fs.existsSync(TEAM_DIR)) return [];

  return fs
    .readdirSync(TEAM_DIR, { encoding: 'utf8' }) // Ensure UTF-8 encoding
    .filter(year => fs.statSync(path.join(TEAM_DIR, year)).isDirectory() && /^\d{4}$/.test(year))
    .sort((a, b) => b - a);
}

export function getTeamImages(year) {
  const yearPath = path.join(TEAM_DIR, year);

  if (!fs.existsSync(yearPath)) return [];

  const pathpics = fs
    .readdirSync(yearPath, { encoding: 'utf8' }) // Ensure UTF-8 encoding
    .filter(file => /\.(webp)$/i.test(file));

  var teampic = '';
  if (pathpics.length > 0)
    teampic = `/images/team/${year}/${encodeURIComponent(pathpics[0].normalize('NFC'))}`;

  const categories = fs
    .readdirSync(yearPath, { encoding: 'utf8' }) // Ensure UTF-8 encoding
    .filter(category => fs.statSync(path.join(yearPath, category)).isDirectory());

  return {
    data: categories.map(category => {
      const categoryPath = path.join(yearPath, category);
      const images = fs
        .readdirSync(categoryPath, { encoding: 'utf8' }) // Ensure UTF-8 encoding
        .filter(
          file => /\.(webp)$/i.test(file) && !/_carta\.webp$/i.test(file) // Exclude "_carta.webp"
        );

      return {
        name: category.normalize('NFC').replace(/^\d+ -\s*/, ''),
        images: images.map(
          img =>
            `/images/team/${year}/${encodeURIComponent(category.normalize('NFC'))}/${encodeURIComponent(img.normalize('NFC'))}`
        ),
      };
    }),
    team: teampic,
  };
}
