import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface CheckboxesProps {
  selectedCategories: number[];
  setSelectedCategories: (categories: number[]) => void;
}

const Checkboxes: React.FC<CheckboxesProps> = ({ selectedCategories, setSelectedCategories }) => {
  const categories = useSelector((state: RootState) => state.notes.categories);

  if (!categories || categories.length === 0) {
    return <p>Loading categories...</p>;
  }

  const handleCheckboxChange = (id: number) => {
    setSelectedCategories(
      selectedCategories.includes(id)
        ? selectedCategories.filter((categoryId) => categoryId !== id)
        : [...selectedCategories, id]
    );
  };

  return (
    <div className="checkbox-menu">
      {categories.map((category) => (
        <label className="checkbox-label" key={category.id}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category.id)}
            onChange={() => handleCheckboxChange(category.id)}
          />
          <span>{category.icon} {category.name}</span> {/* ✅ Ensures text stays aligned */}
        </label>
      ))}
    </div>
  );
};

export default Checkboxes;
