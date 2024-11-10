import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';

// Create the icon maps for solid and outline variants
const createIconMap = (Icons) =>
    Object.keys(Icons).reduce((acc, iconName) => {
        const key = iconName.replace('Icon', '').toLowerCase(); // Remove 'Icon' suffix and lowercase
        acc[key] = Icons[iconName];
        return acc;
    }, {});

const solidIconMap = createIconMap(SolidIcons);
const outlineIconMap = createIconMap(OutlineIcons);

// Function to get the icon component based on the variant and name
export const getIcon = (name, variant) => {
    const iconMap = variant === 'outline' ? outlineIconMap : solidIconMap;
    return iconMap[name] || null;
};
