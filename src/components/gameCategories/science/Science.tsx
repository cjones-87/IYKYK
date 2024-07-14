import CategoryPage from '../../reusableComponents/CategoryPage';
import subcategories from './data/subcategories';

const Science = () => {
  return <CategoryPage header='Science' listItems={subcategories} />;
};

export default Science;
