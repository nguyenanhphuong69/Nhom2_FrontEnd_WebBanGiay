import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/categories_responsive.css";
import "../../styles/categories_styles.css";
const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, setEmpdatachange] = useState();
  console.log(empdata, "duy23");
  useEffect(() => {
    fetch("http://localhost:5000/category/ " + empid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setEmpdatachange(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);
  return (
    <div className="container">
      <tbody>
        <div class="products_iso ">
          <div class="">
            <div class="">
              {/* <!-- Product Sorting --> */}

              <div class="product_sorting_container product_sorting_container_top">
                <div class="pages d-flex flex-row align-items-center">
                  <div class="page_current">
                    <ul class="page_selection">
                      <li>
                        <Link>1</Link>
                      </li>
                      <li>
                        <Link>2</Link>
                      </li>
                      <li>
                        <Link>3</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- Product Grid --> */}

              <div class="product-grid row">
                {/* <!-- Product 1 --> */}
                {empdata &&
                  empdata.map((item) => (
                    <div class="product-item men key={item.id} ">
                      <div class="product discount product_filter">
                        <div class="product_image">
                          <img src={item.url} alt="" />
                        </div>
                        <div class="favorite favorite_left"></div>
                        <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                          <span>-$20</span>
                        </div>
                        <div class="product_info">
                          <h6 class="product_name">
                            <a href="single.html">{item.tensp}</a>
                          </h6>
                          <div class="product_price">
                            {item.gia}
                            {/* <span>$590.00</span> */}
                          </div>
                        </div>
                      </div>
                      <div class="red_button add_to_cart_button">
                        <Link>add to cart</Link>
                      </div>
                    </div>
                  ))}
                {/* <!-- Product Sorting --> */}

                {/* <div class="product_sorting_container product_sorting_container_bottom clearfix">
                  <ul class="product_sorting">
                    <li>
                      <span>Show:</span>
                      <span class="num_sorting_text">04</span>
                      <i class="fa fa-angle-down"></i>
                      <ul class="sorting_num">
                        <li class="num_sorting_btn">
                          <span>01</span>
                        </li>
                        <li class="num_sorting_btn">
                          <span>02</span>
                        </li>
                        <li class="num_sorting_btn">
                          <span>03</span>
                        </li>
                        <li class="num_sorting_btn">
                          <span>04</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span class="showing_results">Showing 1–3 of 12 results</span>
                  <div class="pages d-flex flex-row align-items-center">
                    <div class="page_current">
                      <span>1</span>
                      <ul class="page_selection">
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                      </ul>
                    </div>
                    <div class="page_total">
                      <span>of</span> 3
                    </div>
                    <div id="next_page_1" class="page_next">
                      <a href="#">
                        <i
                          class="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* <tr>
            <td>{item.id}</td>
            <td>{item.tensp}</td>
            <td>{item.chitiet}</td>
            <td>{item.gia}</td>
          </tr> */}
        </div>
      </tbody>
    </div>
  );
};

export default EmpDetail;
