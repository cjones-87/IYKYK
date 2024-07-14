import CategoryPage from '../../reusableComponents/CategoryPage';
import subcategories from './data/subcategories';

const Entertainment = () => {
  return <CategoryPage header='Entertainment' listItems={subcategories} />;
};

export default Entertainment;
