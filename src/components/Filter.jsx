import "./FilterStyle.css";

export const Filter = () => {
  return (
    <div className="Filter-container">
      <h3 className="Heading">Filter</h3>

      <div className="Filter-section">
        <h4 className="Category-name">Price:</h4>
        <ul>
          <li className="List-style">
            <input type="checkbox" />
            <label>1000 - 5000</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>6000 - 10000</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>11000 - 20000</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>21000 - 35000</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>36000 - 50000</label>
          </li>
        </ul>
      </div>

      <div className="Filter-section">
        <h4 className="Category-name">Category:</h4>
        <ul>
          <li className="List-style">
            <input type="checkbox" />
            <label>Headphone</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>Speaker</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>Earbud</label>
          </li>
        </ul>
      </div>

      <div className="Filter-section">
        <h4 className="Category-name">Rating:</h4>
        <ul>
          <li className="List-style">
            <input type="checkbox" />
            <label>5 Stars & below</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>4 Stars & below</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>3 Stars & below</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>2 Stars & below</label>
          </li>
          <li className="List-style">
            <input type="checkbox" />
            <label>1 Stars & below</label>
          </li>
        </ul>
      </div>

      <div className="Buttons-container">
        <button className="Filter-button">Apply</button>
        <button className="Clear-button">Clear</button>
      </div>
    </div>
  );
};
