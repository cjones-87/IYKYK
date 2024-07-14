import CategoryPage from '../../reusableComponents/CategoryPage';
import subcategories from './data/subcategories';

const Environment = () => {
  return <CategoryPage header='Environment' listItems={subcategories} />;
};

export default Environment;
