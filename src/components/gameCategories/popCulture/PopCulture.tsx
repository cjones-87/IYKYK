import CategoryPage from '../../reusableComponents/CategoryPage';
import subcategories from './data/subcategories';

const PopCulture = () => {
  return <CategoryPage header='Pop Culture' listItems={subcategories} />;
};

export default PopCulture;
