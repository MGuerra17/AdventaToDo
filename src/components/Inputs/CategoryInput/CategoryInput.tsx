import React from 'react';
import {View, Text} from 'react-native';
import CategoryItem from './CategoryItem';
import {categoryInputStyles} from './categoryInputStyles';
import {ToDoCategory} from '../../../interfaces/toDo';

interface CategoryInputProps {
  selectedCategory: ToDoCategory;
  setSelectedCategory: (category: ToDoCategory) => void;
}

export default function CategoryInput({
  selectedCategory,
  setSelectedCategory,
}: CategoryInputProps) {
  return (
    <>
      <Text style={categoryInputStyles.label}>Categoría</Text>
      <View style={categoryInputStyles.container}>
        {Object.values(ToDoCategory).map(category => {
          return (
            <CategoryItem
              onSelectCategory={setSelectedCategory}
              key={category}
              category={category as ToDoCategory}
              active={category === selectedCategory}
            />
          );
        })}
      </View>
    </>
  );
}
