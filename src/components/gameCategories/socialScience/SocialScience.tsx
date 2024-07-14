import CategoryPage from '../../reusableComponents/CategoryPage';
import subcategories from './data/subcategories';

const SocialScience = () => {
  return <CategoryPage header='Social Science' listItems={subcategories} />;
};

export default SocialScience;
