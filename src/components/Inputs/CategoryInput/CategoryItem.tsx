import React from 'react';
import {Pressable, Text} from 'react-native';
import {
  categoryInputStyles,
  getCategoryItemStyles,
} from './categoryInputStyles';
import {ToDoCategory} from '../../../interfaces/toDo';
import PersonalCategoryIcon from '../../Icons/PersonalCategoryIcon';
import WorkCategoryIcon from '../../Icons/WorkCategoryIcon';
import StudyCategoryIcon from '../../Icons/StudyCategoryIcon';
import OtherCategoryIcon from '../../Icons/OtherCategoryIcon';

interface CategoryItemProps {
  category: ToDoCategory;
  active: boolean;
  onSelectCategory: (category: ToDoCategory) => void;
}

export default function CategoryItem({
  category,
  active,
  onSelectCategory,
}: CategoryItemProps) {
  const selectedStyle = getCategoryItemStyles(active);

  return (
    <Pressable
      style={[categoryInputStyles.itemContainer, selectedStyle.container]}
      onPress={() => onSelectCategory(category)}>
      <Text style={[categoryInputStyles.itemLabel, selectedStyle.label]}>
        {category}
      </Text>
      {category === ToDoCategory.personal && (
        <PersonalCategoryIcon
          styles={[categoryInputStyles.icon, selectedStyle.icon]}
          width={34}
          height={34}
        />
      )}
      {category === ToDoCategory.work && (
        <WorkCategoryIcon
          styles={[categoryInputStyles.icon, selectedStyle.icon]}
          width={34}
          height={34}
        />
      )}
      {category === ToDoCategory.study && (
        <StudyCategoryIcon
          styles={[categoryInputStyles.icon, selectedStyle.icon]}
          width={34}
          height={34}
        />
      )}
      {category === ToDoCategory.other && (
        <OtherCategoryIcon
          styles={[categoryInputStyles.icon, selectedStyle.icon]}
          width={34}
          height={34}
        />
      )}
    </Pressable>
  );
}
