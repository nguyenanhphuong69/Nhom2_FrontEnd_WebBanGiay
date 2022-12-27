import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, setEmpdatachange] = useState({});
  console.log(empdata);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${empid}`)
      .then((res) => {
        setEmpdatachange(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);
  return (
    <div className="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="single_product_image">
            <div
              class="single_product_image_background"
              // style="background-image:url(images/single_2.jpg)"
            >
              <img src={empdata.url} alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="product_details">
            <div class="product_details_title">
              <h2>{empdata.tensp}</h2>
              <p>{empdata.chitiet}</p>
            </div>
            <div class="free_delivery d-flex flex-row align-items-center justify-content-center">
              <span class="ti-truck">
                <i class="bi bi-truck"></i>
              </span>
              <span>free delivery</span>
            </div>
            {/* <div class="original_price">$629.99</div> */}
            <div class="product_price">{empdata.gia}</div>
            <ul class="star_rating">
              <li>
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-star-o" aria-hidden="true"></i>
              </li>
            </ul>
            <div class="product_color">
              <span>Select Color:</span>
              <ul>
                <li>
                  <i class="bi bi-circle-fill"></i>
                </li>
                <li>
                  <i class="bi bi-circle-fill"></i>
                </li>
                <li>
                  <i class="bi bi-circle-fill"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="card row" style={{ textAlign: "left" }}>
        <div className="card-title"></div>
        <div className="card-body"></div>

        <div>
          <h2>
            The Product name is : <b>{empdata.tensp}</b> ({empdata.id})
          </h2>
          <h3>Contact Details</h3>
          <h5>Price is : {empdata.gia}</h5>
          <h5>Detail is : {empdata.chitiet}</h5>
          <h5>
            <Link>
              <img src={empdata.url} alt="" />
            </Link>
          </h5>
          <Link className="btn btn-danger" to="/product">
            Back to Listing
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default EmpDetail;
