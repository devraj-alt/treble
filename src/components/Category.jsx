import "../components/StyleCategory.css";

export const Category = ({ categories }) => {
  return (
    <div className="Container-wrapper">
      {categories.map((item) => {
        const { id, name, categoryName } = item;
        return (
          <div key={id} className="Category-container">
            <p className="Categories">{name}</p>
          </div>
        );
      })}
    </div>
  );
};
