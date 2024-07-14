import CategoryPage from '../../reusableComponents/CategoryPage';
import subcategories from './data/subcategories';

const Misc = () => {
  return <CategoryPage header='Misc' listItems={subcategories} />;
};

export default Misc;
