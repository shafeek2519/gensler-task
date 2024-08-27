import React, { useState } from "react";
import Products from "./products";
import "../styles.css";

const Accordion = ({ data, onAddToCart }) => {
  const [openMainId, setOpenMainId] = useState(null); // for handling main headings of the accordion
  const [openSubId, setOpenSubId] = useState(null); // for handling sub headings i.e products names inside the accordion

  const handleMainClick = (id) => {
    setOpenMainId(openMainId === id ? null : id);
    setOpenSubId(null); // Close subheadings when changing main sections
  };

  const handleSubClick = (id) => {
    setOpenSubId(openSubId === id ? null : id);
  };

  const selectedSubitems =
    data.find((main) => main.id === openMainId)?.subitems || []; // check the subitems availability
  const selectedSubitem = selectedSubitems.find((sub) => sub.id === openSubId);

  return (
    <>
      <div className="app-container">
        <div className="accordion">
          {/* here we are map the main headings (titles) & Sub headings inside the accordion & add the active class for the clicked main heading for styling purpose*/}
          {data.map((main) => (
            <div key={main.id} className="accordion-section">
              <div
                className={`accordion-header ${
                  openMainId === main.id ? "active" : ""
                }`}
                onClick={() => handleMainClick(main.id)}
              >
                {main.title}
              </div>
              {openMainId === main.id && (
                <div className="accordion-subitems">
                  {main.subitems.map((sub) => (
                    <div
                      key={sub.id}
                      className={`accordion-subitem ${
                        openSubId === sub.id ? "active" : ""
                      }`}
                      onClick={() => handleSubClick(sub.id)}
                    >
                      {sub.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* here we are showing the products & its title in top based on the user click the sub headings & we are reused the products component here & we are using the index for reprresent unique products  */}
        <div className="content">
          <div className="prod-header">
            {selectedSubitem ? selectedSubitem.content : "Products"}
          </div>
          {openSubId && selectedSubitem.prodTitle && (
            <div className="products-list">
              {selectedSubitem.prodTitle.map((product, index) => (
                <Products
                  key={index}
                  title={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
